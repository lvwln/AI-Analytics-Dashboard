import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, Database, Globe } from 'lucide-react';
import { mockData } from './data';

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', padding: '40px', fontFamily: 'sans-serif' }}>
      <header style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Activity size={32} color="#2563eb" /> Global Analytics Dashboard
        </h1>
        <p style={{ color: '#64748b' }}>HENNGE Challenge: Big Data Visualization</p>
      </header>

      <div style={{ background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '24px' }}>Weekly Booking Volume</h2>
        <div style={{ height: '400px', width: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="day" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px rgba(0,0,0,0.1)' }} />
              <Area type="monotone" dataKey="bookings" stroke="#3b82f6" strokeWidth={4} fillOpacity={0.1} fill="#3b82f6" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default App;