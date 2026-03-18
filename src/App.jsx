import React from 'react'
import { Routes, Route } from 'react-router-dom'

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

// Components
import ProductsAdmin from './components/admin/ProductsAdmin'
import OrdersAdmin from './components/admin/OrdersAdmin'


const App = () => {
  return (
    <Routes>
      {/* Foydalanuvchi qismi */}
      <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
          <Route path="/product" element={<Product />} />
          <Route path="/profile" element={<Profile />} />
      </Route>
      {/* Admin qismi */}


      {/* 3. LAYOUTSIZ SAHIFALAR (To'liq ekran - Login/Register) */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App