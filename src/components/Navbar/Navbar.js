import React, { useState } from "react";
import { NavbarMenu } from "../../mockData/data";
import Logo from "../../assests/logo.png";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle function for dropdown
  const toggleDropdown = (id) => {
    setDropdownOpen(dropdownOpen === id ? null : id);
  };

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center relative">
     {/* Logo Section */}
<div className="flex items-center space-x-3">
  <img
    src={Logo}
    className="h-12 w-12 rounded-full shadow-lg drop-shadow-[2px_2px_5px_#6EC207]"
    alt="Pavitra"/>
  <div className="cursor-pointer">
    <span className="text-2xl font-bold bg-gradient-to-r from-[#117554] to-[#6EC207] text-transparent bg-clip-text tracking-wide block custom-shadow">
      Pavitra
    </span>
       <span className="text-[0.7rem] font-medium block pl-2 mt-[-2px] bg-gradient-to-r from-[#117554] to-[#6EC207] text-transparent bg-clip-text tracking-wide transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110">
             Foundation
            </span>
          </div>
          </div>
        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden text-gray-700 text-2xl p-3 rounded-full transition-all duration-300 ease-in-out transform 
          ${mobileMenuOpen ? "bg-gray-200 shadow-xl scale-110 rotate-180" : "bg-transparent rotate-0 scale-100"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? (
            <FaTimes className="transition-transform duration-300 ease-in-out scale-125 text-red-500" />
          ) : (
            <FaBars className="transition-transform duration-300 ease-in-out scale-110 text-[#6EC207]" />
          )}
        </button>

        {/* Menu Section */}
        <div
          className={`md:flex ${
            mobileMenuOpen ? "block" : "hidden"
          } absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-5 md:p-0`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-gray-700 font-medium">
            {NavbarMenu.map((item) => (
              <li
                key={item.id}
                className="relative group"
                onMouseEnter={() => setDropdownOpen(item.id)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <div className="flex items-center space-x-1">
                  <a
                    href={item.link}
                    className="relative transition duration-300 hover:text-[#6EC207] text-1xl font-semibold"
                  >
                    {item.title}
                    {/* Underline effect on hover */}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#6EC207] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  {item.children && (
                    <button
                      onClick={() => toggleDropdown(item.id)}
                      className="focus:outline-none ml-1"
                    >
                      <FaChevronDown
                        className={`transition-transform duration-300 ${
                          dropdownOpen === item.id ? "rotate-180 text-[#6EC207]" : "rotate-0"
                        }`}
                      />
                    </button>
                  )}
                </div>
                {/* Dropdown Menu */}
                {item.children && dropdownOpen === item.id && (
                  <ul
                    className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50 border border-gray-200 overflow-hidden"
                    onMouseEnter={() => setDropdownOpen(item.id)}
                    onMouseLeave={() => setDropdownOpen(null)}
                  >
                    {item.children.map((subItem) => (
                      <li
                        key={subItem.id}
                        className="px-4 py-2 hover:bg-[#6EC207] hover:text-white transition-all duration-300"
                      >
                        <a href={subItem.link}>{subItem.title}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Button*/}
        <div className="hidden md:block">
          <Link to='/donate' className="relative overflow-hidden px-7 py-3 rounded-full text-white font-bold text-2xl 
            bg-gradient-to-r from-[#117554] to-[#6EC207] shadow-[0px_5px_15px_rgba(110,194,7,0.5)] 
            transition-all duration-300 ease-in-out transform hover:scale-110 
            hover:shadow-[0px_8px_20px_rgba(110,194,7,0.8)] 
            before:absolute before:inset-0 before:bg-white/10 before:opacity-0 before:transition-all before:duration-300 
            hover:before:opacity-100 active:scale-95">
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
}
