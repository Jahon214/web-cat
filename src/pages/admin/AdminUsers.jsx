import React, { useState } from "react"
import { FaUserShield, FaUserEdit, FaUserSlash, FaSearch, FaEnvelope, FaCalendarAlt } from "react-icons/fa"
import toast from "react-hot-toast"

const AdminUsers = () => {
  const [searchTerm, setSearchTerm] = useState("")

  // Mock data - Foydalanuvchilar ro'yxati
  const [users, setUsers] = useState([
    { id: 1, name: "Ali Valiyev", email: "ali@mail.com", role: "Admin", status: "Active", joined: "2026-01-15" },
    { id: 2, name: "Dilnoza Karimova", email: "dilnoza@cat.uz", role: "User", status: "Active", joined: "2026-02-10" },
    { id: 3, name: "Sardor Azimov", email: "sardor@dev.com", role: "User", status: "Banned", joined: "2026-03-05" },
    { id: 4, name: "Laylo Sharipova", email: "laylo@gmail.com", role: "User", status: "Active", joined: "2026-03-20" },
  ])

  // Foydalanuvchi statusini o'zgartirish (Bloklash/Aktivlashtirish)
  const toggleStatus = (id, currentStatus) => {
    const newStatus = currentStatus === "Active" ? "Banned" : "Active"
    setUsers(users.map(u => u.id === id ? { ...u, status: newStatus } : u))
    
    toast.success(`Foydalanuvchi statusi: ${newStatus}`, {
      icon: newStatus === "Active" ? '✅' : '🚫',
      style: { borderRadius: '15px', background: '#1e1b4b', color: '#fff' }
    })
  }

  // Rolini o'zgartirish (Admin/User)
  const toggleRole = (id, currentRole) => {
    const newRole = currentRole === "Admin" ? "User" : "Admin"
    setUsers(users.map(u => u.id === id ? { ...u, role: newRole } : u))
    toast.success(`Yangi rol: ${newRole}`, { icon: '🔑' })
  }

  const filteredUsers = users.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-gray-800 tracking-tighter">
            Foydalanuvchilar <span className="text-purple-600 italic">Ro'yxati</span>
          </h1>
          <p className="text-gray-400 font-bold text-[10px] uppercase tracking-[4px] mt-2">Jamiyat boshqaruvi</p>
        </div>

        {/* SEARCH BAR */}
        <div className="relative group w-full md:w-96">
          <FaSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-purple-500 transition-colors" />
          <input 
            type="text" 
            placeholder="Ism yoki email orqali qidirish..." 
            className="w-full pl-16 pr-6 py-4 bg-white border border-gray-100 rounded-[22px] outline-none focus:ring-4 ring-purple-50 transition-all font-bold text-gray-700 shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* USERS TABLE */}
      <div className="bg-white rounded-[45px] border border-gray-50 overflow-hidden shadow-2xl shadow-purple-900/5">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-10 py-7 text-[10px] font-black text-gray-400 uppercase tracking-[4px]">Foydalanuvchi</th>
                <th className="px-10 py-7 text-[10px] font-black text-gray-400 uppercase tracking-[4px]">Rol</th>
                <th className="px-10 py-7 text-[10px] font-black text-gray-400 uppercase tracking-[4px]">Holati</th>
                <th className="px-10 py-7 text-[10px] font-black text-gray-400 uppercase tracking-[4px]">Sana</th>
                <th className="px-10 py-7 text-[10px] font-black text-gray-400 uppercase tracking-[4px]">Amallar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-purple-50/10 transition-all group">
                  <td className="px-10 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-linear-to-tr from-purple-100 to-indigo-100 rounded-2xl flex items-center justify-center text-purple-600 font-black text-lg border border-purple-200">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-black text-gray-800 text-sm">{user.name}</p>
                        <p className="flex items-center gap-1 text-[11px] text-gray-400 font-medium lowercase">
                          <FaEnvelope className="text-[9px]" /> {user.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-10 py-6">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                      user.role === "Admin" ? "bg-purple-600 text-white shadow-lg shadow-purple-100" : "bg-gray-100 text-gray-500"
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-10 py-6">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${user.status === "Active" ? "bg-emerald-500 animate-pulse" : "bg-red-500"}`}></div>
                      <span className={`text-xs font-black uppercase tracking-widest ${user.status === "Active" ? "text-emerald-600" : "text-red-500"}`}>
                        {user.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-10 py-6 font-bold text-gray-400 text-xs">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="opacity-30" /> {user.joined}
                    </div>
                  </td>
                  <td className="px-10 py-6">
                    <div className="flex items-center gap-2">
                      {/* ROLE TOGGLE */}
                      <button 
                        onClick={() => toggleRole(user.id, user.role)}
                        className="p-3 bg-indigo-50 text-indigo-500 rounded-xl hover:bg-indigo-600 hover:text-white transition-all active:scale-90"
                        title="Rolni o'zgartirish"
                      >
                        <FaUserShield size={16} />
                      </button>
                      {/* BAN/UNBAN */}
                      <button 
                        onClick={() => toggleStatus(user.id, user.status)}
                        className={`p-3 rounded-xl transition-all active:scale-90 ${
                          user.status === "Active" ? "bg-red-50 text-red-500 hover:bg-red-500 hover:text-white" : "bg-emerald-50 text-emerald-500 hover:bg-emerald-500 hover:text-white"
                        }`}
                        title={user.status === "Active" ? "Bloklash" : "Aktivlashtirish"}
                      >
                        <FaUserSlash size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminUsers