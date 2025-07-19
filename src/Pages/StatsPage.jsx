import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import '../StatsPage.css';
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
    <div>
    <div className = "top-banner-default">
        <h1 className = "default_title"> Stats </h1>
      </div>
    <div className="stats-page">
      
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
            stroke="#007bff"  
            strokeWidth={3}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="actual"
            stroke="#000000"  
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </div>
    );
  
}
