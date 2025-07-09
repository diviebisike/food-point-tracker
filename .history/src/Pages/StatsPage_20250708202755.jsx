import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

export function StatsPage() {

  const data = [
    { date: 'Jan', predicted: 300, actual: 280 },
    { date: 'Feb', predicted: 250, actual: 270 },
    { date: 'Mar', predicted: 400, actual: 390 },
    { date: 'Apr', predicted: 350, actual: 320 },
    { date: 'May', predicted: 420, actual: 430 },
    { date: 'Jun', predicted: 500, actual: 480 },
  ];

  return (
    <div className="stats-page">
      
      <h1> Stats Page </h1>
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

      {/* New graph section */}
      <h2>Spending Habits</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="predicted"
            stroke="#007bff"  // blue color
            strokeWidth={3}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="actual"
            stroke="#000000"  // black color
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
