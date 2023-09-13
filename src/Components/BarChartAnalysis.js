import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function BarChartAnalysis({ fullData }) {

const toDisplay=fullData.slice(0,5).sort((a,b)=>b.productivity-a.productivity)
    return (
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <BarChart
              data={toDisplay}
              margin={{ top: 20, right: 10, left:5, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="productivity" fill="#8884d8" name="Productivity" />
              <Bar dataKey="Age" fill="#82ca9d" name="Age" />
            </BarChart>
          </ResponsiveContainer>
        </div>
    );
}

export default BarChartAnalysis