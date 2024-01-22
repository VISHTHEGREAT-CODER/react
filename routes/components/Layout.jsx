import React from 'react'
import Header from './Header/header'
import Footer from './Footer/footer'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      
    </div>
  )
}

export default Layout
