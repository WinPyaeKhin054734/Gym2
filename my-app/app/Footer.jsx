import React from "react";

function Footer() {
  return (
    <div>
      <div className="min-h-[300px] flex flex-col justify-center py-5 bg-black px-5 md:px-10">
        {/* Navbar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          {/* Logo */}
          <div className="text-white font-bold text-3xl md:text-4xl pe-12">
            <span className="text-lime-400">X</span>FIX
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-5 text-white font-bold">
            <a className="hover:text-lime-400 cursor-pointer">Home</a>
            <a className="hover:text-lime-400 cursor-pointer">All pages</a>
            <a className="hover:text-lime-400 cursor-pointer">About Us</a>
            <a className="hover:text-lime-400 cursor-pointer">Contact Us</a>
            <a className="hover:text-lime-400 cursor-pointer">Courses</a>
          </div>

          {/* Button */}
          <div>
            <button className="font-bold px-5 py-2 rounded-3xl bg-lime-500 text-black hover:scale-105 duration-300">
              Get in Touch
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center text-center py-15 myAbban gap-8 font-bold text-3xl text-lime-400">
          {" "}
          <p>
            Join Our Community
          </p>
          <p>Join Our Community</p>
          <p>Join Our Community</p>
          <p>Join Our Community</p>
          <p>Join Our Community</p>
          <p>Join Our Community</p>
          <p>Join Our Community</p>
          <p>Join Our Community</p>
          <p>Join Our Community</p>
          <p>Join Our Community</p>
          <p>Join Our Community</p>
        </div>

        <div className="flex justify-center items-center gap-3 flex-wrap">
          <img
            src="https://i.pinimg.com/736x/e5/1d/19/e51d196eda65d3d222c611efd2bb8c7b.jpg"
            className="size-8 border-2 p-1 border-white hover:border-lime-400 rounded-full cursor-pointer hover:scale-110 duration-500"
          />
          <img
            src="https://i.pinimg.com/1200x/e2/36/e6/e236e63aa3a6e5a5526c5b80ad7d83ff.jpg"
            className="size-8 border-2 p-1 border-white hover:border-lime-400 rounded-full cursor-pointer hover:scale-110 duration-500"
          />
          <img
            src="https://i.pinimg.com/736x/1c/19/08/1c19080ad98f75114174b9c6ceb7f3f7.jpg"
            className="size-8 border-2 p-1 border-white hover:border-lime-400 rounded-full cursor-pointer hover:scale-110 duration-500"
          />
          <img
            src="https://i.pinimg.com/1200x/8e/e1/06/8ee106083f2fca7d8e605dea6c430dae.jpg"
            className="size-8 border-2 p-1 border-white hover:border-lime-400 rounded-full cursor-pointer hover:scale-110 duration-500"
          />
          <img
            src="https://i.pinimg.com/1200x/b1/4e/fc/b14efce30ccf2870ca94329ee8fb7b43.jpg"
            className="size-8 border-2 p-1 border-white hover:border-lime-400 rounded-full cursor-pointer hover:scale-110 duration-500"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
