import React from 'react'
import NavBar from './NavBar'
import Footer from './footer'

import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <div>

      <NavBar />
 
      <Outlet />
       <Footer />
    </div>
  )
}

export default SharedLayout