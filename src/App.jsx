import React from 'react'
import {Routes, Route} from 'react-router-dom'

// Layouts
import AdminLayout from './layouts/AdminLayout'
import MainLayout from './layouts/MainLayout'

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Card from './pages/Card'
import Product from './pages/Product'
import Profile from './pages/Profile'
import Register from './pages/Register'



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registor" element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App