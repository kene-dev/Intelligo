import React, { useEffect, useRef, useState } from "react";
import forward from "../../assets/forward.svg";
import cup from "../../assets/cup.svg";
import video from "../../assets/videoFeed.png";
import tut from "../../assets/tutorImg.png";
import BoothEnrol from "../../components/BoothEnrol";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getSingleCourse } from "../../Redux/features/CoursesSlice";
import YouTube from "react-youtube";
import { toast } from "react-toastify";
import CourseModules from "../../components/CourseModules";
import CourseBooth from "../../components/CourseBooth";
import { resetJoinBooth } from "../../Redux/features/JoinBoothSlice";
import {
  getCourseGroup,
  resetCourseGroup,
} from "../../Redux/features/CourseGroupSlice";

const SingleCourse = () => {
  const [active, setActive] = useState("overview");
  const { singleCourse, allCoursesLoading } = useSelector(
    (state) => state.courses
  );

  const {
    joinBoothLoading,
    joinBoothSuccess,
    joinBoothError,
    joinBoothMessage,
  } = useSelector((state) => state.joinBooth);

  const {
    courseGroupLoading,
    courseGroupSuccess,
    courseGroupError,
    courseGroupMessage,
    courseGroupData,
  } = useSelector((state) => state.joinBooth);

  const [videos, setVideos] = useState(
    singleCourse ? singleCourse.modules[0].videoLink : null
  );
  const params = useParams();
  const dispatch = useDispatch();
  const playerRef = useRef(null);
  const location = useLocation();
  const [currentGroup, setCurrentGroup] = useState(null);

  const opts = {
    height: "624",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  useEffect(() => {
    dispatch(getCourseGroup(params.id));
    dispatch(getSingleCourse(params.id));
    const handleBeforeUnload = async () => {
      const currentTime = await playerRef.current.getCurrentTime();
      const duration = await playerRef.current.getDuration();

      // Check if the user has watched less than 95% of the video (adjust as needed)
      if (currentTime / duration < 0.95) {
        const confirmationMessage = "your course Progress has been saved.";
        return toast.info(confirmationMessage);
      }
    };

    return () => {
      handleBeforeUnload();
    };
  }, []);

  useEffect(() => {
    if (courseGroupSuccess) {
      toast.success(courseGroupMessage);
      setTimeout(() => {
        dispatch(resetCourseGroup());
      }, 1500);
    }
    if (courseGroupError) {
      toast.error(courseGroupMessage);
      setTimeout(() => {
        dispatch(resetCourseGroup());
      }, 1500);
    }
    if (courseGroupData) {
      setCurrentGroup(courseGroupData);
    }
  }, [courseGroupSuccess, courseGroupError, courseGroupData]);

  const renderTabContent = () => {
    switch (active) {
      case "overview":
        return (
          <div className="w-full h-[500px] flex items-start gap-5">
            <p
              style={{ whiteSpace: "break-spaces" }}
              className="w-full xl:w-[80%] text-black/50"
            >
              {singleCourse ? singleCourse.overview : "Video Description"}
            </p>

            <div className="w-[512px] h-[350px] flex flex-col gap-6 bg-secondary/20 rounded-md p-7">
              <h1 className="font-bold font-pt text-xl">About Instructor</h1>
              <div className="flex items-center gap-8">
                <img
                  src={tut}
                  className="w-14 h-14 object-contain rounded-full"
                />
                <div className="flex flex-col gap-2">
                  <h1 className="font-semibold font-pt text-base">
                    {singleCourse ? singleCourse.tutor : "Tutor"}
                  </h1>
                  <p className="font-thin font-pt text-xs">Instructor</p>
                </div>
              </div>

              <p className="w-full text-black/50 text-sm">
                adipisicing elit. Incidunt fugiat maxime blanditiis inventore
                corrupti placeat ad voluptate nemo vitae in, pariatur a libero
                alias architecto. Ipsa consequatur enim modi dicta. Non ipsum
                sunt doloremque dolor ab omnis autem? Suscipit ratione ad
                officia perferendis pariatur aliquam corporis architecto at
                quisquam neque.
              </p>
            </div>
          </div>
        );
      case "booth":
        return (
          <div className="w-full h-[500px]">
            <CourseBooth groupId={currentGroup} course_id={params.id} />
          </div>
        );
      default:
        return <p>Page not found</p>;
    }
  };

  const onPause = (event) => {
    const currentTime = playerRef.current.getCurrentTime();
    const videoDuration = playerRef.current.getDuration();
    console.log("Current time:", currentTime);
    console.log("Duration time:", videoDuration);
    // You can now use the `currentTime` value as needed
  };

  if (allCoursesLoading) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <h1 className="text-3xl font-pt font-bold h-full">
          Fetching Course Data...
        </h1>
      </div>
    );
  }
  return (
    <div className="w-full min-h-screen flex items-start gap-11 mt-8 px-12 pb-8">
      <div className="w-full h-full bg-white rounded-lg font-pt">
        {/* COURSE TITLE SECTION */}
        <div className="w-full h-max p-8 flex items-start gap-7">
          <div className="flex flex-col w-max gap-2">
            <h1 className="text-4xl font-bold font-pt">
              2. Fundamentals of UI UX Design{" "}
            </h1>
            <div className="w-full flex items-center gap-4">
              <p className="w-max h-max text-sm border-r-2 text-black/50 font-semibold border-black/30 px-2">
                James Olawole
              </p>
              <p className="w-max h-max text-sm text-primary font-thin">
                Ui/Ux Design Specialization
              </p>
            </div>
          </div>
        </div>

        {/* VIDEO PLAYER SECTION */}
        <div className="w-full h-[624px] rounded-lg overflow-hidden">
          {/* <img src={video} className="w-full h-full object-cover " /> */}
          <YouTube
            videoId="N6BghzuFLIg"
            title={"Oblivion"}
            opts={opts}
            onPause={onPause}
            onReady={(event) => {
              playerRef.current = event.target;
              event.target.playVideo(); // Example: Auto-play the video when ready
            }}
          />
        </div>
        {/* VIDEO PLAYER SECTION */}

        {/* VIDEO DESCRIPTION SECTION */}
        <div className="w-full flex flex-col gap-12 mt-3 p-10">
          <div className="w-full flex items-center gap-6">
            <p
              onClick={() => setActive("overview")}
              className={`font-semibold cursor-pointer   text-black/30 text-sm font-pt ${
                active === "overview"
                  ? "bord"
                  : "border-b-[3px] border-transparent"
              } border-primary`}
            >
              OVERVIEW
            </p>
            <p
              onClick={() => setActive("booth")}
              className={`text-black/30 cursor-pointer text-sm font-pt ${
                active === "booth"
                  ? "bord"
                  : "border-b-[3px] border-transparent"
              } flex items-center gap-3`}
            >
              STUDY BOOTH
              <span className="w-6 h-6 flex items-center justify-center p-3 rounded-full bg-primary text-white">
                3
              </span>
            </p>
          </div>

          {renderTabContent()}
          {/* <BoothEnrol /> */}
        </div>
        {/* VIDEO DESCRIPTIONSECTION */}
      </div>
      <div className="w-[500px] h-full flex flex-col gap-12">
        <div className="w-full rounded-md h-[500px] overflow-y-scroll bg-white p-5">
          <h1 className="font-bold font-pt">
            {singleCourse ? singleCourse.name : "Course Title"}
          </h1>
          <div className="w-full flex flex-col gap-2 mt-3">
            <div className="w-full flex items-center justify-between">
              <p className="text-xs text-black/50">1/10 COMPLETED</p>
              <img src={cup} className="w-3 h-3 object-contain" />
            </div>
            <div className="w-full h-[3px] rounded-xl bg-[#e2e2e2]">
              <div className="w-[10%] h-full rounded-l-xl bg-primary "></div>
            </div>
          </div>

          <div className="w-full h-full flex flex-col gap-3 mt-3">
            {singleCourse ? (
              singleCourse?.modules.map((item, index) => (
                <CourseModules
                  key={index}
                  number={index}
                  img={forward}
                  title={item.title}
                />
              ))
            ) : (
              <p>No course Modules Found</p>
            )}
          </div>
        </div>
        <div className="w-full rounded-md h-[500px] overflow-y-scroll bg-white p-5">
          <h1 className="font-bold font-pt">Ui/Ux Design Specialization</h1>
          <div className="w-full flex flex-col gap-2 mt-3">
            <div className="w-full flex items-center justify-between">
              <p className="text-xs text-black/50">1/10 COMPLETED</p>
              <img src={cup} className="w-3 h-3 object-contain" />
            </div>
            <div className="w-full h-[3px] rounded-xl bg-[#e2e2e2]">
              <div className="w-[10%] h-full rounded-l-xl bg-primary "></div>
            </div>
          </div>

          <div className="w-full h-full flex flex-col gap-3 mt-3">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <p className="w-6 h-6 border-[1px] text-xs border-primary rounded-full flex items-center justify-center">
                    1
                  </p>
                  <p className="text-xs">Introduction to UI UX Design</p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="w-8 h-9 text-xs rounded-full flex items-center justify-center">
                    03:00
                  </p>
                  <img src={forward} className="w-3 h-3 object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
