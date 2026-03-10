const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = process.env.PORT || 3000;
const ORDERS_FILE = path.join(__dirname, 'data', 'orders.json');

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Ensure data directory and orders file exist
if (!fs.existsSync(path.join(__dirname, 'data'))) {
  fs.mkdirSync(path.join(__dirname, 'data'));
}
if (!fs.existsSync(ORDERS_FILE)) {
  fs.writeFileSync(ORDERS_FILE, JSON.stringify([], null, 2));
}

// Helper: read orders
function readOrders() {
  try {
    const data = fs.readFileSync(ORDERS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Helper: write orders
function writeOrders(orders) {
  fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2));
}

// API: Place a new order (digital order slip)
app.post('/api/orders', (req, res) => {
  const { customerName, phone, orderType, address, items, specialInstructions, subtotal, gst, cgst, total } = req.body;

  // Validation
  if (!customerName || !customerName.trim()) {
    return res.status(400).json({ error: 'Customer name is required.' });
  }
  if (!phone || !phone.trim()) {
    return res.status(400).json({ error: 'Phone number is required.' });
  }
  if (!items || items.length === 0) {
    return res.status(400).json({ error: 'Please select at least one item.' });
  }
  // Address is required for Pickup and Delivery orders
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

  const orders = readOrders();
  orders.unshift(order);
  writeOrders(orders);

  // Emit new order to all connected counter dashboards
  io.emit('new-order', order);

  res.status(201).json({ success: true, orderId: order.id });
});

// API: Get all orders (for counter dashboard)
app.get('/api/orders', (req, res) => {
  const orders = readOrders();
  res.json(orders);
});

// API: Update order status (Processing / Completed)
app.post('/api/orders/:id/status', (req, res) => {
  const { status } = req.body;
  if (!status || !['Processing', 'Completed'].includes(status)) {
    return res.status(400).json({ error: 'Invalid status. Use Processing or Completed.' });
  }

  const orders = readOrders();
  const orderIndex = orders.findIndex(o => o.id === req.params.id);

  if (orderIndex === -1) {
    return res.status(404).json({ error: 'Order not found' });
  }

  orders[orderIndex].status = status;
  writeOrders(orders);

  // Emit status update to all connected counter dashboards
  io.emit('order-status-updated', { id: req.params.id, status });

  res.json({ success: true });
});

// Serve counter dashboard page
app.get('/counter', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'counter.html'));
});

// Serve main order page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Socket.io connection
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
  console.log(`  Counter dashboard at:   http://localhost:${PORT}/counter\n`);
});
