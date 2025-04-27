import React from 'react';
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import logo from "../assets/logo.jpeg";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col'>
      {/* Top Section */}
      <div className="res-width flex flex-col md:flex-row justify-start md:justify-between 2xl:gap-16 mt-[70px] ml-4 md:ml-10">
        {/* First column */}
        <div className="flex flex-col mb-4 md:mb-0">
          <div>
            <img
              src={logo}
              alt="Company Logo"
              className="h-[120px] ml-0 mr-auto cursor-pointer"
            />
          </div>
          <div className="flex flex-col -mt-1">
            <div className="flex flex-row mb-4">
              <CiLocationOn color="#000000" size={30} />
              <div className="flex flex-col">
                <h5 className="text-black ml-3 md:w-[15rem]">
                  VISHWAKARMA INSTITUTE OF TECHNOLOGY VIT, Upper Indira Nagar, Bibwewadi, Pune, Maharashtra 411037
                </h5>
              </div>
            </div>
            <div className="flex flex-row mb-4 items-center">
              <FaPhoneVolume color="#000000" className="mt-2" size={18} />
              <div className="flex flex-col">
                <h5 className="text-black mt-1 ml-3">+91 96233 91366</h5>
              </div>
            </div>
            <div className="flex flex-row mb-4 items-center">
              <MdOutlineEmail color="#000000" className="mt-1" size={27} />
              <div className="flex flex-col">
                <h5 className="text-black mt-1 ml-3">sanskarbhandari01@gmail.com</h5>
              </div>
            </div>
          </div>
        </div>

        {/* Second column */}
        <div className="md:w-[60%] flex justify-start md:justify-between flex-wrap gap-6 mt-8 md:mt-12">
          <div className="flex flex-col ml-2 md:ml-0">
            <h4 className="text-black font-semibold text-[22px]">Company</h4>
            <h4
              className="text-black text-[15px] mb-4 mt-4 cursor-pointer hover:text-[#004AAD]"
              onClick={() => navigate("/about")}
            >
              About Us
            </h4>
            <h4
              className="text-black text-[15px] mb-4 cursor-pointer hover:text-[#004AAD]"
              onClick={() => navigate("/services")}
            >
              Services
            </h4>
            <h4
              className="text-black text-[15px] mb-4 cursor-pointer hover:text-[#004AAD]"
              onClick={() => navigate("/")}
            >
              Blog
            </h4>
            <h4
              className="text-black text-[15px] mb-4 cursor-pointer hover:text-[#004AAD]"
              onClick={() => navigate("/contact")}
            >
              Contact
            </h4>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="h-[0.1rem] bg-white/50 res-width my-4 mx-4 md:mx-10"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 mb-4 gap-4">
        {/* Terms and Privacy */}
        <div className="flex flex-row flex-wrap justify-center gap-6">
          <Link
            to="/terms-conditions"
            className="cursor-pointer hover:text-[#004AAD] text-nowrap text-xs"
          >
            Terms & Conditions
          </Link>
          <Link
            to="/privacy-policy"
            className="cursor-pointer hover:text-[#004AAD] text-nowrap text-xs"
          >
            Privacy Policy
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-black text-xs text-center">
          Copyright 2024 © All Rights Reserved
        </div>

        {/* Social Icons */}
        <div className="flex flex-row space-x-4">
          <Link to="https://www.linkedin.com/company/armouriq/" target="_blank">
            <FaLinkedin className="cursor-pointer" size={25} />
          </Link>
          <Link to="https://www.youtube.com/@ArmourIQ" target="_blank">
            <IoLogoYoutube className="cursor-pointer" size={25} />
          </Link>
          <Link to="https://www.instagram.com/yourinstagramlink" target="_blank">
            <FaInstagram className="cursor-pointer" size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
