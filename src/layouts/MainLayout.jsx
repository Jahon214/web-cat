// src/layouts/MainLayout.jsx
import { Outlet, Link, useLocation } from "react-router-dom"
import { FaShoppingBag, FaBoxOpen, FaInfoCircle, FaShoppingCart, } from "react-icons/fa"

const MainLayout = () => {
  const location = useLocation()

  // Aktiv linkni aniqlash uchun yordamchi funksiya
  const isActive = (path) => location.pathname === path

  return (
    <div className="h-screen bg-white flex flex-col">
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

      <aside className="h-screen w-1/6 shadow-md shadow-purple-500 bg-linear-180 from-purple-700 via-purple-500 to-indigo-600">
        <Link to="/" className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all mt-4 mx-2
          ${isActive("/") ? "bg-white border-3 border-purple-400 text-purple-700 shadow-md hover:shadow-purple-400" : "text-white hover:bg-[#A855F7]"} 
          `}>
            <FaShoppingBag size={20}/>
            <span className="font-semibold text-base">Mahsulotlar</span>
        </Link>
        <Link to="/" className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all mt-1 mx-2
          ${isActive("/orders") ? "bg-white border-3 border-purple-400 text-purple-700 shadow-md hover:shadow-purple-400" : "text-white hover:bg-[#A855F7]"} 
          `}>
            <FaBoxOpen size={20}/>
            <span className="font-semibold text-base">Buyurtmalarim</span>
        </Link>
        <Link to="/" className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all mt-1 mx-2
          ${isActive("/about") ? "bg-white border-3 border-purple-400 text-purple-700 shadow-md hover:shadow-purple-400" : "text-white hover:bg-[#A855F7]"} 
          `}>
            <FaInfoCircle size={20}/>
            <span className="font-semibold text-base">Do'kon haqida</span>
        </Link>
      </aside>
    </div>
  )
}

export default MainLayout