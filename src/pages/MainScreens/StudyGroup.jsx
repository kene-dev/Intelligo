import React from "react";
import grpImg from "../../assets/studyGrp.svg";
import { useSelector } from "react-redux";
import Booth from "../../components/Booth";

const StudyGroup = () => {
  const { userDetails } = useSelector((state) => state.auth);

  if (!userDetails?.userData?.scoringResult) {
    return (
      <div className="flex items-center justify-start w-full h-full pt-[8rem]">
        <div className="w-full h-full flex items-start justify-center">
          <img src={grpImg} className="object-contain w-[500px]" />
        </div>
        <div className="w-full h-full relative">
          <p className="text-3xl font-pt font-semibold absolute top-0 -left-20 leading-10">
            Take a
            <span className="bg-primary p-2 rounded-md text-white cursor-pointer">
              Grouping Test
            </span>
            to enable us find <br /> your perfect study group.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen ">
      <Booth />
    </div>
  );
};

export default StudyGroup;
