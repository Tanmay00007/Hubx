import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import first from '../assets/first.png'
import smiley from '../assets/smiley.png'
import home from '../assets/home-2.png'
import hbeat from '../assets/hbeats.png' 
import Chart from './Chart'
import clock from '../assets/clock.png'

const Home = () => {
  return (

    <div className='flex mt-8'>
        <div className='flex flex-col ml-6 mr-12 first'>
            <div className='flex flex-row'>
                <img src={first} className='h-12 w-8'></img>
                <h3 className='mt-3'>New Users</h3>
                <button className='ml-4 rounded-full mr-4 mb-2 pr-4 pl-4 bg-green-500 hover:bg-green-700 text-white'>See All</button>
            </div>
            <div className='flex flex-row mt-2'>
                <img src={smiley} className='w-10 h-12'></img>
                <div className='flex flex-col ml-2'>
                    <h3>hubx</h3>
                    <h3>24 minutes</h3>
                </div>
            </div>
        </div>
        <div className='flex flex-col ml-1 text pb-4 mb-4 bg-white-600 mr-4 ml-4'>
        <div className='flex flex-row'>
        <img src={home} className='h-6 w-6 mr-2'></img>
        <h2>How to sell courses blog</h2>
        <button  className='ml-24 mb-4 rounded-full bg-green-400 hover:bg-green-700 pl-2 pr-2 text-white'>See All</button>
        </div>
        <div className='flex flex-row flex-end mb-2'>
            <p className='pr-24 text-base'>Blended Learning: What it is Why it matters and how to apply</p>
            <p className='text1'>1 day ago</p>
        </div>
        <div className='flex flex-row mb-2'>
            <p className='pr-24 text-base'>Join the course sales bootcamp Free Live Workshops</p>
            <p className='text1'>12 day ago</p>
        </div>
        <div className='flex flex-row mb-2'>
            <p className='pr-24 text-base'>12 steps for creating awesome Live classes in2021</p>
            <p className='text1'>20 days ago</p>
        </div>
        <div className='flex flex-row mb-2'>
            <p className='pr-24 text-base'>Guy Kawasaki on the future of Business in the midst of Pandemic</p>
            <p className='text1'>22 days ago</p>
        </div>
        <div className='flex flex-row mb-2'>
            <p className='pr-24 text-base'>What is Educational Marketing & how to Use it to grow with examples</p>
            <p className='text1'>23 days ago</p>
        </div>
        </div>
        <div className=' flex flex-col ml-12 second'>
        <div className='flex bg-white-600 ml-2'>
            <img src={hbeat} className='w-6 h-6'></img>
            <h4 className='ml-2'>Events Log</h4>
            <button className='ml-4 rounded-full mr-4 mb-2 pr-4 pl-4 bg-green-500 hover:bg-green-700 text-white'>see all</button>
        </div>
        <div className='flex flex-col'>
        <div className='flex'>
            <h4>hubx</h4>
            <h4 className='ml-20'>22 minutes ago</h4>
            </div>
            <h4>Logged In</h4>
            <h4>more info</h4>
        </div>
        </div>
        <div className='flex flex-col ml-6'>
            <div className='flex flex-col mb-8 third'>
            <div className='flex'>
                <h4 className='text-xl'>Trial Period</h4>
                <img src={clock} className='w-6 h-6 ml-24 mt-1 margin2'></img>
            </div>
            <div className='flex'>
                <button className='rounded-full pt-10 pb-10 pr-6 pl-6 bg-green-500 hover:bg-green-700 text-white mt-4'>30 days left</button>
                <button className='ml-12 rounded-full w-32 h-10 pr-1 pl-2  bg-pink-500 hover:bg-pink-700 text-white mt-24 ml-24'>Upgrade Now!!</button>
            </div>
            </div>
            <div className='flex flex-col mt-2 ml-4 fourth'>
            <h4>Online Users (1)</h4>
            <div className='flex'>
                <img src={first} className='w-6 h-6 mt-1'></img>
                <h3 className='ml-2 mt-2'>hubx</h3>
                <button className='ml-2 rounded-full w-18 h-8 pl-2 pr-2 bg-green-500 hover:bg-green-700 text-white ml-24 contact'>Contact</button>
            </div>
            </div>
        </div>
    </div>
  )
  }

export default Home