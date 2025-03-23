// import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FacebookIcon, InstagramIcon, TelegramIcon, WhatsappIcon } from "../components/SocialMedia";


export const Footer = () => {
  return <footer className="bg-second-background flex flex-col items-center text-white">
    {/* Footer  */}
    <div className="container px-8 py-20 flex flex-col ">
      {/* section 1  */}
      <section className="flex max-md:flex-col gap-8 justify-between">
        {/* 1st  */}
        <div className="flex md:flex-col max-md:pb-10 justify-between gap-4">
          <div className="flex items-center gap-2 text-2xl">
            <FontAwesomeIcon icon={faCar} className="" />
            <p className="font-medium">Velora</p>
          </div>
          <div className="flex gap-6">
            <a href="" target="_blank"><InstagramIcon /></a>
            <a href="" target="_blank"><FacebookIcon /></a>
            <a href="" target="_blank"><TelegramIcon /></a>
            <a href="" target="_blank"><WhatsappIcon /></a>
          </div>
        </div>

        {/* 2nd  */}
        <div className="flex flex-wrap text-disabled gap-12">
          <div className="flex flex-col gap-4" >
            <p className="font-medium text-white">Resources</p>
            <a href="#" >Welcome</a>
            <a href="#" >Service We Offer</a>
            <a href="#" >All Vehicles</a>
            <a href="#">Tour Packages</a>
            <a href="#">Testimonials</a>
          </div>
          <div className="flex flex-col gap-4" >
            <p className="font-medium text-white">Legal</p>
            <a href="#" >Rental Agreement</a>
          </div>
          <div className="flex flex-col gap-4" >
            <p className="font-medium text-white">Company</p>
            <a href="#" >About Us</a>
            <a href="#">Why Choose Us?</a>
          </div>
        </div>
      </section>

      <div className="h-20"></div>

      {/* section 2  */}
      <section className="flex justify-between items-center gap-4 text-disabled max-md:flex-col">
        <div className="flex items-center gap-2 border border-disabled/50 p-1 w-28 justify-center rounded-full">
          <div className="w-2 aspect-square bg-green-500 rounded-full"><div className="w-2 aspect-square bg-green-500 animate-ping rounded-full"></div></div>
          <p className="text-center">Live Now</p>
        </div>
        <p className="text-center">&copy; 2025 Velora, Inc.</p>
        <div className="w-28"></div>
      </section>
    </div>
  </footer>;
};
