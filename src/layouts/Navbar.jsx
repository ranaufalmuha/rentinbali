import { faCar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <nav className="flex justify-center fixed w-full z-40 h-24 items-center">
      <div className="max-sm:py-3 max-sm:px-5 py-6 px-10 z-10 bg-background flex gap-12 justify-center rounded-full">
        {/* logo  */}
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCar} className="text-xl" />
          <p className="font-medium max-sm:text-sm">Velora</p>
        </div>
        <div className="flex items-center gap-4 capitalize max-sm:hidden">
          <p>Service</p>
          <p>Cars</p>
          <p>Tour</p>
          <p>About Us</p>
        </div>


        <button className="relative sm:hidden" onClick={() => setIsOpenMenu(true)}>
          <div className={`relative flex items-center justify-center w-[30px] h-[30px] rounded-full transform transition-all ring-0 ring-gray-300 hover:ring-8 ${isOpenMenu ? "ring-4" : ""} ring-opacity-30 duration-200`}>
            <div className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 ${isOpenMenu ? "-rotate-[45deg]" : ""} origin-center`}>
              <div className={`bg-textColor h-[2px] w-1/2 rounded transform transition-all duration-300 ${isOpenMenu ? "-rotate-90 h-[1px] -translate-y-[1px]" : ""} origin-right delay-75`}></div>
              <div className="bg-textColor h-[1px] rounded"></div>
              <div className={`bg-textColor h-[2px] w-1/2 rounded self-end transform transition-all duration-300 ${isOpenMenu ? "-rotate-90" : ""} ${isOpenMenu ? "h-[1px] translate-y-[1px]" : ""} origin-left delay-75`}></div>
            </div>
          </div>
        </button>

      </div>
      {/* menu  */}
      <div className="z-20">
        <div className={`absolute top-0 left-0 w-full h-dvh bg-black/50  ${isOpenMenu ? "block" : "hidden"} duration-300`} onClick={() => setIsOpenMenu(false)}>
        </div>
        <div className="absolute top-0 left-0 w-full h-dvh flex justify-center items-end pointer-events-none" >
          <div className={` bg-black pointer-events-auto ${isOpenMenu ? "translate-y-0" : "translate-y-full"} duration-300 text-white px-8 py-14 w-full h-max flex flex-col gap-2 text-lg border-t border-disabled`}>
            <p>Service</p>
            <p>Cars</p>
            <p>Tour</p>
            <p>About Us</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
