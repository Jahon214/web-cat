import React from 'react'
import { Outlet, Link, useLocation } from "react-router-dom"
import { FaShoppingBag, FaBoxOpen, FaInfoCircle, FaShoppingCart, } from "react-icons/fa"

const Sidebar = () => {
    const location = useLocation()
    // Aktiv linkni aniqlash uchun yordamchi funksiya
    const isActive = (path) => location.pathname === path

    return (
            <aside className="h-screen pt-3 w-1/6 bg-linear-180 from-purple-700 via-purple-500 to-indigo-600">
                <Link to="/" className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all mx-2
          ${isActive("/") ? "bg-white border-3 border-purple-400 text-purple-700 shadow-md hover:shadow-purple-400" : "text-white hover:bg-[#A855F7]"} 
          `}>
                    <FaShoppingBag size={20} />
                    <span className="font-semibold text-base">Mahsulotlar</span>
                </Link>
                <Link to="/" className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all mt-1 mx-2
          ${isActive("/orders") ? "bg-white border-3 border-purple-400 text-purple-700 shadow-md hover:shadow-purple-400" : "text-white hover:bg-[#A855F7]"} 
          `}>
                    <FaBoxOpen size={20} />
                    <span className="font-semibold text-base">Buyurtmalarim</span>
                </Link>
                <Link to="/" className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all mt-1 mx-2
          ${isActive("/about") ? "bg-white border-3 border-purple-400 text-purple-700 shadow-md hover:shadow-purple-400" : "text-white hover:bg-[#A855F7]"} 
          `}>
                    <FaInfoCircle size={20} />
                    <span className="font-semibold text-base">Do'kon haqida</span>
                </Link>
            </aside>
    )
}

export default Sidebar