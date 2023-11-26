import React from "react";

const CourseModules = ({ title, time, number, img }) => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center gap-3">
        <p className="w-6 h-6 border-[1px] text-xs border-primary rounded-full flex items-center justify-center">
          {number}
        </p>
        <p className="text-xs">{title}</p>
      </div>
      <div className="flex items-center gap-3">
        <p className="w-8 h-9 text-xs rounded-full flex items-center justify-center">
          {time}
        </p>
        <img src={img} className="w-3 h-3 object-contain" />
      </div>
    </div>
  );
};

export default CourseModules;
