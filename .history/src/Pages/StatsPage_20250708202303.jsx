// StatsPage.jsx
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import './StatsPage.css';

const data = [
  { date: 'Nov 23', amount: 30000 },
  { date: '24', amount: 31000 },
  { date: '25', amount: 35000 },
  { date: '26', amount: 37000 },
  { date: '27', amount: 39000 },
  { date: '28', amount: 41000 },
  { date: '29', amount: 42000 },
  { date: '30', amount: 50000 },
];

export function StatsPage() {
  return (
    <div className="stats-page">
      {/* Page Title */}
      <h1>Stats Page</h1>

      {/* Existing Food Points Section (your teammate's) */}
      <div className="stats-boxes">
        <div className="stat-box">
          <p>Today's Food Points</p>
          <h2>$30.33</h2>
        </div>
        <div className="stat-box">
          <p>This Week's Food Points</p>
          <h2>$212.31</h2>
        </div>
      </div>

      {/* NEW: Chart Section */}
      <div className="stats-chart-card">
        <h2>Your Spending Habits</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid stroke="#eee" />
            <XAxis dataKey="date" />
            <YAxis domain={[30000, 50000]} tickFormatter={(val) => `$${val / 1000}K`} />
            <Tooltip formatter={(val) => `$${val.toLocaleString()}`} />
            <Line type="monotone" dataKey="amount" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8, stroke: "#3b82f6", strokeWidth: 2, fill: "#3b82f6" }} />
            <Line type="monotone" dataKey="amount" stroke="#333" strokeWidth={2} dot={false} strokeDasharray="4 4" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

