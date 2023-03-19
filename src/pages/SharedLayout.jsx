import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import {Link,Outlet} from 'react-router-dom'

const SharedLayout = () => {
  return (
    <div>
     <NavBar />
     <Outlet />
    </div>
  )
}

export default SharedLayout