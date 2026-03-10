const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { status } = req.body;
  const orderId = req.query.id || req.params.id;

  if (!status || !['Processing', 'Completed'].includes(status)) {
    return res.status(400).json({ error: 'Invalid status. Use Processing or Completed.' });
  }

  const { error } = await supabase
    .from('orders')
    .update({ status })
    .eq('id', orderId);

  if (error) {
    console.error('Error updating order:', error);
    return res.status(500).json({ error: 'Failed to update order' });
  }

  res.json({ success: true });
};
