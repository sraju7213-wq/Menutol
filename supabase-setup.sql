-- Create orders table for Tree of Life Cafe
CREATE TABLE orders (
  id TEXT PRIMARY KEY,
  customerName TEXT,
  phone TEXT,
  orderType TEXT,
  address TEXT,
  items JSONB,
  specialInstructions TEXT,
  subtotal REAL,
  gst REAL,
  cgst REAL,
  total REAL,
  timestamp TIMESTAMPTZ,
  status TEXT DEFAULT 'New'
);

-- Enable Row Level Security
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Allow all access (for development)
CREATE POLICY "Enable all access" ON orders FOR ALL USING (true) WITH CHECK (true);
