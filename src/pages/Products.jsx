// src/pages/Products.jsx
import ProductCard from "../components/common/ProductCard"

const categories = [
  { id: 1, name: "Hammasi", icon: "⭐", active: true },
  { id: 2, name: "Mushuklar", icon: "🐈", active: false },
  { id: 3, name: "Ozuqalar", icon: "🦴", active: false },
  { id: 4, name: "Buyumlar", icon: "⚽", active: false },
]

const Products = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#9333EA] mb-6">Mahsulotlar</h1>

      {/* Filter Tugmalari */}
      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl border transition-all whitespace-nowrap ${
              cat.active
                ? "bg-[#9333EA] text-white shadow-md border-[#9333EA]"
                : "bg-white text-gray-600 hover:border-[#9333EA]"
            }`}
          >
            <span>{cat.icon}</span>
            <span className="font-medium">{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Mahsulotlar Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Test uchun bir nechta mahsulot */}
        <ProductCard
          title="Premium Mushuk Ovqati"
          price="45,000"
          category="Ozuqalar"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6f9Y..."
        />
        <ProductCard
          title="Mushuk Konserva Ovqati"
          price="25,000"
          category="Ozuqalar"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Z..."
        />
      </div>
    </div>
  )
}

export default Products
