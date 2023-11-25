import React, { useEffect } from "react";
import homeB from "../../assets/homeBanner.png";
import news from "../../assets/newletter.png";
import CourseCard from "../../components/CourseCard";
import TutorCard from "../../components/TutorCard";
import BlogCard from "../../components/BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { getCourses, resetCourses } from "../../Redux/features/CoursesSlice";

const Home = () => {
  const { allCourses, allCoursesSuccess, allCoursesError } = useSelector(
    (state) => state.courses
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourses());
  }, []);

  useEffect(() => {
    if (allCoursesSuccess) {
      setTimeout(() => {
        dispatch(resetCourses());
      }, 1000);
    }

    if (allCoursesError) {
      setTimeout(() => {
        dispatch(resetCourses());
      }, 1500);
    }
  }, [allCoursesSuccess, allCoursesError]);
  return (
    <div className="w-full h-full flex flex-col gap-14">
      {/* BANNER SECTION */}
      <div className=" mt-16 px-12">
        <div className="w-full h-[200px] heroBG flex items-center justify-between rounded-md">
          <div className="w-full flex flex-col gap-4 items-start px-16">
            <h1 className="font-bold text-5xl text-black">Hi, Emmanuel</h1>
            <p className="text-black/70 text-xl">
              Ready to start your day with some learning?
            </p>
          </div>

          <div className="w-full flex items-center justify-center">
            <img src={homeB} className="object-contain  h-[260px] -mt-16" />
          </div>
        </div>
      </div>

      {/* BANNER SECTION */}
      <div className="w-full flex flex-col px-12">
        <h1 className="text-black font-semibold text-3xl">
          <span className="p-1 bg-secondary rounded-md">Recommended</span> for
          you
        </h1>
        <p className="text-black/50 text-sm">Based on your interests</p>
      </div>

      {/* RECOMMENDED SECTION*/}
      <div className="max-w-[2200px] h-max py-5 flex flex-wrap  items-center justify-center xl:justify-start px-12 lg:gap-5">
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

      <div className="w-full h-max py-5 bg-secondary flex flex-col gap-5">
        <h1 className="text-3xl font-semibold px-12 my-16">
          <span className="bg-white p-1 rounded-md">Our Top rated </span>
          Instructors
        </h1>
        <div className="w-full px-12 flex flex-wrap items-center justify-center gap-5 pb-20">
          {[1, 2, 3, 4].map((index) => (
            <TutorCard />
          ))}
        </div>
      </div>

      {/* BLOG SECTION*/}
      <div className="w-full h-max py-5 flex items-center justify-center flex-wrap px-12 gap-16 mb-10 ">
        <div className="w-full flex items-center justify-between ">
          <h1 className="text-3xl font-semibold my-16">
            <span className="bg-secondary p-1 rounded-md">Read Our </span>
            Blogs
          </h1>

          <p className="px-6 py-2 text-sm bg-primary text-white rounded-md">
            View All
          </p>
        </div>

        {[1, 2, 3].map((index) => (
          <BlogCard />
        ))}
      </div>

      {/* NEWSLETTER SECTION */}
      <div className="w-full px-12 h-[319px] mb-28">
        <div className="w-full h-full flex items-center justify-between bg-primary rounded-md ">
          {/* WRITE-UP SECTION */}
          <div className="w-full flex flex-col items-start justify-center gap-9 pl-14">
            <h1 className="text-3xl text-white">Subscribe Our Newsletters</h1>

            <p className="text-sm text-white">
              Lorem ipsum dolor sit amet consectetur. Aenean gravida dignissim
              vulputate et. Integer libero nibh aliquam tempor consectetur.
            </p>

            <div className="flex items-center">
              <input
                placeholder="Enter your Email Address"
                className="w-[396px] h-[50px] p-3 bg-white appearance-none focus:outline-none rounded-l-md"
              />
              <button className="bg-black text-white w-max h-[50px] px-7 rounded-r-md ">
                Subscribe
              </button>
            </div>
          </div>

          {/* NEWSLETTER IMAGE DIV */}
          <div className="w-full flex item-center justify-end">
            <img src={news} className="w-[350px] h-[280px] object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
