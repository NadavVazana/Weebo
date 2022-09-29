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
      text: 'Subscribers per Day',
    },
  },
};

const labels = ['29/9', '30/9', '1/10', '2/10', '3/10', '4/10', '5/10'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data:[6,9,8,6,7,7,9],
      borderColor: 'rgba(218, 50, 218, 0.74)',
      backgroundColor: 'rgba(218, 50, 218, 0.74)',
    },
  ],
};

export function SubscribersChart() {
  return <Line options={options} data={data} />;
}
