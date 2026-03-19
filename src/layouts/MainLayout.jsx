// src/layouts/MainLayout.jsx
import { Outlet, Link } from "react-router-dom"
import { FaShoppingBag, FaBoxOpen, FaInfoCircle, FaShoppingCart, } from "react-icons/fa"
import Header from "../components/common/Header"
import Sidebar from "../components/common/Sidebar"

const MainLayout = () => {
  

  return (
    <div className="h-screen bg-white flex flex-col">
        <Header/>
        <div className="flex flex-1 overflow-hidden">
        <Sidebar/>
        <main className="flex-1 overflow-y-auto p-8 bg-white m-4 rounded-3xl shadow-sm border border-gray-100">
          <Outlet />
        </main>
        </div>
    </div>
  )
}

export default MainLayout