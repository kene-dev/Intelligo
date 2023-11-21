import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Home from "./Home";

const Layout = () => {
  const [active, setActive] = useState("home");

  const handleActive = (option) => {
    setActive(option);
  };

  // Render different views based on the currentView state
  const renderView = () => {
    switch (active) {
      case "home":
        return <Home />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#EAEAEA]">
      <Navbar />
      <ul className="w-full h-[70px] bg-white flex items-center gap-24 px-12">
        <li
          onClick={() => handleActive("home")}
          className={`text-sm hover:border-b-2 ${
            active === "home" ? "text-primary" : "text-black"
          } hover:border-secondary border-b-2 border-transparent p-2 text-black font-semibold duration-200 cursor-pointer`}
        >
          Home
        </li>
        <li
          onClick={() => handleActive("progress")}
          className={`text-sm hover:border-b-2 ${
            active === "progress" ? "text-primary" : "text-black"
          } hover:border-secondary border-b-2 border-transparent p-2 text-black font-semibold duration-200 cursor-pointer`}
        >
          My Progress
        </li>
        <li
          onClick={() => handleActive("groups")}
          className={`text-sm hover:border-b-2 ${
            active === "groups" ? "text-primary" : "text-black"
          } hover:border-secondary border-b-2 border-transparent p-2 text-black font-semibold duration-200 cursor-pointer`}
        >
          Study Groups
        </li>
        <li
          onClick={() => handleActive("calender")}
          className={`text-sm hover:border-b-2 ${
            active === "calender" ? "text-primary" : "text-black"
          } hover:border-secondary border-b-2 border-transparent p-2 text-black font-semibold duration-200 cursor-pointer`}
        >
          My Calender
        </li>
      </ul>
      {/* MAIN SECTION STARTS */}
      {renderView()}
      {/* MAIN SECTION ENDS */}
    </div>
  );
};

export default Layout;
