import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const Analytics = ({ correct, wrong }) => {
  const data = [
    { name: "Correct", value: correct },
    { name: "Incorrect", value: wrong },
  ];

  return (
    <div>
      <h1>Analytics</h1>
      <h2>Trivia Performance</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          outerRadius={150}
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
        >
          <Cell fill="#0088FE" />
          <Cell fill="#FF8042" />
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
      <div>
        <p>Total Questions: {correct + wrong}</p>
        <p>Correct Answers: {correct}</p>
        <p>Incorrect Answers: {wrong}</p>
        <p>
          Correct Percentage:{" "}
          {((correct / (correct + wrong || 1)) * 100).toFixed(2)}%
        </p>
      </div>
    </div>
  );
};

export default Analytics;
