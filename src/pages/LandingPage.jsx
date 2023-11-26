import React from "react";
import arrow from "../assets/forward.svg";
import landingBG from "../assets/landingBG.png";
import { Link } from "react-scroll";
import Navmenu from "../components/Navmenu";

const LandingPage = () => {
  return (
    <div>
      <Navmenu />
      <div
        id="about"
        className="lg:pt-[190px] pt-[15rem] lg:px-[70px] px-5 w-full h-screen lg:flex items-center justify-center"
      >
        <div className="flex flex-col-reverse  lg:flex lg:flex-row items-center mb-[8rem] justify-center w-full gap-10 lg:space-y-0 lg:w-[95%] h-full lg:h-[600px] lg:mt-[1rem]">
          <div className="w-full h-full flex flex-col items-center justify-center lg:items-start lg:justify-start">
            <span className="text-xl  text-center mt-5 mb-4 lg:mb-0 lg:text-left lg:text-xl font-pt text-primary font-semibold lg:mt-[4rem]  w-full">
              A NEW WAY TO STUDY
            </span>

            <h1 className="text-3xl text-center mt-2 mb-7 lg:mb-0 lg:text-left lg:text-5xl font-semibold font-pt lg:mt-[2rem] lg:leading-[3.5rem] w-full">
              Elevate your learning <br /> journey with <br /> smart pairings
            </h1>

            <p className="lg:mt-12 mt-5  lg:w-[90%] text-lg font-thin text-[#5A5A50] font-pt text-center leading-9 lg:text-left">
              Embark on a transformative learning experience with our
              intelligent pairing system, designed to connect you with the
              perfect learning companions. Our system meticulously analyzes your
              learning preferences, strengths, and weaknesses to match you with
              individuals who complement your unique learning style.
            </p>

            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <button className="flex items-center space-x-3 justify-between mt-12 text-base font-pt bg-primary py-2 px-4 rounded-md w-auto font-bold text-white">
                <p className="font-bold">Join Now</p>
                <img src={arrow} className="w-4 h-4" />
              </button>
            </Link>
          </div>

          <div className=" w-full h-[600px]">
            <img src={landingBG} className="w-full h-full object-contain " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
