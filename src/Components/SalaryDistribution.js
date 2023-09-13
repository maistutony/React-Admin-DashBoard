import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function SalaryDistribution({ fullData }) {

    const data = [
      { Date: "Jan-19", Age: 25, Salary: 71604 },
      { Date: "Feb-19", Age: 26, Salary: 72604 },
      { Date: "Mar-19", Age: 27, Salary: 73604 },
      // Add more data points here...
    ];
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="Age"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
            name="Age"
          />
          <Area
            type="monotone"
            dataKey="Salary"
            stackId="2"
            stroke="#82ca9d"
            fill="#82ca9d"
            name="Salary"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalaryDistribution