import React, { useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import {Link} from 'react-router-dom'

const Form = () => {
    const [showChart,setShowChart] = useState(false);
    const [input1,setInput1] = useState(0)
    const [input2,setInput2] = useState(0)
    const handleSubmit =(e) =>{
        e.preventDefault();
        setShowChart(true);

    }
  return (
    <div>
        {showChart?<div className='chart'>
        <div className='flex'>
        <div className='flex flex-col'>
          <div className='flex'>
            <div className='rect1'></div>
            <h5 className='mt-14 ml-8'>No Of Invites</h5>
          </div>
          <div className='flex'>
            <div className='rect2'></div>
            <h5 className='mt-20 ml-8'>Duration Of Event</h5>
          </div>
        </div>
        <div className='chart2'>
        <PieChart
        startAngle={-180}
        totalValue={100}
        lineWidth={40}
  data={[
    { title: 'No Of Invites', value: input1, color: 'blue' },
    { title: 'Duration Of Event', value: input2, color: 'green' }
  ]}
  
  
/></div>
</div></div>:<form class="w-full max-w-sm mt-24 ml-24 form" onSubmit={handleSubmit}>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
          No Of Invites
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number" value={input1}
      onChange={(e) => setInput1(e.target.value)} />
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
        Duration Of Event
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="number" placeholder="Enter number" value={input2} 
        onChange={(e) => setInput2(e.target.value)}
      />
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3"></div>
  </div>
  <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
      <button class="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
        Enter
      </button>
    </div>
  </div>
</form>}
    </div>
  )
}

export default Form