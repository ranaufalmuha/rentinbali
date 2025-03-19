import React from 'react'
import { HeaderSection } from '../components/HeaderSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowUp, faCalendar, faCarSide, faGasPump } from "@fortawesome/free-solid-svg-icons";

export const LandingPage = () => {
    const listCar = [
        {
            model: "BMW M5",
            imgUrl: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            year: "2025",
            transmission: "Automatic",
            fuel_type: "Gasoline",
            price: {
                daily: 2480000,
                weekly: 1500000,
                monthly: 70000000,
            }
        },
        {
            model: "2025 Rolls-Royce Phantom",
            imgUrl: "https://hips.hearstapps.com/hmg-prod/images/phantom-scintilla-private-collection-0-1-66b50a5eddd44.jpg?crop=0.832xw:0.832xh;0.0849xw,0.168xh&resize=700:*",
            year: "2025",
            transmission: "Automatic",
            fuel_type: "Gasoline",
            price: {
                daily: 2480000,
                weekly: 1500000,
                monthly: 70000000,
            }
        },
        {
            model: "2025 Rolls-Royce Ghost",
            imgUrl: "https://hips.hearstapps.com/hmg-prod/images/2025-rolls-royce-ghost-ii-29-67053b7543813.jpg?crop=0.580xw:0.438xh;0.260xw,0.391xh&resize=700:*",
            year: "2025",
            transmission: "Automatic",
            fuel_type: "Gasoline",
            price: {
                daily: 2480000,
                weekly: 1500000,
                monthly: 70000000,
            }
        },
        {
            model: "2025 Rolls-Royce Spectre",
            imgUrl: "https://hips.hearstapps.com/hmg-prod/images/2024-rolls-royce-spectre-183-671fa78bc29e8.jpg?crop=0.590xw:0.496xh;0.205xw,0.372xh&resize=700:*",
            year: "2025",
            transmission: "Automatic",
            fuel_type: "Gasoline",
            price: {
                daily: 2480000,
                weekly: 1500000,
                monthly: 70000000,
            }
        },
        {
            model: "2019 Rolls-Royce Ghost Series II",
            imgUrl: "https://hips.hearstapps.com/hmg-prod/images/2015-rolls-royce-series-ii-mmp-1-1556749597.jpg?crop=0.971xw:0.890xh;0.0224xw,0.110xh&resize=700:*",
            year: "2025",
            transmission: "Automatic",
            fuel_type: "Gasoline",
            price: {
                daily: 2480000,
                weekly: 1500000,
                monthly: 70000000,
            }
        }
    ];
    return (
        <div className='flex flex-col items-center'>
            {/* section welcome  */}
            <div className="h-24"></div>
            <section className='px-8 container duration-300'>
                <div className=" relative h-[60dvh] max-h-[800px] rounded-3xl overflow-hidden flex justify-center items-center bg-black text-white">
                    <div className="z-10 flex flex-col items-center">
                        <p className='text-3xl md:text-6xl font-normal text-center max-w-[1000px] px-8 py-6'>Explore Bali in Comfort and Style</p>
                        <p className='text-center md:text-xl max-w-[700px] px-8'>Explore Bali’s beauty with our reliable car rentals and unforgettable tour packages today</p>
                        <button className='mt-8 py-3 px-6 bg-accent rounded-full hover:scale-110 duration-300 flex items-center gap-4 max-md:text-sm text-black'>
                            <p>View Our Services</p>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
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
            <section className='px-8 container flex flex-col gap-12 duration-300'>
                <HeaderSection sectionName={"All Vehicles"} title={"70+ Cars Are Available"} />
                <div className="flex justify-end gap-4 items-center">
                    <p>Price By : </p>
                    <div className="px-4 py-2 rounded-xl">
                        <select value="" className=''>
                            <option name="" id="">Daily</option>
                            <option name="" id="">Weekly</option>
                            <option name="" id="">Monthly</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-12 duration-300">
                    {listCar.map((item) => (
                        <div className="w-full rounded-3xl overflow-hidden flex flex-col relative group duration-300 shadow-xl hover:scale-105 ">
                            <div className="w-full aspect-video bg-black relative overflow-hidden">
                                <img src={item.imgUrl} alt="" draggable={false} className=' absolute top-0 left-0 w-full h-full object-cover opacity-80 group-hover:scale-110 duration-300' />
                            </div>
                            <div className="p-8 flex flex-col gap-4">
                                <p className='max-2xs:text-lg text-xl font-normal duration-300'>{item.model}</p>
                                <div className="flex flex-col gap-2 max-xs:hidden">
                                    <div className="flex gap-2 items-center">
                                        <FontAwesomeIcon icon={faCalendar} className='w-6' />
                                        <p>{item.year}</p>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <FontAwesomeIcon icon={faCarSide} className='w-6' />
                                        <p>{item.transmission}</p>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <FontAwesomeIcon icon={faGasPump} className='w-6' />
                                        <p>{item.fuel_type}</p>
                                    </div>
                                </div>
                                <div className="flex max-2xs:flex-col max-2xs:items-start gap-2 items-center justify-between">
                                    <p className='font-bold max-xs:text-base text-lg'>IDR 2.480k /Day</p>
                                    <button className='max-xs:py-2 max-xs:px-4 py-3 px-6 bg-accent rounded-full hover:scale-110 duration-300'>Rent Now</button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </section>

            {/* End  */}
            <div className="h-24"></div>
        </div>
    )
}
