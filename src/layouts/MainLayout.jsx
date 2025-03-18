import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const MainLayout = ({ children }) => {
  return (
    <main className="overflow-hidden cursor-crosshair scroll-smooth font-light">
      <div className="flex flex-col justify-between min-h-dvh">
        <Navbar />
        {children}
        <Footer />
      </div>
    </main>
  );
};
