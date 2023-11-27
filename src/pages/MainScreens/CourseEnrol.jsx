import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import courseImg from "../../assets/courseImg.png";
import tut from "../../assets/tutorImg.png";
import star from "../../assets/star.svg";
import CourseCard from "../../components/CourseCard";
import { getUserDetails, resetUserDeets } from "../../Redux/features/AuthSlice";
import { toast } from "react-toastify";
import {
  addToCourse,
  resetBeginCourse,
} from "../../Redux/features/BeginCourseSlice";

const CourseEnrol = () => {
  const { allCourses } = useSelector((state) => state.courses);
  const {
    userDetails,
    userDeetsSuccess,
    userDeetsLoading,
    userDeetsError,
    authMessage,
  } = useSelector((state) => state.auth);
  const {
    beginCourseMessage,
    beginCourseSuccess,
    beginCourseError,
    beginCourseLoading,
  } = useSelector((state) => state.beginCourse);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [cInfo, setCinfo] = useState([]);
  const [registered, setRegistered] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function doesArrayIncludeString(arrayOfStrings, stringToCheck) {
    return arrayOfStrings.includes(stringToCheck);
  }

  const handleBeginCourse = () => {
    const body = { courseId: id };
    dispatch(addToCourse(body));
  };

  const handleCourseCard = () => {
    doesArrayIncludeString(cInfo, id)
      ? navigate(`/layout/singleCourse/${id}`)
      : navigate(`/layout/courseEnrol/${id}`);
  };

  useEffect(() => {
    const findObjectById = () => {
      const newCourse = allCourses.find((item) => item._id === id);
      setCurrentCourse(newCourse);
    };
    findObjectById();
  }, [id, allCourses]); // This will re-run when either `id` or `allCourses` changes

  useEffect(() => {
    if (beginCourseSuccess) {
      dispatch(getUserDetails());
      setRegistered(true);
      toast.success(beginCourseMessage);
      setTimeout(() => {
        dispatch(resetBeginCourse());
      }, 1000);
    }

    if (beginCourseError) {
      toast.error(beginCourseMessage);
      setTimeout(() => {
        dispatch(resetBeginCourse());
      }, 1500);
    }

    if (userDeetsSuccess) {
      setCinfo(userDetails.userData.courseInfo);
      setTimeout(() => {
        dispatch(resetUserDeets());
      }, 1500);
    }
    if (userDeetsError) {
      toast.error(authMessage);
      setTimeout(() => {
        dispatch(resetUserDeets());
      }, 1500);
    }
  }, [
    beginCourseMessage,
    beginCourseSuccess,
    beginCourseError,
    userDeetsSuccess,
    userDeetsLoading,
    userDeetsError,
    authMessage,
  ]);

  return (
    <div className="w-full h-full flex flex-col gap-14 px-12 mt-10 mb-5">
      <button
        onClick={() => navigate("/layout/home")}
        className={`px-6 py-3 rounded-lg font-pt flex items-center gap-4 text-sm bg-primary w-max text-white mt-0`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="7"
          height="14"
          viewBox="0 0 7 14"
          fill="none"
        >
          <path
            d="M6.81189 12.8196C6.87198 12.8864 6.91895 12.965 6.95014 13.0508C6.98132 13.1367 6.99609 13.2282 6.99362 13.32C6.99114 13.4119 6.97147 13.5023 6.93572 13.5862C6.89996 13.6701 6.84883 13.7457 6.78525 13.8088C6.72166 13.872 6.64686 13.9213 6.56511 13.954C6.48337 13.9868 6.39629 14.0023 6.30883 13.9997C6.22138 13.9971 6.13527 13.9765 6.05542 13.9389C5.97557 13.9013 5.90355 13.8476 5.84346 13.7809L0.182058 7.48455C0.065143 7.35466 -5.95989e-07 7.18269 -6.11616e-07 7.00393C-6.27243e-07 6.82518 0.0651429 6.65321 0.182058 6.52331L5.84345 0.226309C5.90315 0.158057 5.97516 0.102942 6.0553 0.0641671C6.13544 0.0253927 6.22212 0.00373146 6.3103 0.000440697C6.39848 -0.00285006 6.48641 0.0122964 6.56897 0.044999C6.65153 0.0777016 6.72708 0.127308 6.79124 0.190939C6.85539 0.25457 6.90687 0.330956 6.94268 0.41566C6.97849 0.500364 6.99792 0.591698 6.99984 0.684357C7.00176 0.777015 6.98614 0.869151 6.95387 0.955412C6.92161 1.04167 6.87334 1.12034 6.81189 1.18684L1.58209 7.00393L6.81189 12.8196Z"
            fill="white"
          />
        </svg>
        Go back
      </button>

      <div className="w-full h-[400px] rounded-md overflow-hidden">
        <img
          src={courseImg}
          className="w-full h-full object-cover aspect-auto object-center"
        />
      </div>

      <div className="w-full flex items-start gap-7 mb-7 font-pt">
        <div className="w-full flex flex-col gap-9 ">
          <h1 className="text-3xl font-pt font-semibold">
            {currentCourse?.name}
          </h1>
          <p className="w-2/3 text-lg">
            Lorem ipsum dolor sit amet consectetur. Tincidunt ipsum metus
            laoreet sapien urna nisl. Pharetra malesuada quisque proin egestas
            morbi. Convallis nec imperdiet faucibus venenatis volutpat eget
            senectus. Diam varius nulla aliquam sed. Felis tristique mauris
            sodales sed in morbi eu ullamcorper senectus. Sit dolor massa
            aliquam molestie odio ac ipsum felis ipsum.
          </p>

          <div className="flex items-center w-full gap-6">
            <div className="w-[45px] h-[45px]  rounded-full overflow-hidden ">
              <img src={tut} className="w-full h-full object-cover" />
            </div>

            <p className="text-base">{currentCourse?.tutor}</p>
          </div>

          <div className="flex flex-col gap-2">
            {registered ? (
              <button
                onClick={handleCourseCard}
                className={`px-6 py-3 rounded-lg font-pt text-sm bg-primary w-max text-white mt-10`}
              >
                Start Course
              </button>
            ) : (
              <button
                onClick={handleBeginCourse}
                className={`px-6 py-3 rounded-lg font-pt text-sm bg-primary w-max text-white mt-10`}
              >
                {beginCourseLoading || userDeetsLoading
                  ? "Preparing Course"
                  : "Begin Course"}
              </button>
            )}

            <p className="font-pt text-sm text-black/60">
              <span className="font-semibold text-black">1,500</span> already
              enrolled
            </p>
          </div>
        </div>

        <div className="w-[484px] h-[425px] flex flex-col gap-6 bg-white rounded-md shadow shadow-black/10 p-10 ">
          <p className="font-pt">Rating</p>
          <div className="flex items-center gap-3">
            {[1, 2, 3, 4, 5].map((index) => (
              <img key={index} src={star} className="w-[15px] h-[15px]" />
            ))}
            <p className="font-pt ">5.0</p>
          </div>

          <div className="flex flex-col items-start gap-3">
            <p className="font-pt text-sm ">Experience</p>
            <p className="font-pt font-semibold">Beginner Level</p>
          </div>

          <div className="flex flex-col items-start gap-3">
            <p className="font-pt text-sm ">Duration</p>
            <p className="font-pt font-semibold">12h 28m</p>
          </div>

          <div className="flex flex-col items-start gap-3">
            <p className="font-pt text-sm ">Modules</p>
            <p className="font-pt font-semibold">20</p>
          </div>
        </div>
      </div>

      <div className="w-full h-full font-pt">
        <h1 className="font-semibold text-2xl">Similar Courses</h1>

        <div className="max-w-[2200px] h-max py-5 flex flex-wrap  items-center justify-center xl:justify-start lg:gap-5">
          {allCourses ? (
            allCourses.map((item, index) => (
              <div key={item._id} className="">
                <CourseCard
                  id={item._id}
                  time={item.duration}
                  tutor={item.tutor}
                  name={item.name}
                />
              </div>
            ))
          ) : (
            <p>No courses Found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseEnrol;
