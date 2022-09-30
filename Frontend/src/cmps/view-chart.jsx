import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
 
  responsive: true,
  plugins: {
    legend:{
      display:false
    },
    tooltips: {
      enabled: false
   },
  
    title: {
      display: true,
      text: 'Views per Day',
    },
  },
};

const labels = ['29/9', '30/9', '1/10', '2/10', '3/10', '4/10', '5/10'];

export const data = {
  labels,
  

  datasets: [
    {
      fill: true,
      label:'',
      data: [4,8,4,6,3,8,2],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function ViewsChart() {
  return <Line options={options} data={data} />;
}
