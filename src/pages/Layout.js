import React from 'react';
import {Link, Outlet } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import WhatsAppLogo from "../assests/images/WhatsApp.svg.webp"; 

export default function Layout() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Footer />
       {/* WhatsApp Logo */} 
       <div className="wow animate__slideInUp fixed bottom-4 left-4 z-[10]">
                <Link
                    to="https://wa.link/wejgwo>"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block md:w-14 md:h-14 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <img
                        src={WhatsAppLogo}
                        alt="WhatsApp"
                        className="w-10 h-10"/>
                </Link>
            </div>
    </div>
  );
}
