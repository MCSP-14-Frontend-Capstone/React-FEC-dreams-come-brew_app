import React from 'react'
import NavBar from './NavBar'
import SearchBar from './SearchBar'
import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <div>

      <NavBar />
      <SearchBar />

      <Outlet />

    </div>
  )
}

export default SharedLayout