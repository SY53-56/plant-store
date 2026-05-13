import { useState } from "react";
import logo from "../assets/images/5e88b52117aa40baa6a96e43b5c4e57858edaa47.png";

import {
  SearchIcon,
  ShoppingCartIcon,
  X,
} from "lucide-react";

export default function Navbar() {
  
  const [open, setOpen] = useState(false);

  function handleBox() {
    setOpen((prev) => !prev);
  }

  return (
    <>
      {/* Navbar */}
      <header
        className="
          px-4
          lg:px-10
          py-8
          flex
          justify-between
          items-center
          relative
          z-50
        "
      >
        {/* Logo */}
        <div className="flex gap-2 items-center">
          
          <img
            className="w-16 object-contain"
            src={logo}
            loading="lazy"
            alt="Logo"
          />

          <h1 className="text-white/75 text-3xl">
            FloraVision.
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav
          className="
            hidden
            lg:flex
            gap-10
            text-white/75
            italic
          "
        >
          <a href="#">Home</a>
          <a href="#">Plant type</a>
          <a href="#">More</a>
          <a href="#">Contact</a>
        </nav>

        {/* Icons */}
        <div className="flex gap-8 text-white/75">

          {/* Desktop Icons */}
          <div className="hidden lg:flex gap-5">
            <SearchIcon size={22} />
            <ShoppingCartIcon size={22} />
          </div>

          {/* Mobile Hamburger */}
        {
          open===false?(  <button
            onClick={handleBox}
            className={` 
             
              flex
             lg:hidden
              flex-col
              gap-1
              cursor-pointer
              items-end
            `
            }
          >
            <div className="w-8 h-1 bg-white rounded-xl"></div>
            <div className="w-6 h-1 bg-white rounded-xl"></div>
          </button>):( <button
          onClick={handleBox}
          className="
          
            cursor-pointer
          "
        >
          <X size={32} />
        </button>)
        }
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`
          fixed
          top-0
          right-0
          w-full
          h-screen
          bg-black/95
          backdrop-blur-md
          z-40
          flex
          flex-col
          justify-center
          items-center
          gap-10
          text-white
          text-2xl
          transition-all
          duration-500
          ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* Close Button */}
       

        <a href="#">Home</a>
        <a href="#">Plant type</a>
        <a href="#">More</a>
        <a href="#">Contact</a>
      </div>
    </>
  );
}