const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://npiemdvpbihewhlfzyll.supabase.co',
  'sb_secret_PB5bjLW6jCUaND8g_DvyEA_jKvH9oEO'
);

module.exports = async (req, res) => {
  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .order('timestamp', { ascending: false });
    
    if (error) {
      console.error('Error fetching orders:', error);
      return res.status(500).json({ error: 'Failed to fetch orders' });
    }
    return res.json(data || []);
  }
  
  return res.status(405).json({ error: 'Method not allowed' });
};
