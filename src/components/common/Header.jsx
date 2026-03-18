import React from 'react'
import { Outlet, Link } from "react-router-dom"
import { FaShoppingBag, FaBoxOpen, FaInfoCircle, FaShoppingCart, } from "react-icons/fa"


const Header = () => {
  return (
    <div>
        <header className="bg-linear-90 from-purple-600 via-purple-500 to-indigo-600 shadow-md shadow-purple-500 sticky inset-0 z-50 py-2.5 px-[10%] flex justify-between items-center">
                <div>
                  <p className="text-2xl font-bold text-white text-center"><i className="fa-solid fa-cat"></i> Web Cat</p>
                </div>
        
                <div className="flex justify-center items-center gap-6">
                  <div className="text-white relative ">
                    <FaShoppingCart size={24} />
                    <span className="border-purple-600 border absolute -top-2 left-3 text-sm font-semibold rounded-full bg-red-600 w-5 h-5 flex justify-center items-center">2</span>
                  </div>
                  <div className="flex justify-center items-center gap-2 backdrop-blur-2xl bg-white/10 px-3 py-1.5 rounded-full">
                    <span className="text-white text-sm font-semibold">Jahongir Narzullayev</span>
                    <button className="bg-white cursor-pointer rounded-full px-4 py-1.5 outline-none text-purple-600 font-semibold text-sm">Chiqish</button>
                  </div>
                </div>
        </header>
    </div>
  )
}

export default Header