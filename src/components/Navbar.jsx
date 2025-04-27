import React from 'react'
import logo from "../assets/logo.jpeg"
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-start items-center mt-3 mx-auto max-w-screen-xl">
            {/* Logo */}
            <div className="flex gap-x-1 ml-10" onClick={() => navigate("/")}>
                <img
                    src={logo}
                    alt="StockView Logo"
                    className="cursor-pointer w-[120px] h-[80px]"
                    onClick={() => navigate('/')}

                />
                <h1 className="font-[Gabarito] text-3xl  pt-[22px] cursor-pointer">
                    Soliq
                </h1>
            </div>

            <div className="font-[Gabarito] text-xl ml-[20%]">
                <ul className="flex gap-x-10 cursor-pointer">
                    <li onClick={() => navigate("/")}>Home</li>
                    <li onClick={() => navigate("/")}>Dashboard</li>
                    <li onClick={() => navigate("/")}>Savings</li>
                    <li onClick={() => navigate("/")}>Insights</li>
                    <li onClick={() => navigate("/")}>Optimisation</li>
                    <li onClick={() => navigate("/contact")}>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
