import React from 'react'
import {Link} from 'react-router-dom'

const Register = () => {
  return (
     <div className="bg-linear-90 from-purple-400 to-pink-300 min-h-screen flex items-center justify-center">
        <div className="mx-auto w-114 bg-white rounded-lg p-10 my-5">
            <h2 className="text-4xl font-bold text-purple-600 text-center"><i className="fa-solid fa-cat"></i> Web Cat</h2>
            <p className="text-center text-base text-gray-600 pt-2 pb-8">Ro'yxatdan o'tish</p>
            <form>
                <label htmlFor="name" className="text-base text-gray-800 font-semibold">To'liq ism</label>
                    <input id="name" className="mt-1 mb-2 border-2 shadow-md duration-300 shadow-purple-500 border-gray-300 focus:border-purple-600 outline-none pl-4 text-md py-2 w-full rounded-lg" type="text" placeholder="Ism Familiya"/>
                <label htmlFor="firstname" className="text-base text-gray-800 font-semibold">Foydalanuvchi nomi</label>
                    <input id="firstname" className="mt-1 mb-2 border-2 shadow-md duration-300 shadow-purple-500 border-gray-300 focus:border-purple-600 outline-none pl-4 text-md py-2 w-full rounded-lg" type="text" placeholder="Username"/>
                <label htmlFor="email" className="text-base text-gray-800 font-semibold">Email</label>
                    <input id="email" className="mt-1 mb-2 border-2 shadow-md duration-300 shadow-purple-500 border-gray-300 focus:border-purple-600 outline-none pl-4 text-md py-2 w-full rounded-lg" type="email" placeholder="email@example.com"/>
                <label htmlFor="telefon" className="text-base text-gray-800 font-semibold">Telefon</label>
                    <input id="telefon" className="mt-1 mb-2 border-2 shadow-md duration-300 shadow-purple-500 border-gray-300 focus:border-purple-600 outline-none pl-4 text-md py-2 w-full rounded-lg" type="text" placeholder="+998 90 123 45 67"/>
                <label htmlFor="password1" className="text-base text-gray-800 font-semibold">Parol</label>
                    <input id="password1" className="mt-1 mb-2 border-2 shadow-md duration-300 shadow-purple-500 border-gray-300 focus:border-purple-600 outline-none pl-4 text-md py-2 w-full rounded-lg" type="password" placeholder="Parol"/>
                <label htmlFor="password2" className="text-base text-gray-800 font-semibold">Parolni tasdiqlash</label>
                    <input id="password2" className="mt-1 border-2 shadow-md duration-300 shadow-purple-500 border-gray-300 focus:border-purple-600 outline-none pl-4 text-md py-2 w-full rounded-lg" type="password" placeholder="Parolni qayta kiriting"/>
                <button className="mt-5 border-2 outline-none  pl-4 text-base py-2.5 hover:bg-purple-800 duration-300 w-full rounded-lg font-semibold text-white bg-purple-600">Ro'yxatdan o'tish</button>
                <p className="pt-5 text-base text-center text-gray-600">Akkauntingiz bormi?
                     <Link to="/login" className="text-purple-600 font-semibold hover:underline"> Kirish</Link>
                </p>
            </form>
        </div>
    </div>
  )
}

export default Register