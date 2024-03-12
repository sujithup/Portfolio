"use client";
import Link from "next/link";
import React, { useState } from "react";
import { navLinks } from "../constants";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto bg-[#050709] top-0 left-0 right-0 z-10">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-3xl pt-1 text-white font-semibold"
        >
          Portfolio
        </Link>
        <div className="mobile-menu block pt-1 md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-2 py-3 "
            >
              <CiMenuFries className="h-10 w-10" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-2 py-3 "
            >
              <IoMdClose className="h-10 w-10" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && (
        <ul className="flex bg-black flex-col py-4 items-center">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-2xl rounded md:p-0 hover:text-white"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
