import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const TaskProgressChart = ({ completed, pending, isDark }) => {
    const data = {
        labels: ['Pending', 'Done'],
        datasets: [
          {
            data: [pending, completed],
            backgroundColor: isDark
              ? ['#142E15', '#3F9142'] // Dark theme colors
              : ['#A0EDA4', '#3F9142'], // Light theme colors
            borderColor: 'transparent',
            borderWidth: 1,
          },
        ],
      };
      
      const options = {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              color: isDark ? 'white' : 'black',
              usePointStyle: true,
            //   boxWidth: 5, // Adjust width dynamically
              boxHeight: 6, // Adjust height dynamically
              padding: 20,
            },
          },
        },
      };
      
      

  return (
    <div style={{ width: '200px', height: '200px' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default TaskProgressChart;
