import React, { useEffect, useState } from "react";
import check from "../assets/check.svg";

const Kyc = ({ title, text, selected }) => {
  return (
    <div
      className={`h-full flex flex-col gap-12 w-full ${
        selected ? "bg-black" : "bg-white"
      } p-4 shadow-md shadow-black/30 rounded-md transition-all duration-200 border-t-2 border-[#800080] cursor-pointer`}
    >
      <div className="w-full flex items-center justify-end">
        {selected && (
          <div className="w-max h-max bg-white rounded-md">
            {" "}
            <img src={check} className="w-[23px] h-[23px]" />{" "}
          </div>
        )}
      </div>

      <div className="flex flex-col w-full gap-3">
        <h1
          className={`text-lg font-semibold ${
            selected ? "text-white" : "text-[#800080]"
          } `}
        >
          {title}
        </h1>
        <p
          className={`text-xs leading-relaxed ${
            selected ? "text-white/50" : "text-black/50"
          } `}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default Kyc;
