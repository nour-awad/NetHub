import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Analytics = () => {
  // Replace these values with your actual data.
    let correct = 7
    let  wrong = 3
  // Sample data for pie chart. Adjust this based on your actual data.
    const data = [
        { name: 'Correct', value: 7 },
        { name: 'Incorrect', value: 3 },
    ];

    return (
        <div>
            <h1>Analytics</h1>
            <h2>Trivia Performance</h2>

            {/* Pie Chart for Correct/Incorrect Answers */}
              <PieChart width={400} height={400}>
                  <Pie data={data} dataKey="value" outerRadius={150} fill="#82ca9d"  
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`} >
                      <Cell fill="#0088FE" />
                      <Cell fill="#FF8042" />
                  </Pie>
                  <Tooltip />
                  <Legend />
              </PieChart>

            {/* Display Summary Statistics */}
            <div>
                <p>Total Questions: {correct + wrong}</p>
                <p>Correct Answers: {correct}</p>
                <p>Incorrect Answers: {wrong}</p>
                <p>Correct Percentage: {correct/(correct+wrong) * 100} %</p>
            </div>
        </div>
    );
};

export default Analytics;
