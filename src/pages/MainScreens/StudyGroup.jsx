import React, { useEffect, useState } from "react";
import grpImg from "../../assets/studyGrp.svg";
import { useDispatch, useSelector } from "react-redux";
import Booth from "../../components/Booth";
import JoinGroup from "../../components/JoinGroup";
import BoothEnrol from "../../components/BoothEnrol";
import { getUserDetails } from "../../Redux/features/AuthSlice";
import { toast } from "react-toastify";
import { resetIQform } from "../../Redux/features/IQformSlice";

const StudyGroup = () => {
  const { userDetails } = useSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState("allGroups");
  const [joinBooth, setJoinBooth] = useState(false);
  const dispatch = useDispatch();
  const { IQformSuccess, IQformError, IQScoringSuccess } = useSelector(
    (state) => state.formstore
  );

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    if (IQformSuccess) {
      setTimeout(() => {
        dispatch(resetIQform());
      }, 1500);
    }
    if (IQScoringSuccess) {
      dispatch(getUserDetails());
      toast.success("Test Submitted Successfully");
      setJoinBooth(false);
      setTimeout(() => {
        dispatch(resetIQform());
      }, 1500);
    }
    if (IQformError) {
      setTimeout(() => {
        dispatch(resetIQform());
      }, 1500);
    }
  }, [IQformSuccess, IQformError, IQScoringSuccess]);

  const renderTabContent = () => {
    switch (activeTab) {
      case "joinGroup":
        return (
          <div className="h-full">
            <JoinGroup />
          </div>
        );
      case "allGroups":
        return (
          <div className="h-full">
            {userDetails?.userData.chat.groups.length > 0 ? (
              <Booth />
            ) : (
              <div className="flex items-center justify-start w-full h-full pt-[8rem]">
                <div className="w-full h-full flex items-start justify-center">
                  <img src={grpImg} className="object-contain w-[500px]" />
                </div>
                <div className="w-full h-full relative">
                  <p className="text-3xl font-pt font-semibold absolute top-0 -left-20 leading-10">
                    Please
                    <span
                      onClick={() => handleTabClick("joinGroup")}
                      className="bg-primary p-2 px-3 rounded-md text-white cursor-pointer mx-1"
                    >
                      Join Group
                    </span>
                    and begin your unique <br /> collaborative learning
                    experience.
                  </p>
                </div>
              </div>
            )}
          </div>
        );
      default:
        return <p>Page not found</p>;
    }
  };

  if (!userDetails?.userData?.scoringResult) {
    return (
      <div className="flex items-center justify-start w-full min-h-full mb-28 pt-[8rem]">
        <div className="w-full h-full flex items-start justify-center">
          <img src={grpImg} className="object-contain w-[500px]" />
        </div>
        <div className="w-full h-full relative">
          <p className="text-3xl font-pt font-semibold absolute top-0 -left-20 leading-10">
            Take a
            <span
              onClick={() => setJoinBooth(true)}
              className="bg-primary  p-2 rounded-md text-white cursor-pointer"
            >
              Grouping Test
            </span>
            to enable us find <br /> your perfect study group.
          </p>
        </div>

        {joinBooth && <BoothEnrol joinBooth={joinBooth} />}
      </div>
    );
  }

  return (
    <div className="w-full full-height-minus-170 overflow-auto px-12 mb-10">
      <div className="flex justify-start text-sm py-6 bg-transparent">
        <button
          className={`px-6 py-3 rounded-l-lg ${
            activeTab === "joinGroup" ? "bg-primary text-white" : "bg-black/20"
          }`}
          onClick={() => handleTabClick("joinGroup")}
        >
          Join a Group
        </button>
        <button
          className={`px-6 py-3 rounded-r-lg ${
            activeTab === "allGroups" ? "bg-primary text-white" : "bg-black/20"
          }`}
          onClick={() => handleTabClick("allGroups")}
        >
          All Groups
        </button>
      </div>

      <div className="h-full">{renderTabContent()}</div>
    </div>
  );
};

export default StudyGroup;
