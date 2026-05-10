import React from 'react'
import logo from "../assets/images/Group 35.png"
import Button from './Button'
export default function Footer() {
  return (
    <footer className='flex justify-between px-9'>
      <div className='flex w-96 flex-col '>
    <img className='w-80' src={logo} alt="logo" />
    <p className='text-white'>"From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."</p>
      </div>
      <div>
        <h1 className='text-2xl font-bold text-white'>Quick Link’s</h1>
        <nav className="flex flex-col gap-2 text-white/75 italic">
        <a href="#">Home</a>
        <a href="#">Plant type</a>
        <a href="#">More</a>
        <a href="#">Contact</a>
      </nav>
      </div>
      <div>
        <h1 className='text-2xl font-bold text-white'>For Every Update.</h1>
        <form action="" className='w-80  border-white border-2'>
          <input type="text" className='outline-none text-white' name="text" id="" placeholder='Enter Email' />
          <Button className="bg-white text-black rounded-xl px-2 py-1" name="subscribe"/>
        </form>
      </div>

    </footer>
  )
}
