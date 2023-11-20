import React, { useState, useEffect } from "react";
import { Colors } from "../../Utils/Colors";
import { LoginForm, RegisterForm } from "./components";

const Auth = () => {
  const [display, setDisplay] = useState("login");

  // Function to handle view changes
  const handleViewChange = (newView) => {
    setDisplay(newView);
  };

  // Render different views based on the current state
  const renderView = () => {
    switch (display) {
      case "login":
        return <LoginForm />;
      case "register":
        return <RegisterForm />;
      default:
        return <LoginForm />;
    }
  };

  return (
    <div className=" w-full h-screen lg:flex items-start">
      {/* BLANK BACKGROUND AREA  */}
      <div className="w-[460px] h-full hidden lg:block"></div>
      {/* BACKGROUND IMAGE AREA */}
      <div className="loginBG w-full h-full bg-red-300 rounded-tl-lg rounded-bl-lg relative">
        {/* OVERLAY ON BACKGROUND IMAGE */}
        <div className="w-full h-full bg-black/50"></div>
        {/* CONTAINER FOR FORM SECTION STARTS */}
        <div className="w-full h-full flex items-center lg:justify-normal justify-center gap-4 absolute lg:-left-44 left-0 top-0 z-20">
          {/* CARD SECTION STARTS */}
          <div
            className={`w-[380px] flex flex-col h-[85%] bg-white rounded-t-lg rounded-b-lg border-t-4 
            border-[${Colors.primary}] shadow-md p-8 justify-between`}
          >
            {/* MAIN CARD SECTION STARTS */}
            {renderView()}
            {/* MAIN CARD SECTION ENDS */}

            {display === "login" && (
              <div
                onClick={() => handleViewChange("register")}
                className={`bg-black/20 w-full h-[45px] p-2 flex items-center justify-between rounded-md text-black text-center px-5`}
              >
                <p>Create an Account</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                >
                  <path
                    d="M15 7L9 13M15 7L9 1M15 7L1 7"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            )}

            {display === "register" && (
              <p className="text-center">
                Already have an account?{" "}
                <span
                  onClick={() => handleViewChange("login")}
                  className="font-bold cursor-pointer"
                >
                  Sign In
                </span>
              </p>
            )}
          </div>
          {/* CARD SECTION ENDS */}

          <div className="h-[85%] hidden lg:flex flex-col gap-3 justify-end pl-24 pb-28">
            <h1 className="text-4xl text-white pl-8">Study groups are the</h1>
            <span className="bg-[#800080] w-max text-4xl p-2 px-8 text-white text-semibold">
              best way to learn
            </span>
            <p className="text-white pl-8">
              Find your learning soulmates with our smart matching algorithm{" "}
              <br /> and study smarter together!
            </p>
          </div>
        </div>
        {/* CONTAINER FOR FORM SECTION ENDS */}
      </div>
    </div>
  );
};

export default Auth;
