import React from "react";
import { PieChart,Legend,Tooltip, Pie, Cell, ResponsiveContainer } from "recharts";

function PieCharts({ data }) {
  const male = data.filter((item) => item.Gender === "Male")
  const female = data.filter((item) => item.Gender === "Female");

  const pieData=[{name:"males",value:male.length},{name:"females",value:female.length}]
  const colors = ["#8884d8", "#83a6ed"];
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={pieData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {pieData &&
            pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
        </Pie>
        <Legend />
        <Tooltip/>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default PieCharts;
