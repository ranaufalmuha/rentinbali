import React from 'react'
import { HeaderSection } from '../components/HeaderSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export const LandingPage = () => {
    return (
        <div className='flex flex-col items-center'>
            {/* section welcome  */}
            <div className="h-24"></div>
            <section className='px-8 container duration-300'>
                <div className=" relative h-[80dvh] max-h-[800px] rounded-3xl overflow-hidden flex justify-center items-center bg-black text-white">
                    <div className="z-10 flex flex-col items-center">
                        <p className='text-6xl font-normal text-center max-w-[1000px] px-8 py-6'>Experience Perfect Lifestyle Management</p>
                        <p className='text-center text-xl max-w-[700px] px-8'>We’re here to make you feel special catering to your unique needs with care and the utmost attention.</p>
                    </div>
                    <video
                        autoPlay
                        muted
                        loop
                        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-50"
                    >
                        <source src="https://perfect.live/app/uploads/2024/02/hero-v-1-2.mp4" />
                    </video>
                </div>
            </section>

            {/* section Service  */}
            <div className="h-24"></div>
            <section className='px-8 container flex flex-col gap-12 duration-300'>
                <HeaderSection sectionName={"Service We Offer"} title={"Certified Excellence"} />
                <div className="flex flex-col md:flex-row gap-8 duration-300">
                    <div className="w-full md:w-1/2 md:max-w-[500px] aspect-square rounded-3xl overflow-hidden flex flex-col justify-end p-10 gap-4 text-white relative group duration-300 bg-black">
                        <p className='text-2xl z-10'>Car Rental</p>
                        <p className='z-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, iste!</p>

                        {/* icon  */}
                        <FontAwesomeIcon icon={faArrowUp} className='absolute top-10 z-10 right-10 text-4xl group-hover:scale-125 duration-300 rotate-45' />

                        {/* background  */}
                        <img src="https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" draggable={false} className=' absolute top-0 left-0 w-full h-full object-cover opacity-50 group-hover:scale-125 duration-300' />
                    </div>
                    <div className="w-full md:w-1/2 md:max-w-[500px] aspect-square rounded-3xl overflow-hidden flex flex-col justify-end p-10 gap-4 text-white relative group duration-300 bg-black">
                        <p className='text-2xl z-10'>Tour Packages</p>
                        <p className='z-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, iste!</p>

                        {/* icon  */}
                        <FontAwesomeIcon icon={faArrowUp} className='absolute top-10 z-10 right-10 text-4xl group-hover:scale-125 duration-300 rotate-45' />

                        {/* background  */}
                        <img src="https://images.unsplash.com/photo-1620104493388-8747c90fcc2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" draggable={false} className=' absolute top-0 left-0 w-full h-full object-cover opacity-50 group-hover:scale-125 duration-300' />
                    </div>
                </div>
            </section>

            {/* section Featured Cars  */}
            <div className="h-24"></div>
            <section className='px-8 container flex flex-col gap-12'>
                <HeaderSection sectionName={"All Vehicles"} title={"70+ Cars Are Available"} />

            </section>

            {/* End  */}
            <div className="h-24"></div>
        </div>
    )
}
