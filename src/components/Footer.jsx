import React from "react";
import logo from "../assets/images/5e88b52117aa40baa6a96e43b5c4e57858edaa47.png";

export default function Footer() {
  return (
    <footer
      className="
        flex
        flex-col
        lg:flex-row
        justify-between
        gap-14
        px-6
        md:px-10
        lg:px-16
        py-16
      "
    >
      {/* Left Section */}
      <div className="flex max-w-[380px] flex-col">
        
        <div className="flex items-center">
          <img
            className="w-20 md:w-24"
            src={logo}
            alt="logo"
          />

          <h1 className="text-white/75 text-2xl md:text-3xl font-bold">
            FloraVision.
          </h1>
        </div>

        <p
          className="
            text-white/75
            mt-5
            font-medium
            leading-7
            text-sm
            md:text-base
          "
        >
          "From lush indoor greens to vibrant outdoor blooms,
          our plants are crafted to thrive and elevate your
          living environment."
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h1 className="text-2xl font-bold text-white mb-5">
          Quick Link’s
        </h1>

        <nav className="flex flex-col gap-3 text-white/75 italic">
          
          <a
            href="#"
            className="w-fit border-b-2 border-white"
          >
            Home
          </a>

          <a
            href="#"
            className="w-fit border-b-2 border-white"
          >
            Plant type
          </a>

          <a
            href="#"
            className="w-fit border-b-2 border-white"
          >
            More
          </a>

          <a
            href="#"
            className="w-fit border-b-2 border-white"
          >
            Contact
          </a>

        </nav>
      </div>

      {/* Newsletter */}
      <div className="w-full max-w-[380px]">
        
        <h1 className="text-2xl font-bold text-white mb-8">
          For Every Update.
        </h1>

        <form
          className="
            w-full
            border-2
            border-white/50
            rounded-xl
            overflow-hidden
            flex
            items-center
          "
        >
          <input
            type="email"
            placeholder="Enter Email"
            className="
              flex-1
              bg-transparent
              outline-none
              px-4
              py-3
              text-white
              placeholder:text-white/50
            "
          />

          <button
            className="
              bg-white
              text-black
              px-5
              py-3
              font-medium
            "
          >
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
}