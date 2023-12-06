import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Booth from "./Booth";
import join from "../assets/joinBooth.png";
import { useNavigate } from "react-router-dom";
import {
  joinStudyBooth,
  resetJoinBooth,
} from "../Redux/features/JoinBoothSlice";
import { toast } from "react-toastify";

const CourseBooth = ({ groupId, course_id }) => {
  const { userDetails } = useSelector((state) => state.auth);
  const [currentGroup, setCurrentGroup] = useState(groupId);
  const {
    joinBoothLoading,
    joinBoothSuccess,
    joinBoothError,
    joinBoothMessage,
    joinBoothData,
  } = useSelector((state) => state.joinBooth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleJoinBooth = useCallback(() => {
    if (userDetails?.userData?._id && course_id) {
      const body = {
        url_for: "model_service",
        user_id: userDetails.userData._id,
        course_id,
      };
      dispatch(joinStudyBooth(body));
    }
  }, [dispatch, userDetails?.userData?._id, course_id]); // Add dependencies

  useEffect(() => {
    if (joinBoothSuccess) {
      toast.success("Joined successfully");
      setCurrentGroup(joinBoothData?.data?.data);
      console.log("JOIN DATABASE", joinBoothData.data.data);
      const timer = setTimeout(() => {
        dispatch(resetJoinBooth());
      }, 1500);
      return () => clearTimeout(timer); // Clear timeout on cleanup
    }

    if (joinBoothError) {
      toast.error(joinBoothMessage);
      const timer = setTimeout(() => {
        dispatch(resetJoinBooth());
      }, 1500);
      return () => clearTimeout(timer); // Clear timeout on cleanup
    }

    if (joinBoothData) {
    }
  }, [
    dispatch,
    joinBoothSuccess,
    joinBoothError,
    joinBoothMessage,
    joinBoothData,
  ]);

  const goToStudyGroup = useCallback(
    () => navigate("/layout/groups"),
    [navigate]
  ); // Use useCallback

  useEffect(() => {
    console.log("COURSE BOOTH CURRENT GROUP " + currentGroup);
  }, []);

  if (!userDetails?.userData?.scoringResult) {
    return (
      <div role="main" className="h-full">
        <div className="w-full h-[400px] bg-primary flex items-center rounded-lg">
          <img
            src={join}
            alt="Join Booth"
            className="w-full h-full object-cover"
          />
          <div className="w-full flex flex-col gap-8 p-7">
            <h1 className="font-bold text-xl text-white font-pt">
              Studying just became more fun with
              <span className="p-1 bg-black rounded-md text-bold ">
                study groups
              </span>
            </h1>
            <p className="text-sm text-white/50 font-pt font-thin">
              To join a study booth for this course, please go to the Study
              group nav!
            </p>
            <button
              onClick={goToStudyGroup}
              className="bg-black text-white cursor-pointer text-sm font-pt font-bold px-5 py-2 w-max rounded-md"
            >
              Go to Study Group
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div role="main" className="h-full">
      {currentGroup === "No group found for the specified course" ? (
        <div className="w-full h-full flex flex-col gap-5">
          <h1 className="text-3xl font-pt font-semibold">
            Hi {userDetails?.userData?.data?.firstName}
          </h1>
          <p>
            You are not a member of this study group yet? <br />
            Click to
            <span
              onClick={handleJoinBooth}
              className="bg-primary p-2 px-3 rounded-md text-white cursor-pointer mx-1 leading-10"
              role="button" // Add role for accessibility
              tabIndex={0} // Make it focusable
            >
              {joinBoothLoading ? "Loading..." : "Join Group"}
            </span>
          </p>
        </div>
      ) : (
        <Booth channelName={currentGroup} />
      )}
    </div>
  );
};

export default CourseBooth;
