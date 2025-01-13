import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-custom-gradient text-white py-8 z-40 relative">
            <div className="container mx-auto px-6 lg:px-14 flex flex-col lg:flex-row lg:justify-between items-center gap-4">
                <div className="text-center lg:text-left">
                    <h2 className="text-3xl font-bold mb-2">SnipTrack</h2>
                    <p>Simplifying URL shortening for efficient sharing</p>
                </div>

                <p className="mt-4 lg:mt-0">
                    &copy; 2025 SnipTrack. All rights reserved.
                </p>

                <div className="flex space-x-6 mt-4 lg:mt-0">
                    {/* <a href="#" className="hover:text-gray-200">
                        <FaFacebook size={24} />
                    </a>
                    <a href="#" className="hover:text-gray-200">
                        <FaTwitter size={24} />
                    </a> */}
                    
                    <a href="https://www.linkedin.com/in/likhith-raj005/" target="_blank" className="hover:text-gray-200">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://github.com/likhithraj005" target="_blank" className="hover:text-gray-200">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://likhithraj.netlify.app" target="_blank" className="hover:text-gray-200">
                        <CgWebsite size={24} />
                    </a>
                    <a href="https://www.instagram.com/likhithraj005/" target="_blank" className="hover:text-gray-200">
                        <FaInstagram size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;