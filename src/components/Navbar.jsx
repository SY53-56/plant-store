import logo from "../assets/images/Group 35.png";
import {
  SearchIcon,
  ShoppingCartIcon,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="px-10 py-8 flex  justify-between">
      
      {/* Logo */}
      <div>
        <img
          className="w-[220px] object-contain"
          src={logo}
          alt="Logo"
        />
      </div>

      {/* Nav Links */}
      <nav className="flex gap-10 text-white/75 italic">
        <a href="#">Home</a>
        <a href="#">Plant type</a>
        <a href="#">More</a>
        <a href="#">Contact</a>
      </nav>

      {/* Icons */}
      <div className="flex  gap-8 text-white/75">
        <SearchIcon size={22} />
        <ShoppingCartIcon size={22} />

        {/* Hamburger */}
        <div className="flex flex-col gap-1 cursor-pointer items-end">
          <div className="w-8 h-1 bg-white rounded-xl"></div>
          <div className="w-6 h-1 bg-white rounded-xl"></div>
        </div>
      </div>
    </header>
  );
}