import React from "react";
import course from "../assets/courseImg.png";
import star from "../assets/star.svg";
import tut from "../assets/tutorImg.png";
import user from "../assets/users.svg";
import duration from "../assets/duration.svg";
import views from "../assets/views.svg";

const CourseCard = () => {
  return (
    <div className="w-[319px] h-[434px] flex flex-col rounded-md cursor-pointer">
      {/* IMAGE AREA */}
      <div className="w-full h-[300px] rounded-t-md overflow-hidden relative">
        <img src={course} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 flex items-center justify-start px-5 gap-10 bg-gradient-to-b from-transparent to-black/70 w-full h-[80px] ">
          <p className="bg-primary rounded-md text-white p-2 text-sm px-3">
            NGN 10,000
          </p>
          <div className="flex items-center justify-center gap-1">
            {[1, 2, 3, 4, 5].map((index) => (
              <img key={index} src={star} className="w-[15px] h-[15px]" />
            ))}
          </div>
        </div>
      </div>

      {/* CARD INFO AREA */}
      <div className="w-full h-[134px] bg-white rounded-b-md px-5">
        <h1 className="text-lg font-semibold mt-2">Intoduction to UI/UX</h1>

        <div className="flex items-center justify-between my-3 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-[25px] h-[25px]  rounded-full overflow-hidden ">
              <img src={tut} className="w-full h-full object-cover" />
            </div>
            <p className="text-xs text-black/70">James Olawole</p>
          </div>
          <p className="text-xs text-black/40">BEGINNER</p>
        </div>
        <hr />
        <div className="w-full mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={user} className="w-[15px] h-[15px]" />
            <p className="text-xs text-black/50">1500</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={duration} className="w-[15px] h-[15px]" />
            <p className="text-xs text-black/50">12h 28m</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={views} className="w-[15px] h-[15px]" />
            <p className="text-xs text-black/50">200</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
