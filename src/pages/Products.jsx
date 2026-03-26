import { useState } from "react"
// Kerakli iconlarni import qilamiz
import {
  FaBorderAll,
  FaCat,
  FaBone,
  FaShoppingBasket,
  FaSearch,
} from "react-icons/fa"
import ProductCard from "../components/common/ProductCard"

// Kategoriyalarni ID va Icon komponenti bilan belgilaymiz
const CATEGORIES = [
  { id: "all", name: "Hammasi", icon: <FaBorderAll /> },
  { id: "cats", name: "Mushuklar", icon: <FaCat /> },
  { id: "foods", name: "Ozuqalar", icon: <FaBone /> },
  { id: "items", name: "Buyumlar", icon: <FaShoppingBasket /> },
]

const ALL_PRODUCTS = [
  {
    id: 1,
    title: "Premium Mushuk Ovqati",
    price: "45,000",
    category: "foods",
    image: "/products/1.png",
  },
  {
    id: 2,
    title: "Mushuk Konserva Ovqati",
    price: "25,000",
    category: "foods",
    image: "/products/2.png",
  },
  {
    id: 3,
    title: "Mushuk O'yinchoqlari",
    price: "15,000",
    category: "items",
    image: "/products/3.png",
  },
  {
    id: 4,
    title: "Mushuk Uyqu To'shagi",
    price: "30,000",
    category: "items",
    image: "/products/4.png",
  },
  {
    id: 5,
    title: "Scottish Fold Mushuk",
    price: "150,000",
    category: "cats",
    image: "/products/5.png",
  }
]

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Filtrlash mantiqi: Kategoriya + Qidiruv
  const filteredProducts = ALL_PRODUCTS.filter((product) => {
    const matchesCategory =
      activeCategory === "all" || product.category === activeCategory
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="px-6 py-8">
      <div className="flex justify-between">
        <h1 className="text-3xl text-[#9333EA] font-bold">Mahsulotlar</h1>

        {/* Search input  */}
        <div className="flex relative">
          <FaSearch size={16} className="absolute top-3 left-3 text-gray-400" />
          <input className="border border-gray-200 focus:ring-2 focus:ring-purple-500 transition-all w-64 rounded-lg pl-8 outline-none font-semibold"
            type="text" placeholder="Qidirish..." onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        {CATEGORIES.map((cat) => (
          <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={` border-2 transition-all rounded-xl cursor-pointer px-6 py-3 flex items-center gap-3 ${
            activeCategory === cat.id
            ? "bg-[#9333EA] text-white shadow-lg shadow-purple-200" : "bg-white border-gray-200 shadow-md hover:shadow-purple-400 text-gray-600 hover:border-purple-200 hover:text-purple-600 "
          }
          `}>
            <span className="text-xl">{cat.icon}</span>
            <span className="font-semibold">{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Products grid */}
      <div>
          
      </div>
    </div>
  )
}

export default Products
