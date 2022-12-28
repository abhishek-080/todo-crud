import React from "react";
import img1 from './menu-bar.png';
import { useState } from "react";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative  px-2 py-3 bg-blue-700 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:justify-start">
            <a
              className="text-lg font-bold  inline-block mr-4 py-2  uppercase text-white cursor-pointer"
            >
              Todos
            </a>
            <button
              className=" bg-white text-white pointer text-xl  px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden md:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <img src={img1} alt="menupotion" style={{ height:"27px"}}  />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow justify-items-center md:flex" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row  lg:ml-auto md:flex-row md:ml-auto mt-l4 sm-mt-4 mt-n4">
              <li className="nav-item pointer ">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold text-white hover:opacity-75"
                >
                  <span className="ml-2 ">Home</span>
                </a>
              </li>
              <li className="nav-item pointer">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold  text-white hover:opacity-75"
                >
                  <span className="ml-2">Profile</span>
                </a>
              </li>
              <li className="nav-item pointer">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold text-white hover:opacity-75"
                >
                  <span className="ml-2">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}