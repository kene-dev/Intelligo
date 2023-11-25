import React from "react";
import CourseCard from "../../components/CourseCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Progress = () => {
  const navigate = useNavigate();
  const { allCourses } = useSelector((state) => state.courses);

  return (
    <div className="w-full min-h-full">
      {/* RECOMMENDED SECTION*/}
      <div className="w-full h-max py-5 flex flex-wrap  items-center justify-start px-12 gap-5 mt-10">
        {allCourses ? (
          allCourses.map((item, index) => (
            <CourseCard
              key={item._id}
              id={item._id}
              time={item.duration}
              tutor={item.tutor}
              name={item.name}
            />
          ))
        ) : (
          <p>No courses Found</p>
        )}
      </div>
    </div>
  );
};

export default Progress;
