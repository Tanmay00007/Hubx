import React from 'react'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'

const data = {
    labels: ["2021-02-03", "2021-02-04", "2021-02-05", "2021-02-06", "2021-02-07", "2021-02-08","2021-02-09"],
    datasets: [
    
      {
        label: "Second dataset",
        data: [0,0,0,0,0,0,4],
        fill: false,
        borderColor: "green"
      }
    ]
  };

const Chart = () => {
  return (
    <div className='chart1 flex flex-col'>
    <div className='flex ml-24'>
      <h3 className='ml-16'>Hello</h3>
      <h3 className='ml-4'>Revenue</h3>
      <h3 className='ml-4'>Product Sales</h3>
      <h3 className='ml-4'>Active Users</h3>
      
<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-green-800 w-32 h-8 font-medium rounded-lg text-sm pt-3 pb-3 pl-4 text-center inline-flex items-center bg-green-600 hover:bg-green-700 ml-4" type="button">Last 7 days <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>

    </div>
       <Line data={data} />
    </div>
  )
}

export default Chart