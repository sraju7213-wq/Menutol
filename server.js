const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

async function readOrders() {
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .order('timestamp', { ascending: false });
  if (error) {
    console.error('Error fetching orders:', error);
    return [];
  }
  return data || [];
}

async function writeOrders(orders) {
  const { error } = await supabase
    .from('orders')
    .upsert(orders, { onConflict: 'id' });
  if (error) {
    console.error('Error saving orders:', error);
  }
}

app.post('/api/orders', async (req, res) => {
  const { customerName, phone, orderType, address, items, specialInstructions, subtotal, gst, cgst, total } = req.body;

  if (!customerName || !customerName.trim()) {
    return res.status(400).json({ error: 'Customer name is required.' });
  }
  if (!phone || !phone.trim()) {
    return res.status(400).json({ error: 'Phone number is required.' });
  }
  if (!items || items.length === 0) {
    return res.status(400).json({ error: 'Please select at least one item.' });
  }
  if ((orderType === 'Pickup' || orderType === 'Delivery') && (!address || !address.trim())) {
    return res.status(400).json({ error: 'Address is required for ' + orderType + ' orders.' });
  }

  const order = {
    id: uuidv4().split('-')[0].toUpperCase(),
    customerName: customerName.trim(),
    phone: phone.trim(),
    orderType: orderType || 'Pickup',
    address: address ? address.trim() : '',
    items,
    specialInstructions: specialInstructions ? specialInstructions.trim() : '',
    subtotal,
    gst,
    cgst,
    total,
    timestamp: new Date().toISOString(),
    status: 'New',
  };

  const { error } = await supabase.from('orders').insert([order]);
  if (error) {
    console.error('Error inserting order:', error);
    return res.status(500).json({ error: 'Failed to save order' });
  }

  io.emit('new-order', order);

  res.status(201).json({ success: true, orderId: order.id });
});

app.get('/api/orders', async (req, res) => {
  const orders = await readOrders();
  res.json(orders);
});

app.post('/api/orders/:id/status', async (req, res) => {
  const { status } = req.body;
  if (!status || !['Processing', 'Completed'].includes(status)) {
    return res.status(400).json({ error: 'Invalid status. Use Processing or Completed.' });
  }

  const { error } = await supabase
    .from('orders')
    .update({ status })
    .eq('id', req.params.id);

  if (error) {
    console.error('Error updating order:', error);
    return res.status(500).json({ error: 'Failed to update order' });
  }

  io.emit('order-status-updated', { id: req.params.id, status });

  res.json({ success: true });
});

app.get('/counter', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'counter.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

io.on('connection', (socket) => {
  console.log('  Counter dashboard connected');
  socket.on('disconnect', () => {
    console.log('  Counter dashboard disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`\n  Tree of Life Cafe - Digital Order Slip System`);
  console.log(`  =============================================`);
  console.log(`  Server running at:      http://localhost:${PORT}`);
  console.log(`  Counter dashboard at:   http://localhost:${PORT}/counter`);
  console.log(`  Using Supabase:         ${process.env.SUPABASE_URL}\n`);
});
