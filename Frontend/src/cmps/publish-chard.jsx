import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export const getData=(sites)=>{
    const publishedCount = getPublishCount(sites)

return ({
  labels: [ 'Published Websites', 'Not Published Websites'],
  datasets: [
    {
      label: '# of Votes',
      data: [publishedCount, sites.length-publishedCount],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
})};

const getPublishCount=(sites)=>{
    let publishedCount = 0
    sites.forEach(site=>{ if(site.isPublished)publishedCount++})
    return publishedCount
    }

export function PublishChart({sites}) {
  return <section className='chart'> <Doughnut data={getData(sites)} /></section>
}
