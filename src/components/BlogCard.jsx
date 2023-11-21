import React from "react";
import blog from "../assets/blogImg.png";
import tut from "../assets/tutorImg.png";
import user from "../assets/users.svg";
import iconic from "../assets/iconic.svg";
import ig from "../assets/ig.svg";
import fb from "../assets/fb.svg";
import twt from "../assets/twt.svg";

const BlogCard = () => {
  return (
    <div className="w-[400px] h-[434px] flex flex-col rounded-md cursor-pointer">
      {/* IMAGE AREA */}
      <div className="w-full h-[300px] rounded-t-md overflow-hidden relative">
        <img src={blog} className="w-full h-full object-cover" />
      </div>

      {/* CARD INFO AREA */}
      <div className="w-full h-[134px] bg-white rounded-b-md px-5 flex flex-col gap-4 pt-4">
        <div className=" w-full flex items-center gap-8">
          <p className="text-xs text-black/40"> August 20, 2020 </p>
          <p className="text-xs text-black/40">4 Comments</p>
        </div>

        <p className="text-sm text-black">
          Transitioning to a new career in this new generation is easy .
        </p>

        <p className="text-primary text-xs">READ MORE...</p>
      </div>
    </div>
  );
};

export default BlogCard;
