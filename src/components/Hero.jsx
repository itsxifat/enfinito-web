import React, { useRef } from "react";
import logo from "../assets/logo-en.png";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import canvas from "../assets/canvas.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  return (
    <>
      <div className="w-full h-screen">
        <div className="w-full h-10 flex justify-between items-center px-10 my-5 bg-transparent">
          <img className="w-auto h-8" src={logo1} alt="" />

          <div className="flex items-center gap-5">
            <p className="text-white text-sm cursor-pointer hover:text-[#1f55df] hover:ease-linear">
              Home
            </p>
            <p className="text-white text-sm cursor-pointer hover:text-[#1f55df] hover:ease-linear">
              About Us
            </p>
            <p className="text-white text-sm cursor-pointer hover:text-[#1f55df] hover:ease-linear">
              Services
            </p>
            <p className="text-white text-sm cursor-pointer hover:text-[#1f55df] hover:ease-linear">
              Careers
            </p>
            <p className="text-white text-sm cursor-pointer hover:text-[#1f55df] hover:ease-linear">
              Portfolio
            </p>
            <p className="text-white text-sm cursor-pointer hover:text-[#1f55df] hover:ease-linear">
              Blog
            </p>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="text-white px-2 py-0.5 border-white border-2 rounded-lg text-m cursor-pointer"
              id="btn-g"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* mid */}

        <div className="w-full h-[calc(100vh-40px)] flex justify-center items-center flex-col gap-20">
            <div className="text-white text-[7px] px-2 py-1 border border-white rounded-2xl flex items-center gap-2 justify-center">
                <div className="flex items-center gap-1 justify-center">
                <div className="w-2 h-2 rounded-full bg-[#c8d6fa]"></div>
                <div className="w-2 h-2 rounded-full bg-[#7d9ff4]"></div>
                <div className="w-2 h-2 rounded-full bg-[#1f55df]"></div>
                </div>
                <div className="text-sm">Finally, you’ve landed with the right team</div>
            </div>

            <div className="flex flex-col items-center justify-center h-50 w-full">
              <div className="text-white text-[4.2rem] font-bold">Your Virtual</div>
              <div className="text-[#1f55df] bg-white px-2 py-1 rounded-xl text-7xl font-bold text-center -rotate-z-3 ">Powerhouse</div>
              <div className="text-white text-[4.2rem] font-bold">for Limitless Growth</div>
            </div>
            <div className="text-white text-[1.1rem] font-bold text-center w-3/5">
              Enfinito is your trusted virtual team offering smart digital solutions to help your business grow faster. From marketing to design and tech, we’re here to take your brand to the next level
            </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
