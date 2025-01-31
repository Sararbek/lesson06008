import React from 'react'
import Header from "@/components/header/Header"
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        {/* Header */}
        <Header/>
        {/* Main */}
        <main>
            <Outlet/>
        </main>
    </>
  )
}

export default Layout