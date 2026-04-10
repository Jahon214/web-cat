import { Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import { AuthProvider } from "./context/AuthContext" // Import qilindi
import { Toaster } from "react-hot-toast"
import MainLayout from "./layouts/MainLayout"
import Products from "./pages/Products"
import Orders from "./pages/Orders"
import Login from "./pages/Login"
import Register from "./pages/Register"
import About from "./pages/About"
import Card from "./pages/Card"

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Toaster position="top-center" />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/about" element={<About />} />
            <Route path="/card" element={<Card />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </CartProvider>
    </AuthProvider>
  )
}

export default App