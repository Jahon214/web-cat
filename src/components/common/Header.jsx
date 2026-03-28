import React from 'react'
import { Outlet, Link } from "react-router-dom"
import { useCart } from '../../context/CartContext'
import { FaCat, FaShoppingCart, } from "react-icons/fa"


const Header = () => {
 const { cartItems } = useCart()

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <header className="bg-linear-90 from-purple-600 via-purple-500 to-indigo-600 shadow-md shadow-purple-500 sticky inset-0 z-50 py-2.5 px-[10%] flex justify-between items-center">
     <Link to="/"
      className="text-2xl font-bold text-white text-center flex gap-2 ">
        <FaCat className="text-3xl" />
        <span className="tracking-tight">Web Cat</span>
     </Link>

      <div className="flex justify-center items-center gap-6">
        <Link to="/card"
        className="relative text-white cursor-pointer hover:scale-110 transition-all duration-200 p-2">
          <FaShoppingCart size={24}/>
         {totalItems > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#9333EA] font-bold animate-pulse">
              {totalItems}
            </span>
          )}
        </Link>

        <div className="flex justify-center items-center gap-2 backdrop-blur-2xl bg-white/10 px-3 py-1.5 rounded-full">
          <span className="text-white text-sm font-semibold">Jahongir Narzullayev</span>
          <button className="bg-white cursor-pointer rounded-full px-4 py-1.5 outline-none text-purple-600 font-semibold text-sm">Chiqish</button>
        </div>
      </div>
    </header>
  )
}

export default Header