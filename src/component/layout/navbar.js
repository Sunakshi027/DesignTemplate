"use client";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import img1 from "../../assest/bar.svg";


export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center py-[22px]  lg:px-[60px] px-[20px]  text-white">
      <div className="flex justify-between w-[268px] lg:p-5 p-[14px]  border border-[#333333] md:rounded-[260px] rounded-[20px] backdrop-blur-[3px]">
        <Link href="/work" className=" hover:text-[#b98c24] transition-all duration-300 ">Work</Link>
        <Link href="/contact"  className=" hover:text-[#b98c24] transition-all duration-300 ">Contact</Link>
      </div>

     <button onClick={() => setIsOpen(true)}> 
        <Image
        src={img1}
        alt="Menu"
        width={40}
        height={40}
      />
    </button>
     {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/40  "
        />
      )}

     
      <div
        className={`fixed right-0 top-0 z-50 h-screen md:w-[400px] w-[300px] bg-[#100B08] p-[30px] border border-[#3d3d3ccc] rounded-[10px]
        transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Heading + Close */}
        <div className="flex items-center justify-between border-b border-[#3d3d3ccc] pb-[20px]">
          <h2 className="md:text-[30px] text-[20px] font-bold text-white">
            Welcome
          </h2>

          <button
            onClick={() => setIsOpen(false)}
            className="text-[30px] leading-none text-white"
          >
            ×
          </button>
        </div>

<div className=" text-[#EFE6D1] font-[impact] text-center md:text-[70px] text-[35px] mt-[30px]">
  <h2>MISHA R.KOZAK</h2>
</div>
      
      </div>
    </nav>
  );
}



