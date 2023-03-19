import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import nav1 from '../../assets/nav1.png'
import nav2 from '../../assets/nav2.png'
import nav3 from '../../assets/nav3.png'

const NavBar = () => {

  return (
    <nav class="bg-gray-50 dark:bg-gray-700 top-0 ">
    <div class="max-w-screen-xl px-4 py-3 md:px-6">
        <div class="flex items-center">
            <ul class="flex flex-row mt-0 mr-2 space-x-8 text-sm font-medium">
                <li>
                    <Link to="/" class="text-gray-900 dark:text-white hover:underline text-xl " aria-current="page">Dashboard</Link>
                </li>
                <li>
                <div className='flex'>
                    <img src={nav1} className='w-4 h-4 mt-2 mr-1'></img>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline text-sm mt-1">Create Course</a>
                </div>
                </li>
                <li>
                <div className='flex'>
                <img src={nav2} className='w-4 h-4 mt-2 mr-1'></img>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline text-sm mt-1">Preview Home Page</a>
                </div>
                </li>
                <li>
                <div className='flex'>
                <img src={nav2} className='w-4 h-4 mt-2 mr-1'></img>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline text-sm mt-1">Preview After Login Page</a>
                    </div>
                </li>
                <li>
                <div className='flex'>
                <img src={nav3} className='w-4 h-4 mt-2 mr-1'></img>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline text-sm mt-1">View Welcome Screen</a>
                    </div>
                </li>
                <Link to='/form' className='mr-8 ml-2 rounded-full w-18 h-8 pl-3 pr-3 pt-1 pb-3 bg-green-500 hover:bg-green-700 text-white ml-24'>Invite</Link>
            </ul>
            <button className='mr-8 ml-2 rounded-full w-18 h-8 pl-3 pr-3 pt-1 pb-3 bg-green-500 hover:bg-green-700 text-white ml-24 margin1'>Help</button>
        </div>
    </div>
</nav>
  )
}

export default NavBar