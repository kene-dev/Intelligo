import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import {
  OnboardForm1,
  OnboardForm2,
  OnboardForm3,
  OnboardForm4,
} from "./components";

const Onboarding = () => {
  const [currentView, setCurrentView] = useState("welcome");

  const handleProceed = (option) => {
    setCurrentView(option);
  };

  // Render different views based on the currentView state
  const renderView = () => {
    switch (currentView) {
      case "form1":
        return <OnboardForm1 handleProceed={handleProceed} />;
      case "form2":
        return <OnboardForm2 handleProceed={handleProceed} />;
      case "form3":
        return <OnboardForm3 handleProceed={handleProceed} />;
      case "form4":
        return <OnboardForm4 handleProceed={handleProceed} />;
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

  // Render page number based on the currentView state
  const renderPageNumber = () => {
    let pageNumber;
    if (currentView === "form1") {
      pageNumber = "1";
    } else if (currentView === "form2") {
      pageNumber = "2";
    } else if (currentView === "form3") {
      pageNumber = "3";
    } else if (currentView === "form4") {
      pageNumber = "4";
    } else {
      pageNumber = "0";
    }

    return pageNumber;
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
                  currentView !== "form1" ? "bg-black/20" : "bg-primary"
                }  rounded-lg`}
              ></div>
              <div
                className={`h-[7px] w-[38px] ${
                  currentView !== "form2" ? "bg-black/20" : "bg-primary"
                }  rounded-lg`}
              ></div>
              <div
                className={`h-[7px] w-[38px] ${
                  currentView !== "form3" ? "bg-black/20" : "bg-primary"
                }  rounded-lg`}
              ></div>
              <div
                className={`h-[7px] w-[38px] ${
                  currentView !== "form4" ? "bg-black/20" : "bg-primary"
                }  rounded-lg`}
              ></div>
            </div>
            <p className="text-black/50 text-sm w-max font-semibold">
              {renderPageNumber()} of 4
            </p>
          </div>
        )}
        {/* MAIN SECTION STARTS */}
        {renderView()}
        {/* MAIN SECTION ENDS */}
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
