import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const MainLayout = () => {
  return (
    <main className="overflow-hidden cursor-crosshair scroll-smooth font-light">
      <div className="flex flex-col justify-between min-h-dvh">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </main>
  );
};
