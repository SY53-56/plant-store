import React from 'react'
import logo from "../../assets/images/Group 35.png"
import {  MenuIcon, SearchIcon, ShoppingCartIcon } from 'lucide-react'
export default function Navbar() {
  return (
    <navbar className="px-10 py-8 flex justify-between">
      <div className='flex gap-1'>
        <img className='w-[250px] object-center ' src={logo} alt="logo" />
      </div>
      <nav className='flex gap-10  justify-center  text-white italic'>
        <a href="">Home</a>
        <a href="">Plant type</a>
        <a href="">more </a>
        <a href="">contact</a>
      </nav>
      <div className='flex gap-10 justify-center  text-white'>
        <SearchIcon size={22}/>
        <ShoppingCartIcon size={22}/>
        <div className='flex flex-col gap-1 cursor-pointer items-end'>
    <div className='w-8  bg-white h-1 rounded-xl '></div>
    <div  className='w-6 bg-white h-1 rounded-xl '></div>
        </div>
      </div>
    </navbar>
  )
}