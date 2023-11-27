import React from "react";
import arrow from "../assets/forward.svg";
import star from "../assets/star.svg";
import pic1 from "../assets/pic1.svg";
import pic2 from "../assets/pic2.svg";
import pic3 from "../assets/pic3.svg";
import pic4 from "../assets/pic4.svg";
import landingBG from "../assets/landingBG.png";
import { Link } from "react-scroll";
import Navmenu from "../components/Navmenu";
import Inputs from "../components/Inputs";

const LandingPage = () => {
  return (
    <div className="font-pt">
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

      <div className="py-5 px-4 w-full flex items-center justify-center my-28">
        <div className="flex justify-between  w-[70%] items-center">
          <div className="text-black text-sm w-full px-4">
            <p className="text-xl">
              Trusted by over
              <span className="text-primary font-semibold"> 12k Users </span>
            </p>
            <p className="text-xl">
              worldwide since
              <span className="text-primary font-semibold"> 2022</span>
            </p>
          </div>

          <div className="flex items-center justify-between w-full gap-6 h-[166px] bg-[#F4F4F4] px-7 rounded-xl">
            <div className="flex flex-col gap-3 items-start">
              <div className="text-black font-bold text-xl mr-2">5.0</div>
              <div className="flex items-center justify-center gap-1">
                {[1, 2, 3, 4, 5].map((index) => (
                  <img key={index} src={star} className="w-[15px] h-[15px]" />
                ))}
              </div>
              <div className="text-gray-600 text-sm">20,000+ courses taken</div>
            </div>

            <div className="text-black text-sm flex flex-col items-center">
              <p className="text-4xl font-semibold  ">200+</p>{" "}
              <span className="text-xs">tutors</span>
            </div>

            <div className="text-black text-sm flex flex-col items-center">
              <p className="text-4xl font-semibold  ">300+</p>{" "}
              <span className="text-xs">Courses</span>
            </div>
          </div>
        </div>
      </div>

      <div id="why" className="w-full h-[458px] px-12 flex items-center my-10">
        <div className="w-[30%]">
          <h1 className="text-5xl font-semibold">Why</h1>
          <h1 className="text-5xl font-semibold">Choose</h1>
          <h1 className="text-primary text-5xl font-semibold">Us</h1>
        </div>

        <div className="w-full h-full flex items-start justify-end gap-6">
          <div className="w-[159px] h-full">
            <img src={pic1} className=" w-full h-full object-cover" />
          </div>
          <div className="w-[159px] h-full">
            <img src={pic2} className=" w-full h-full object-cover" />
          </div>
          <div className="w-[159px] h-full">
            <img src={pic3} className=" w-full h-full object-cover" />
          </div>
          <div className="w-[341px] h-full">
            <img src={pic4} className=" w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div id="contact" className="w-full px-12 h-full mt-28 mb-20">
        <h1 className="text-center text-5xl font-semibold ">
          Contact <span className="text-primary">Us</span>
        </h1>

        <div className="h-[591px] w-full flex items-start mt-28 font-pt">
          <div className="w-full h-full flex flex-col gap-5 rounded-l-md bg-[#F4F4F4] p-12">
            <h1 className="font-bold text-2xl my-5 text-center">
              Write a Message
            </h1>
            <div className="w-full flex items-center gap-4">
              <input
                type="text"
                placeholder="Full name"
                className="h-[55px] appearance-none bg-[#d9d9d9] w-full rounded-md p-3 focus:outline-primary focus:outline-[.5px]"
              />
              <input
                type="text"
                placeholder="Email address"
                className="h-[55px] appearance-none bg-[#d9d9d9] w-full rounded-md p-3 focus:outline-primary focus:outline-[.5px]"
              />
            </div>
            <div className="w-full flex items-center gap-4">
              <input
                type="text"
                placeholder="Phone number"
                className="h-[55px] appearance-none bg-[#d9d9d9] w-full rounded-md p-3 focus:outline-primary focus:outline-[.5px]"
              />

              <input
                type="text"
                placeholder="Subject"
                className="h-[55px] appearance-none bg-[#d9d9d9] w-full rounded-md p-3 focus:outline-primary focus:outline-[.5px]"
              />
            </div>

            <textarea
              placeholder="write a message"
              className="h-[270px] bg-[#d9d9d9] w-full rounded-md p-3 focus:outline-primary focus:outline-[.5px]"
            />

            <button className="flex items-center gap-3 place-self-center justify-between mt-3 text-base font-pt bg-primary py-2 px-4 rounded-md w-max font-bold text-white ">
              <p className="font-bold">Send a message</p>
            </button>
          </div>
          <div className="w-[608px] h-full flex flex-col rounded-r-md bg-primary p-10">
            <h1>Get in Touch</h1>
            <p>
              You want to get in touch , contact us via our number or follow us
              on social media pages
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
