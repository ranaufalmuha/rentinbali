import React, { useRef } from "react";
import { HeaderSection } from "../components/HeaderSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faChevronLeft, faChevronRight,
    faArrowUp,
    faCalendar,
    faCarSide,
    faGasPump,
    faFaceLaughBeam,
    faRankingStar,
    faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const LandingPage = () => {
    const listCar = [
        {
            model: "BMW M5",
            imgUrl:
                "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            year: "2025",
            transmission: "Automatic",
            fuel_type: "Gasoline",
            price: {
                daily: 2480000,
                weekly: 1500000,
                monthly: 70000000,
            },
        },
        {
            model: "2025 Rolls-Royce Phantom",
            imgUrl:
                "https://hips.hearstapps.com/hmg-prod/images/phantom-scintilla-private-collection-0-1-66b50a5eddd44.jpg?crop=0.832xw:0.832xh;0.0849xw,0.168xh&resize=700:*",
            year: "2025",
            transmission: "Automatic",
            fuel_type: "Gasoline",
            price: {
                daily: 2480000,
                weekly: 1500000,
                monthly: 70000000,
            },
        },
        {
            model: "2025 Rolls-Royce Ghost",
            imgUrl:
                "https://hips.hearstapps.com/hmg-prod/images/2025-rolls-royce-ghost-ii-29-67053b7543813.jpg?crop=0.580xw:0.438xh;0.260xw,0.391xh&resize=700:*",
            year: "2025",
            transmission: "Automatic",
            fuel_type: "Gasoline",
            price: {
                daily: 2480000,
                weekly: 1500000,
                monthly: 70000000,
            },
        },
        {
            model: "2025 Rolls-Royce Spectre",
            imgUrl:
                "https://hips.hearstapps.com/hmg-prod/images/2024-rolls-royce-spectre-183-671fa78bc29e8.jpg?crop=0.590xw:0.496xh;0.205xw,0.372xh&resize=700:*",
            year: "2025",
            transmission: "Automatic",
            fuel_type: "Gasoline",
            price: {
                daily: 2480000,
                weekly: 1500000,
                monthly: 70000000,
            },
        },
        {
            model: "2019 Rolls-Royce Ghost Series II",
            imgUrl:
                "https://hips.hearstapps.com/hmg-prod/images/2015-rolls-royce-series-ii-mmp-1-1556749597.jpg?crop=0.971xw:0.890xh;0.0224xw,0.110xh&resize=700:*",
            year: "2025",
            transmission: "Automatic",
            fuel_type: "Gasoline",
            price: {
                daily: 2480000,
                weekly: 1500000,
                monthly: 70000000,
            },
        },
    ];

    const listTour = [
        {
            name: "Full-Day Ubud & Rice Terraces",
            backgroundUrl: "https://images.pexels.com/photos/4530514/pexels-photo-4530514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            destinations: [
                {
                    place: "Sacred Monkey Forest",
                },
                {
                    place: "Tegallalang Rice Terraces",
                },
                {
                    place: "Ubud Art Market",
                },
            ],
        },
        {
            name: "Beach & Sunset Tour",
            backgroundUrl: "https://images.unsplash.com/photo-1564981447395-903d78d49a28?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            destinations: [
                {
                    place: "Uluwatu Temple",
                },
                {
                    place: "Jimbaran Beach",
                },
                {
                    place: "Kecak Fire Dance",
                },
            ],
        },
        {
            name: "Nusa Penida Adventure",
            backgroundUrl: "https://images.unsplash.com/photo-1532254497630-c74966e79621?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            destinations: [
                {
                    place: "Kelingking Beach",
                },
                {
                    place: "Angel's Billabong",
                },
                {
                    place: "Crystal Bay",
                },
            ],
        },
        {
            name: "North Bali Exploration",
            backgroundUrl: "https://images.unsplash.com/photo-1680094513147-a9b7ce9b209b?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            destinations: [
                {
                    place: "Gitgit Waterfall",
                },
                {
                    place: "Ulun Danu Temple",
                },
                {
                    place: "Lovina Beach",
                },
            ],
        },
        {
            name: "Customized Private Tour",
            backgroundUrl: "https://c1.wallpaperflare.com/preview/262/812/847/travel-outdoors-girl-landscape.jpg",
            destinations: [
                {
                    place: "Choose your own itinerary",
                },
            ],
        },
    ];

    const listTestimonials = [
        {
            name: "John Doe",
            country: "Turkiye",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, voluptate. Lorem ipsum dolor sit.🔥",
            img: "https://avatars.githubusercontent.com/u/153919071?v=4",
        }, {
            name: "Señorita",
            country: "Spain",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, voluptate. 🥳 Lorem ipsum dolor sit. orem ipsum dolor sit amet consectetur adipisicing elit.🤍 ",
            img: "https://m.media-amazon.com/images/M/MV5BYTkzMDllOGUtMzQ5Yi00MDk3LWIxZjAtNTFhNzM5NWVkNjc4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        }, {
            name: "John Doe",
            country: "Turkiye",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, voluptate. Lorem ipsum dolor sit.🔥",
            img: "https://avatars.githubusercontent.com/u/153919071?v=4",
        }, {
            name: "Señorita",
            country: "Spain",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, voluptate. 🥳 Lorem ipsum dolor sit. orem ipsum dolor sit amet consectetur adipisicing elit.🤍 ",
            img: "https://m.media-amazon.com/images/M/MV5BYTkzMDllOGUtMzQ5Yi00MDk3LWIxZjAtNTFhNzM5NWVkNjc4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        }, {
            name: "John Doe",
            country: "Turkiye",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, voluptate. Lorem ipsum dolor sit.🔥",
            img: "https://avatars.githubusercontent.com/u/153919071?v=4",
        }, {
            name: "Señorita",
            country: "Spain",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, voluptate. 🥳 Lorem ipsum dolor sit. orem ipsum dolor sit amet consectetur adipisicing elit.🤍 ",
            img: "https://m.media-amazon.com/images/M/MV5BYTkzMDllOGUtMzQ5Yi00MDk3LWIxZjAtNTFhNzM5NWVkNjc4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        }
    ]

    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'right' ? 300 : -300; // Adjust this value as needed
            scrollRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="flex flex-col items-center">
            {/* section welcome  */}
            <div className="h-24"></div>
            <section id="welcome" className="px-8 container duration-300">
                <div className=" relative h-[60dvh] max-h-[800px] rounded-3xl overflow-hidden flex justify-center items-center bg-black text-white shadow-lg">
                    <div className="z-10 flex flex-col items-center">
                        <p className="text-3xl md:text-6xl font-normal text-center max-w-[1000px] px-8 py-6">
                            Explore Bali in Comfort and Style
                        </p>
                        <p className="text-center md:text-xl max-w-[700px] px-8">
                            Explore Bali’s beauty with our reliable car rentals and
                            unforgettable tour packages today
                        </p>
                        <a href="#service" className="mt-8 py-3 px-6 bg-accent rounded-full hover:scale-110 duration-300 flex items-center gap-4 max-md:text-sm text-black">
                            <p>View Our Services</p>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </a>
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
            <section id="service" className="px-8 container flex flex-col gap-12 duration-300">
                <HeaderSection
                    sectionName={"Service We Offer"}
                    title={"Certified Excellence"}
                />
                <div className="flex flex-col md:flex-row gap-8 duration-300">
                    <a href="#all_vehicles" className="w-full md:w-1/2 md:max-w-[500px] aspect-square rounded-3xl overflow-hidden flex flex-col justify-end p-10 gap-4 text-white relative group duration-300 bg-black shadow-lg">
                        <p className="text-2xl z-10">Car Rental</p>
                        <p className="z-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Reiciendis, iste!
                        </p>

                        {/* icon  */}
                        <FontAwesomeIcon
                            icon={faArrowUp}
                            className="absolute top-10 z-10 right-10 text-4xl group-hover:scale-125 duration-300 rotate-45"
                        />

                        {/* background  */}
                        <img
                            src="https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            draggable={false}
                            className=" absolute top-0 left-0 w-full h-full object-cover opacity-80 group-hover:opacity-50 group-hover:scale-125 duration-300"
                        />
                    </a>
                    <a href="#tour_packages" className="w-full md:w-1/2 md:max-w-[500px] aspect-square rounded-3xl overflow-hidden flex flex-col justify-end p-10 gap-4 text-white relative group duration-300 bg-black shadow-lg">
                        <p className="text-2xl z-10">Tour Packages</p>
                        <p className="z-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Reiciendis, iste!
                        </p>

                        {/* icon  */}
                        <FontAwesomeIcon
                            icon={faArrowUp}
                            className="absolute top-10 z-10 right-10 text-4xl group-hover:scale-125 duration-300 rotate-45"
                        />

                        {/* background  */}
                        <img
                            src="https://images.unsplash.com/photo-1620104493388-8747c90fcc2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            draggable={false}
                            className=" absolute top-0 left-0 w-full h-full object-cover opacity-80 group-hover:opacity-50 group-hover:scale-125 duration-300"
                        />
                    </a>
                </div>
            </section>

            {/* section All Vehicles  */}
            <div className="h-24"></div>
            <section id="all_vehicles" className="px-8 container flex flex-col gap-12 duration-300">
                <HeaderSection
                    sectionName={"All Vehicles"}
                    title={"70+ Cars Are Available"}
                />
                <div className="flex justify-end gap-4 items-center">
                    <p>Price By : </p>
                    <div className="px-4 py-2 rounded-xl">
                        <select value="" className="">
                            <option name="" id="">
                                Daily
                            </option>
                            <option name="" id="">
                                Weekly
                            </option>
                            <option name="" id="">
                                Monthly
                            </option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-12 duration-300">
                    {listCar.map((item, index) => (
                        <div key={index} className="w-full rounded-3xl overflow-hidden flex flex-col relative group duration-300 shadow-lg hover:scale-105 ">
                            <div className="w-full aspect-video bg-black relative overflow-hidden">
                                <img
                                    src={item.imgUrl}
                                    alt=""
                                    draggable={false}
                                    className=" absolute top-0 left-0 w-full h-full object-cover opacity-80 group-hover:scale-110 duration-300"
                                />
                            </div>
                            <div className="p-8 flex flex-col gap-4">
                                <p className="max-2xs:text-lg text-xl font-normal duration-300">
                                    {item.model}
                                </p>
                                <div className="flex flex-col gap-2 max-xs:hidden">
                                    <div className="flex gap-2 items-center">
                                        <FontAwesomeIcon icon={faCalendar} className="w-6" />
                                        <p>{item.year}</p>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <FontAwesomeIcon icon={faCarSide} className="w-6" />
                                        <p>{item.transmission}</p>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <FontAwesomeIcon icon={faGasPump} className="w-6" />
                                        <p>{item.fuel_type}</p>
                                    </div>
                                </div>
                                <div className="flex max-2xs:flex-col max-2xs:items-start gap-2 items-center justify-between">
                                    <p className="font-bold max-xs:text-base text-lg">
                                        IDR 2.480k /Day
                                    </p>
                                    <button className="max-xs:py-2 max-xs:px-4 py-3 px-6 bg-accent rounded-full hover:scale-110 duration-300">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* section Tour Packages  */}
            <div id="tour_packages" className="h-24"></div>
            <section className="flex flex-col items-start gap-12 w-full  duration-300 container px-8">
                <HeaderSection sectionName={"Tour Packages"} title={"Explore Bali"} />
                <div className="relative w-full">
                    <div className="flex gap-12 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar " ref={scrollRef}>
                        {listTour.map((item, index) => (
                            <div key={index} className="w-1/2 min-w-[250px] max-w-[400px] flex-shrink-0 shadow-lg aspect-[9/16] rounded-3xl relative overflow-hidden snap-start group">
                                <div className="flex flex-col justify-end h-full p-8 text-white no-scrollbar gap-4">
                                    <p className="text-3xl">{item.name}</p>
                                    <div className="flex flex-col gap-2">
                                        {item.destinations.map((item) => (
                                            <p>📍{item.place}</p>
                                        ))}
                                    </div>
                                </div>
                                {/* Background */}
                                <div className="absolute w-full h-full top-0 left-0 -z-10 bg-black">
                                    <img src={item.backgroundUrl} className="w-full h-full object-cover opacity-80 group-hover:opacity-50 group-hover:scale-110 duration-300" alt="" />
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Navigation Buttons */}
                    <div className="flex justify-end gap-8 py-6 px-10">
                        <button className="bg-accent rounded-2xl w-16 aspect-square shadow-lg" onClick={() => scroll('left')}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <button className="bg-accent rounded-2xl w-16 aspect-square shadow-lg" onClick={() => scroll('right')}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </div>
            </section>

            {/* section Why Choose Us  */}
            <div className="h-24"></div>
            <section id="why_choose_us" className="px-8 container flex flex-col gap-12 duration-300 bg-second-background text-white py-20 text-center items-center rounded-3xl">
                <div className="flex flex-col gap-2">
                    <p className="capitalize">why choose us?</p>
                    <p className="text-3xl max-w-[600px] font-medium">Your Reliable Partner for Unforgettable Bali Adventures</p>
                </div>
                <div className="flex max-md:flex-col max-md:items-center w-full gap-8 justify-center ">
                    {/* 1st  */}
                    <div className="px-10 py-4 flex flex-col items-center max-md:w-full w-1/3 gap-4 max-w-[300px]">
                        <FontAwesomeIcon icon={faFaceLaughBeam} className="text-4xl" />
                        <div className="flex flex-col gap-2">
                            <p className="text-xl">Reliability</p>
                            <p className="text-disabled text-sm">Our fleet of well-maintained vehicles ensures that you can explore Bali with confidence.</p>
                        </div>
                    </div>

                    {/* 2nd  */}
                    <div className="px-10 py-4 flex flex-col items-center max-md:w-full w-1/3 gap-4 max-w-[300px]">
                        <FontAwesomeIcon icon={faHandHoldingDollar} className="text-4xl" />
                        <div className="flex flex-col gap-2">
                            <p className="text-xl">Best Prices</p>
                            <p className="text-disabled text-sm">We offer competitive pricing without compromising on quality.</p>
                        </div>
                    </div>

                    {/* 3rd  */}
                    <div className="px-10 py-4 flex flex-col items-center max-md:w-full w-1/3 gap-4 max-w-[300px]">
                        <FontAwesomeIcon icon={faRankingStar} className="text-4xl" />
                        <div className="flex flex-col gap-2">
                            <p className="text-xl">High-Quality Service</p>
                            <p className="text-disabled text-sm">Our dedicated team is committed to providing outstanding customer service.</p>
                        </div>
                    </div>
                </div>

                <Link to={""} className="max-xs:py-2 max-xs:px-4 py-3 px-6 bg-accent rounded-full hover:scale-110 duration-300 text-black">Book Now</Link>
            </section>

            {/* section Testimonials  */}
            <div className="h-24"></div>
            <section id="testimonials" className="flex flex-col items-center gap-12 w-full  duration-300  ">
                <div className="container px-8">
                    <HeaderSection sectionName={"Testimonials"} title={"Satisfied Customers"} />
                </div>
                {/* contents  */}
                <div className="w-full inline-flex flex-nowrap">
                    <div className="flex">
                        {/* 1st  */}
                        <div className="animate-infinite-scroll flex">
                            {listTestimonials.map((item, i) => (
                                <div key={i} className="flex-shrink-0 pr-4">
                                    <div className="p-8 border border-disabled/20 rounded-2xl flex flex-col gap-3 hover:scale-110 duration-300 shadow-xl">
                                        {/* Name  */}
                                        <div className="flex items-center gap-3">
                                            <img src={item.img} className=" w-9 h-9 object-cover rounded-full" alt="" />
                                            <div className="flex flex-col">
                                                <p className="text-base font-semibold">{item.name}</p>
                                                <p className="text-xs">{item.country}</p>
                                            </div>
                                        </div>
                                        {/* Comments  */}
                                        <p className="w-[270px] text-sm line-clamp-6">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* 2nd  */}
                        <div className="animate-infinite-scroll flex" aria-hidden="true">
                            {listTestimonials.map((item, i) => (
                                <div key={i} className="flex-shrink-0 pr-4">
                                    <div className="p-8 border border-disabled/20 rounded-2xl  flex flex-col gap-3 hover:scale-110 duration-300 shadow-xl">
                                        {/* Name  */}
                                        <div className="flex items-center gap-3">
                                            <img src={item.img} className=" w-9 h-9 object-cover rounded-full" alt="" />
                                            <div className="flex flex-col">
                                                <p className="text-base font-semibold">{item.name}</p>
                                                <p className="text-xs">{item.country}</p>
                                            </div>
                                        </div>
                                        {/* Comments  */}
                                        <p className="w-[270px] text-sm line-clamp-6">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* End  */}
            <div className="h-24"></div>
        </div>
    );
};
