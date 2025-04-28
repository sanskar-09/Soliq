import React from 'react'
import logo from "../assets/logo.jpeg"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    return (
        // Full-width container with border
        <div className="w-full border-b-[1px] border-black">
            {/* Centered content */}
            <div className="flex justify-start items-center mx-auto max-w-screen-xl px-4">
                {/* Logo */}
                <div className="flex gap-x-1 ml-10" onClick={() => navigate("/")}>
                    <img
                        src={logo}
                        alt="StockView Logo"
                        className="cursor-pointer w-[120px] h-[80px]"
                    />
                    <h1 className="font-[Gabarito] text-3xl pt-[22px] cursor-pointer">
                        Soliq
                    </h1>
                </div>

                {/* Navigation links */}
                <div className="font-[Gabarito] text-xl ml-[20%]">
                    <ul className="flex gap-x-10 cursor-pointer">
                        <li onClick={() => navigate("/")}>Home</li>
                        <li onClick={() => navigate("/dashboard")}>Dashboard</li>
                        <li>Savings</li>
                        <li>Insights</li>
                        <li>Optimisation</li>
                        <li onClick={() => navigate("/contact")}>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
