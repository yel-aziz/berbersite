"use client"
import Image from "next/image";
import React from "react";
import logo from "@/app/logo.png";
import maroc from "@/app/maroc.png";
const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-center items-center w-full h-20  max-w-[2000px]">
      <div className="flex  justify-between w-[80%]">
        <div className="lg:h-14 lg:w-40 w-28  ">
          <Image
            src={logo}
            alt="/"
            width={1000}
            height={1000}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex justify-between items-center  w-24 md:w-28 p-1  border rounded-r-full rounded-l-full">
     
            <a className="font-semibold text-xl pr-1 border-r-2 border-black">ٱلْمَغْرِب</a>
            <div className="w-7 md:w-10 ">
              <Image
                src={maroc}
                alt="/"
                width={500}
                height={500}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
