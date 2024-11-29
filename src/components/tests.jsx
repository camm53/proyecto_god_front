import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import {servicios} from "../constants";
import ContactCard from './Contactcard';
import Button from "./button";
import { CircleChevronRight } from 'lucide-react';
import { useServiceNavigation } from "./useServiceNavigation";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Index() {
    const { handleNavigation } = useServiceNavigation();
    const imagenn="https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fHw%3D";
    const displayServices = servicios.filter(service => !service.onlyMobile);
    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-center w-full h-full sm:py-8 px-4">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={displayServices.length} visibleSlides={4} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden ">
                            <Slider>
                                <div id="slider"  className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700 ">
                                {displayServices.map((displayServices, index) => (
                                        <Slide index={index+1}>
                                        <div href={"/servicios"} className="flex flex-shrink-0 relative w-full sm:w-auto aspect-[5/8] ">
                                            <img src={`${displayServices.imagen? displayServices.imagen: "https://i.ibb.co/rFsGfr5/carosel-4.png"}`} alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">{index+1}</h2>
                                                
                                                <div className="flex flex-col  h-full items-start justify-end pb-6 group">
    <h3
        className=" text-white text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 
            max-w-full text-sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px] 
            whitespace-normal overflow-hidden line-clamp-2 group-hover:line-clamp-none"
        style={{ overflowWrap: "break-word", wordBreak: "break-word" }}
    >
        {displayServices.title} 
        
    </h3>
    <Button className="w-fit md:flex  text-xl lg:text-2xl font-semibold  p-0 bg-transparent border-none m-0 text-color-2 duration-75   " 
                         px={"px-0"} onClick={() => handleNavigation(displayServices.id)} boton={" "}>
                            <div  className={`font-grotesk text-xl flex  items-center justify-center space-x-1 `}> <p className={''}>VER</p> <CircleChevronRight size={18} strokeWidth={2.3} /></div>   
                        </Button>
</div>


                                            </div>
                                            
                                        </div>
                                        
                                    </Slide>
                                    ))}
                                    
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for tablet and medium size devices */}
                <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={displayServices.length} visibleSlides={2} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                {displayServices.map((displayServices, index) => (
                                        <Slide index={index+1}>
                                        <div href={"/servicios"} className="flex flex-shrink-0 relative w-full sm:w-auto aspect-[5/8] ">
                                            <img src={`${displayServices.imagen? displayServices.imagen: "https://i.ibb.co/rFsGfr5/carosel-4.png"}`} alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">{index+1}</h2>
                                                
                                                <div className="flex flex-col  h-full items-start justify-end pb-6 group">
    <h3
        className=" text-white text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 
            max-w-full text-sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px] 
            whitespace-normal overflow-hidden line-clamp-2 group-hover:line-clamp-none"
        style={{ overflowWrap: "break-word", wordBreak: "break-word" }}
    >
        {displayServices.title} 
        
    </h3>
    <Button className="w-fit md:flex  text-xl lg:text-2xl font-semibold  p-0 bg-transparent border-none m-0 text-color-2 duration-75   " 
                         px={"px-0"} onClick={() => handleNavigation(displayServices.id)} boton={" "}>
                            <div  className={`font-grotesk text-xl flex  items-center justify-center space-x-1 `}> <p className={''}>VER</p> <CircleChevronRight size={18} strokeWidth={2.3} /></div>   
                        </Button>
</div>


                                            </div>
                                            
                                        </div>
                                        
                                    </Slide>
                                    ))}
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for mobile and Small size Devices */}
                <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={displayServices.length} visibleSlides={1} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                {displayServices.map((displayServices, index) => (
                                        <Slide index={index+1}>
                                        <div href={"/servicios"} className="flex flex-shrink-0 relative w-full sm:w-auto aspect-[5/8] ">
                                            <img src={`${displayServices.imagen? displayServices.imagen: "https://i.ibb.co/rFsGfr5/carosel-4.png"}`} alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">{index+1}</h2>
                                                
                                                <div className="flex flex-col  h-full items-start justify-end pb-6 group">
    <h3
        className=" text-white text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 
            max-w-full text-sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px] 
            whitespace-normal overflow-hidden line-clamp-2 group-hover:line-clamp-none"
        style={{ overflowWrap: "break-word", wordBreak: "break-word" }}
    >
        {displayServices.title} 
        
    </h3>
    <Button className="w-fit md:flex  text-xl lg:text-2xl font-semibold  p-0 bg-transparent border-none m-0 text-color-2 duration-75   " 
                         px={"px-0"} onClick={() => handleNavigation(displayServices.id)} boton={" "}>
                            <div  className={`font-grotesk text-xl flex  items-center justify-center space-x-1 `}> <p className={''}>VER</p> <CircleChevronRight size={18} strokeWidth={2.3} /></div>   
                        </Button>
</div>


                                            </div>
                                            
                                        </div>
                                        
                                    </Slide>
                                    ))}
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    );
}
