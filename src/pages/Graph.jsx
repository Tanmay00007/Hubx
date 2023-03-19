import React, { useState } from 'react'
import {data1} from './data'
import './Graph.css'
import Chart from './Chart'
import Home from './Home'

const Graph = () => {
  const [show,setShowHome] = useState(true);
  return (
    <div>
    <div className='gird grid-cols-2'>
    <div className='ml-2 h-48'>
    <Chart />
    </div>
    <div className='grid grid-cols-3 gap-4 left mr-24  ml-24 dataset margin'>
        {data1.map((data)=>{
            return <div className='flex flex-col '>
                <img src={data.image} className='w-10 h-10 mb-4'></img>
                <h3 className='mb-4 '>{data.text}</h3>
                <h3 className='mb-4'>{data.number}</h3>
            </div>
        })}
    </div>
    </div>
    {show?<Home />:"Nothing"}
    </div>
  )
}

export default Graph