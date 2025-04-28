import React from "react";
import Footer from "../components/Footer";
import { SiV } from "react-icons/si";
const Home = () => {
  const arr = [
    {
      id: 4,

      title: "Real-Time Monitoring",
      desc: "Stay updated with live data on your solar energy generation and system performance.",
    },
    {
      id: 2,

      title: "AI-Based Insights",
      desc: "Benefit from intelligent alerts, smart maintenance tips, and performance optimization.",
    },
    {
      id: 3,

      title: "User-Friendly Dashboard",
      desc: "Track your system’s health and output through clean visuals and easy-to-read graphs. ",
    },
    {
      id: 1,

      title: "Green Energy Focus",
      desc: "SOLIQ supports a sustainable future by maximizing your solar investment's impact.",
    },
  ];
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col max-w-[1040px] w-full ml-[-100px]">
          <h1 className="text-4xl font-semibold mb-6">Welcome to SOLIQ</h1>

          <p className="mb-8 text-xl">
            AI-Based Smart Solar Efficiency Monitoring System
          </p>

          <h2 className="text-3xl font-normal mb-4">Acceptance of Terms:</h2>
          <p className="mb-8">
            By accessing or using our website, app, or services, you are
            agreeing to be bound by these Terms and Conditions and our Privacy
            Policy.
          </p>

          <div className="flex gap-x-10 mb-5">
            {arr.map((item, index) => (
              <div
                className="flex flex-col border-[1px] border-black h-[200px]   rounded-2xl items-center hover:bg-[#24d4e5] cursor-pointer hover:text-white w-[330px]"
                key={index}
              >
                <h3 className="font-semibold mt-1">{item.title}</h3>
                <p className="ml-3 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
