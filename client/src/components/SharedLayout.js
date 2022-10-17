import React from 'react'
import NavBar from './NavBar'
import Footer from './footer'


import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
       <Footer />
    </>
  )
}

export default SharedLayout