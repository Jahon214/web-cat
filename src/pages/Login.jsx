import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="bg-linear-90 from-purple-400 to-pink-300 min-h-screen flex items-center justify-center">
            <div className="mx-auto w-114 bg-white rounded-xl p-10">
                <h2 className="text-4xl font-bold text-purple-600 text-center"><i class="fa-solid fa-cat"></i> Web Cat</h2>
                <p className="text-center text-base text-gray-700 pt-2 pb-8">Mushuklarning Onlayn Do'koni</p>
                <form>
                    <label htmlFor="name" className="text-base text-gray-800 font-semibold">Foydalanuvchi nomi</label>
                    <input id="name" className="mt-1 mb-2 border-2 shadow-md duration-300 shadow-purple-500 border-gray-300 focus:border-purple-600 outline-none pl-4 text-md py-2 w-full rounded-lg" type="text" placeholder="Username" />
                    <label htmlFor="password" className="text-base text-gray-800 font-semibold">Parol</label>
                    <input id="password" className="mt-1 border-2 shadow-md duration-300 shadow-purple-500 border-gray-300 focus:border-purple-600 outline-none pl-4 text-md py-2 w-full rounded-lg" type="password" placeholder="Parol" />
                    <button className="mt-5 border-2 outline-none  bg pl-4 text-lg py-2.5 hover:bg-purple-800 duration-300 w-full rounded-lg font-semibold text-white bg-purple-600">Kirish</button>
                    <p className="pt-5 text-base text-center text-gray-600">Hali ro'yxatdan o'tmaganmisiz?
                        <Link to="/registor" className="text-purple-600 text-md font-semibold hover:underline"> Ro'yxatdan o'tish</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login