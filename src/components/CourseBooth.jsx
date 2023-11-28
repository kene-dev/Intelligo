import React, { useEffect, useState } from "react";
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

  const handleJoinBooth = () => {
    const body = {
      url_for: "model_service",
      user_id: userDetails && userDetails.userData._id,
      course_id,
    };
    console.log(JSON.stringify(body));
    dispatch(joinStudyBooth(body));
  };

  useEffect(() => {
    if (joinBoothSuccess) {
      toast.success("joined successfully");
      setTimeout(() => {
        dispatch(resetJoinBooth());
      }, 1500);
    }
    if (joinBoothError) {
      toast.error(joinBoothMessage);
      setTimeout(() => {
        dispatch(resetJoinBooth());
      }, 1500);
    }

    if (joinBoothData) {
      setCurrentGroup(joinBoothData?.data?.data);
    }
  }, [joinBoothSuccess, joinBoothError, joinBoothData]);

  useEffect(() => {
    return () => {
      setCurrentGroup(null);
    };
  }, []);

  if (!userDetails?.userData?.scoringResult) {
    return (
      <div className="h-full">
        <div className="w-full h-[400px] bg-primary flex items-center rounded-lg">
          <img src={join} className="w-full h-full object-cover" />
          <div className="w-full flex flex-col gap-8 p-7">
            <h1 className="font-bold text-xl text-white font-pt">
              Studying just became more fun with
              <span className="p-1 bg-black rounded-md text-bold ">
                study groups
              </span>
            </h1>

            <p className="text-sm text-white/50 font-pt font-thin">
              To Join a study booth for this course, Please Go to the Study
              group nav!
            </p>

            <div
              onClick={() => navigate("/layout/groups")}
              className="bg-black text-white cursor-pointer text-sm font-pt font-bold px-5 py-2 w-max rounded-md"
            >
              Go to Study Group
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full">
      {currentGroup ? (
        <Booth channelName={currentGroup} />
      ) : (
        <div className="w-full h-full flex flex-col gap-5">
          <h1 className="text-3xl font-pt font-semibold">
            Hi {userDetails?.userData?.data?.firstName}
          </h1>
          <p>
            You are not a member of any study group yet? <br /> Click to
            <span
              onClick={handleJoinBooth}
              className="bg-primary p-2 px-3 rounded-md text-white cursor-pointer mx-1 leading-10"
            >
              {joinBoothLoading ? "Loading..." : " Join Group"}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default CourseBooth;
