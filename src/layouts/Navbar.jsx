import { faCar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex justify-center fixed w-full z-20 h-24 items-center">
      <div className="py-6 px-10 bg-background flex gap-12 justify-center rounded-full">
        {/* logo  */}
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCar} className="text-xl" />
          <p className="font-medium">RentInBali</p>
        </div>
        <div className="flex items-center gap-4 capitalize">
          <p>Service</p>
          <p>Cars</p>
          <p>Tour</p>
          <p>About Us</p>
        </div>
      </div>
    </nav>
  );
};
