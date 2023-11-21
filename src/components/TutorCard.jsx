import React from "react";
import course from "../assets/courseImg.png";
import star from "../assets/star.svg";
import tut from "../assets/tutorImg.png";
import user from "../assets/users.svg";
import iconic from "../assets/iconic.svg";
import ig from "../assets/ig.svg";
import fb from "../assets/fb.svg";
import twt from "../assets/twt.svg";

const TutorCard = () => {
  return (
    <div className="w-[319px] h-[434px] flex flex-col rounded-md cursor-pointer">
      {/* IMAGE AREA */}
      <div className="w-full h-[300px] rounded-t-md overflow-hidden relative">
        <img src={tut} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 flex items-center justify-center px-5 gap-5 bg-gradient-to-b from-transparent to-black/70 w-full h-[80px] ">
          <div className="flex items-center justify-center gap-4">
            <div className="w-[20px] h-[20px] rounded-md flex items-center justify-center hover:bg-primary bg-white">
              <img src={ig} className="w-[15px] h-[15px]" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="w-[20px] h-[20px] rounded-md flex items-center justify-center bg-white">
              <img src={fb} className="w-[15px] h-[15px]" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="w-[20px] h-[20px] rounded-md flex items-center justify-center bg-white">
              <img src={twt} className="w-[15px] h-[15px]" />
            </div>
          </div>
        </div>
      </div>

      {/* CARD INFO AREA */}
      <div className="w-full h-[134px] bg-white rounded-b-md px-5">
        <h1 className="text-lg font-semibold mt-2 text-center">
          James Olawole
        </h1>
        <p className="text-center text-black/50 text-sm my-2">UI/UX Designer</p>

        <hr />

        <div className="w-full mt-4 flex items-center justify-center gap-8">
          <div className="flex items-center gap-2">
            <img src={user} className="w-[15px] h-[15px]" />
            <p className="text-xs text-black/50">20,000</p>
          </div>

          <div className="flex items-center gap-2">
            <img src={iconic} className="w-[15px] h-[15px]" />
            <p className="text-xs text-black/50">10 Courses</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
