// src/layouts/MainLayout.jsx
import { Outlet, Link } from "react-router-dom"
import { FaShoppingBag, FaBoxOpen, FaInfoCircle, FaShoppingCart, } from "react-icons/fa"
import Header from "../components/common/Header"
import Sidebar from "../components/common/Sidebar"

const MainLayout = () => {
  

  return (
    <div className="h-screen bg-white flex flex-col">
        <Header/>
        <Sidebar/>
    </div>
  )
}

export default MainLayout