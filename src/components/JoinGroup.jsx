import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import courseimg from "../assets/courseImg.png";
import tut from "../assets/tutorImg.png";
import { useSelector } from "react-redux";

const JoinGroup = () => {
  const { allCourses } = useSelector((state) => state.courses);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(allCourses);
  const [selectedCourses, setSelectedCourses] = useState(null);

  useEffect(() => {
    // Update filteredCourses based on searchTerm
    const filtered = searchTerm
      ? allCourses.filter((course) =>
          course.name.toLowerCase().includes(searchTerm)
        )
      : allCourses;

    setFilteredCourses(filtered);
  }, [searchTerm, allCourses]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <div className="w-full h-full flex items-start gap-7">
      <div className="w-[400px] flex flex-col gap-5 h-full bg-white rounded-md px-5 py-5 overflow-y-auto">
        <div className="w-full">
          <SearchBar
            onChange={handleSearch}
            placeholder={"Search Course"}
            width={"100%"}
          />
        </div>
        <ul className="w-full h-full flex flex-col gap-3">
          {filteredCourses.map((course) => (
            <li
              onClick={() => setSelectedCourses(course)}
              className="w-full h-[60px] rounded-md bg-[#d9d9d9c5] cursor-pointer hover:bg-secondary flex items-center justify-start gap-6 text-sm p-3"
              key={course._id}
            >
              <div className="w-[40px] h-[40px] rounded-full overflow-hidden shadow-md shadow-black/50 font-pt">
                <img src={courseimg} className="w-full h-full object-contain" />
              </div>
              {course.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full h-full overflow-y-auto">
        {selectedCourses && (
          <div className="flex flex-col gap-7">
            <div className="w-full h-[400px] rounded-md overflow-hidden">
              <img
                src={courseimg}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <h1 className="text-2xl font-pt font-semibold">
              {selectedCourses.name}
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur. Tincidunt ipsum metus
              laoreet sapien urna nisl. Pharetra malesuada quisque proin egestas
              morbi. Convallis nec imperdiet faucibus venenatis volutpat eget
              senectus. Diam varius nulla aliquam sed. Felis tristique mauris
              sodales sed in morbi eu ullamcorper senectus. Sit dolor massa
              aliquam molestie odio ac ipsum felis ipsum.
            </p>

            <div className="flex items-center gap-8">
              <img
                src={tut}
                className="w-[50px] h-[50px] rounded-full object-cover"
              />
              <p>{selectedCourses.tutor}</p>
            </div>

            <button
              className={`px-6 py-3 rounded-lg font-pt text-sm bg-primary w-max text-white mt-10`}
            >
              Join Group
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinGroup;
