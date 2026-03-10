const { createClient } = require('@supabase/supabase-js');
const { v4: uuidv4 } = require('uuid');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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

  res.status(201).json({ success: true, orderId: order.id });
};
