const { createClient } = require('@supabase/supabase-js');
const { v4: uuidv4 } = require('uuid');

const supabase = createClient(
  'https://npiemdvpbihewhlfzyll.supabase.co',
  'sb_secret_PB5bjLW6jCUaND8g_DvyEA_jKvH9oEO'
);

module.exports = async (req, res) => {
  console.log('Request body:', JSON.stringify(req.body));
  console.log('Method:', req.method);
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body || {};
  const { customerName, phone, orderType, address, items, specialInstructions, subtotal, gst, cgst, total } = body;
  
  const customername = customerName;
  const ordertype = orderType;
  const specialinstructions = specialInstructions;

  if (!customername || !customername.trim()) {
    return res.status(400).json({ error: 'Customer name is required.' });
  }
  if (!phone || !phone.trim()) {
    return res.status(400).json({ error: 'Phone number is required.' });
  }
  if (!items || items.length === 0) {
    return res.status(400).json({ error: 'Please select at least one item.' });
  }
  if (ordertype === 'Delivery' && (!address || !address.trim())) {
    return res.status(400).json({ error: 'Address is required for ' + ordertype + ' orders.' });
  }

  const order = {
    id: uuidv4().split('-')[0].toUpperCase(),
    customername: customerName.trim(),
    phone: phone.trim(),
    ordertype: orderType || 'Pickup',
    address: address ? address.trim() : '',
    items,
    specialinstructions: specialInstructions ? specialInstructions.trim() : '',
    subtotal,
    gst,
    cgst,
    total,
    timestamp: new Date().toISOString(),
    status: 'New',
  };

  const { error } = await supabase.from('orders').insert([order]);
  console.log('Insert result:', JSON.stringify({ order, error }));
  if (error) {
    return res.status(500).json({ error: 'Failed to save order', details: error.message, code: error.code });
  }

  res.status(201).json({ success: true, orderId: order.id });
};
