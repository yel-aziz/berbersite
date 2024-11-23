"use client";
import Image from "next/image";
import girl from "../girl.png";

export default function Carousel() {
  return (
    <div className="flex items-center justify-center text-[#292929] w-full h-[380px] bg-gradient-to-r from-fuchsia-400 ">
      <div className=" flex justify-between items-center h-full w-[80%] ">
        <div className="justify-center flex-col hidden  lg:block w-[35%]">
          <div className="font-bold  text-6xl">Get more time to pay.</div>
          <div className=" md:text-xs lg:text-xl mt-5 text-white">
            With BerBerPay, you can split your purchases into interest-free
            payments, online or in-store.
          </div>
        </div>
        <div
          className="h-[380px] mr-40  min-w-80
        "
        >
          <Image
            src={girl}
            alt="Girl with Tabby"
            priority={true} // Ensures image loads quickly
            quality={100} // E
            className="h-full w-full object-contain  "
          />
        </div>
      </div>
    </div>
  );
}
