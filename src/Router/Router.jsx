import React from 'react'
import Layout from '@/pages/layout/Layout'
import Home from "@/pages/home/Home"
import About from "@/pages/about/About"
import Role from "@/pages/role/Role"
import Media from "@/pages/media/Media"
import Contact from "@/pages/contact/Contact"
import { Routes, Route } from 'react-router-dom'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/role' element={<Role/>}/>
        <Route path='/media' element={<Media/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Route>
    </Routes>
  )
}

export default Router