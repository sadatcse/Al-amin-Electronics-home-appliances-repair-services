import React, { useEffect, useState } from "react";
import { BiMenu, BiPhoneCall } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import logo from "../../../public/logo.png";
const Navbar = () => {


  return (
    <header
      data-aos="fade"
      data-aos-duration="300"
      className="relative z-20 border-b-[1px]  border-primary/50 bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900 text-white shadow-lg"
    >
      <nav className="container  flex h-[70px] items-center justify-between py-2 ">
        <div className="text-2xl text-white md:text-3xl ">
          <a href="/#home" className="">
          <img className="h-16 w-64" src={logo}/>
          </a>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center gap-10">
            <li className="cursor pointer group relative">
              <a href="/#home" className="flex h-[72px] items-center gap-[2px]">
                Home{" "}
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block  ">
                <ul className="space-y-3">
                  <li className="p-2 hover:bg-violet-200">Services</li>
                  <li className="p-2 hover:bg-violet-200">About us</li>
                  <li className="p-2 hover:bg-violet-200">Privacy policy</li>
                </ul>
              </div>
            </li>
            <li className="cursor pointer group">
              <a href="/#home" className="flex h-[72px] items-center gap-[2px]">
                Services{" "}

              </a>

            </li>
            <li className="cursor pointer">
              <a href="/#contact">Contact</a>
            </li>
            <div className="flex items-center gap-4">
              <li>
                <BiPhoneCall className="h-[40px] w-[40px] rounded-md bg-primary p-2 text-2xl text-white hover:bg-primary/90" />
              </li>
              <li>
                <div>
                  <p className="text-sm">Call us on</p>
                  <p className="text-lg">+91 123456789</p>
                </div>
              </li>
            </div>

          </ul>
        </div>
        <div className="block md:hidden ">
          <BiMenu className="text-2xl" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;