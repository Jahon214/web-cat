import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Layouts
import AdminLayout from './layouts/AdminLayout'
import MainLayout from './layouts/MainLayout'

// Pages
import Login from './pages/Login'
import Admin from './pages/Admin'
import Register from './pages/Register'
import Products from './pages/Products'
import About from './pages/About'
import Orders from './pages/Orders'

// Components
import ProductsAdmin from './components/admin/ProductsAdmin'
import OrdersAdmin from './components/admin/OrdersAdmin'


const App = () => {
  return ( 
    <Routes>
      {/* Foydalanuvchi qismi */}
      <Route element={<MainLayout />}>
          <Route path="/" element={<Products />} />
          <Route path="/orders" element={<Orders />}/>
          <Route path="/about" element={<About />}/>
      </Route>


      {/* 3. LAYOUTSIZ SAHIFALAR (To'liq ekran - Login/Register) */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App