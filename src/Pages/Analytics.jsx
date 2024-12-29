import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import './css/Analytics.css';

const Analytics = ({ correct, wrong }) => {
  const data = [
    { name: "Correct", value: correct },
    { name: "Incorrect", value: wrong },
  ];

  return (
    <div className="analytics-container container text-center mt-5">
      <h1 className="analytics-title mb-4">Analytics</h1>
      <h2 className="analytics-subtitle mb-4">Trivia Performance</h2>
      <div className="row">
        <div className="col-md-6">
          <PieChart width={400} height={400} className="pie-chart">
          <Pie
            data={data}
            dataKey="value"
            outerRadius={150}
            label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
          >
            <Cell fill="#0088FE" />
            <Cell fill="#FF8042" />
          </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start">
          <p className="analytics-text">Total Questions: {correct + wrong}</p>
          <p className="analytics-text">Correct Answers: {correct}</p>
          <p className="analytics-text">Incorrect Answers: {wrong}</p>
          <p className="analytics-text">
            Correct Percentage:{" "}
            {((correct / (correct + wrong || 1)) * 100).toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
