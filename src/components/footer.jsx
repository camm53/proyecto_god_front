import React from "react";
import { socials } from "../constants";

import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaDiscord } from 'react-icons/fa';

const Footer1 = ({className}) => {
    const iconComponents = {
        'Instagram': FaInstagram,
        'Facebook': FaFacebook,
        'Twitter': FaTwitter,
        'YouTube': FaYoutube
    };

    return (
        <div className={`mx-auto container py-16 xl:px-20 lg:px-12 sm:px-6 px-4 ${className || ''}`}>
            <div className=" grid grid-cols-[auto_auto] space-y-7 md:space-y-0 md:grid-cols-[auto_auto_auto] md:gap-[6rem] gap-4 md:justify-self-center">
                <div className="col-span-full md:col-span-1 flex flex-col flex-shrink-0  w-auto  ">
                    <div>
                    <h2 className="text-5xl font-code font-extrabold leading-4 text-gray-800">SETECA</h2>
                    </div>
                    <p className="text-sm leading-none text-gray-800 mt-4">Copyright © 2024 Seteca</p>
                    <p className="text-sm leading-none text-gray-800 mt-4">All rights reserved</p>
                    <div className="flex items-center gap-x-4 mt-12">
                    {socials
                        .filter(social => iconComponents.hasOwnProperty(social.title))
                        .map(social => {
                            const IconComponent = iconComponents[social.title];

                            return (
                                <div 
                                key={social.id}
                                onClick={() => window.open(social.url, '_blank')}
                                className="opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center"
                                >
                                <IconComponent className="text-white" size={18} />
                                </div>
                            );
                        })
                    }
                    
                    </div>
                </div>
                <div className="sm:ml-0 w-auto ">
                    <h2 className="text-base font-semibold leading-4 text-gray-800">Company</h2>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Blog</p>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Pricing</p>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">About Us</p>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Contact us</p>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Testimonials</p>
                </div>
                <div className="">
                    <h2 className="text-base font-semibold leading-4 text-gray-800">Support</h2>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">(984) 167-2057</p>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">danielrejon.seteca@gmail.com</p>
                    {/* <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Status policy</p>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Privacy policy</p>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Terms of service</p> */}
                </div>
               
            </div>
            
        </div>
    );
};

export default Footer1;
