import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import { OnboardForm1, OnboardForm2, OnboardForm3 } from "./components";

const Onboarding = () => {
  const [currentView, setCurrentView] = useState("welcome");

  // Render different views based on the current state
  const renderView = () => {
    switch (currentView) {
      case "form1":
        return <OnboardForm1 />;
      case "form2":
        return <OnboardForm2 />;
      case "form3":
        return <OnboardForm3 />;
      default:
        return (
          <div className="w-full h-full flex items-center justify-start ">
            <p className="text-9xl text-black font-bold text-left leading-relaxed">
              Now Let's <br /> Get To <br /> Know You
            </p>
          </div>
        );
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setCurrentView("form1");
    }, 2000);
  }, []);

  return (
    <div className="w-full h-screen flex items-start">
      <div className="w-full h-full p-6 flex flex-col gap-12">
        <img src={logo} className="bg-contain  w-[120px]" />
        {currentView !== "welcome" && (
          <div className="flex flex-col gap-2 p-2">
            <div className="w-max flex items-center gap-3">
              <div
                className={`h-[7px] w-[38px] ${
                  currentView !== "form1" ? "bg-black/20" : "bg-[#800080]"
                }  rounded-lg`}
              ></div>
              <div className="h-[7px] w-[38px] bg-black/20 rounded-lg "></div>
              <div className="h-[7px] w-[38px] bg-black/20 rounded-lg "></div>
              <div className="h-[7px] w-[38px] bg-black/20 rounded-lg "></div>
            </div>
            <p className="text-black/50 text-sm w-max font-semibold">1 of 4</p>
          </div>
        )}

        {/* MAIN CARD SECTION STARTS */}
        {renderView()}
        {/* MAIN CARD SECTION ENDS */}
      </div>

      {/* ONBOARDING IMAGE DISPLAY STARTS */}
      <div className="w-[800px] h-full onboardBG relative rounded-tl-lg rounded-bl-lg overflow-hidden">
        <div className="w-full h-full absolute bg-black/30"></div>
      </div>
      {/* ONBOARDING IMAGE DISPLAY ENDS */}
    </div>
  );
};

export default Onboarding;
