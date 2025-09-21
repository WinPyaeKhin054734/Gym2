"use client";
import React, { useState } from "react";

function Nav() {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center lg:px-10 md:hidden">
        <div className="text-black font-bold text-3xl md:text-4xl ps-5">
          <span className="text-lime-400">X</span> FIX
        </div>

        <div
          onClick={() => setMenu(!menu)}
          className="active:scale-90 duration-300  border-black px-3 py-3 rounded-xl z-50"
        >
          <img
            src="https://i.pinimg.com/736x/96/66/3d/96663d92c076f5ec38e936391157d6d1.jpg"
            alt="Menu"
            className="size-8 rounded-lg object-cover hover:cursor-grab active:cursor-grabbing"
          />
        </div>
      </div>

      <div className="hidden md:flex min-h-20 bg-black justify-between items-center">
        <div className="text-white font-bold text-3xl md:text-4xl px-10">
          <span className="text-lime-400">X</span>
          FIX
        </div>
        <div className="text-white font-bold space-x-10">
          <a
            className="hover:cursor-grab active:cursor-grabbing hover:text-lime-400"
            href=""
          >
            Home
          </a>
          <a
            className="hover:cursor-grab active:cursor-grabbing hover:text-lime-400"
            href=""
          >
            All pages
          </a>
          <a
            className="hover:cursor-grab active:cursor-grabbing hover:text-lime-400"
            href=""
          >
            About Us
          </a>
          <a
            className="hover:cursor-grab active:cursor-grabbing hover:text-lime-400"
            href=""
          >
            Contact Us
          </a>
          <a
            className="hover:cursor-grab active:cursor-grabbing hover:text-lime-400"
            href=""
          >
            Courses
          </a>
        </div>
        <div className="px-5">
          <button className="font-bold px-5 py-2 hover:cursor-grab active:cursor-grabbing rounded-3xl bg-lime-500 text-black">
            <p>Get in Touch</p>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 bg-black z-40 text-white flex flex-col justify-center items-center duration-300 transition-all gap-5 ${
          menu ? "opacity-100 " : " opacity-0 pointer-events-none"
        }`}
      >
        <div className="text-white font-bold text-5xl px-10">
          <span className="text-lime-400">X</span>
          FIX
        </div>
        <div className="text-white text-center justify-center items-center font-bold flex flex-col gap-5">
          <a
            className="hover:cursor-grab active:cursor-grabbing hover:text-lime-400"
            href=""
          >
            Home
          </a>
          <a
            className="hover:cursor-grab active:cursor-grabbing hover:text-lime-400"
            href=""
          >
            All pages
          </a>
          <a
            className="hover:cursor-grab active:cursor-grabbing hover:text-lime-400"
            href=""
          >
            About Us
          </a>
          <a
            className="hover:cursor-grab active:cursor-grabbing hover:text-lime-400"
            href=""
          >
            Contact Us
          </a>
          <a
            className="hover:cursor-grab active:cursor-grabbing hover:text-lime-400"
            href=""
          >
            Courses
          </a>
        </div>
        <div className="px-5">
          <button className="font-bold px-5 py-2 hover:cursor-grab active:cursor-grabbing rounded-3xl bg-lime-500 text-black">
            <p>Get in Touch</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
