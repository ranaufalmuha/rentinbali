import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex justify-center fixed w-full z-20 h-24 items-center">
      <div className="py-6 px-10 bg-background flex gap-12 justify-center rounded-full">
        {/* logo  */}
        <div className="">
          <p>balirent</p>
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
