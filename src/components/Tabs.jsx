import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Tabs = () => {
  const [active, setActive] = useState("home");
  const navigate = useNavigate();

  const handleActive = (option) => {
    setActive(option);
  };

  useEffect(() => {
    if (active === "home") {
      navigate("/layout/home");
    }

    if (active === "progress") {
      navigate("progress");
    }

    if (active === "groups") {
      navigate("groups");
    }

    if (active === "calender") {
      navigate("calender");
    }
  }, [active]);

  return (
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
        My Calendar
      </li>
    </ul>
  );
};

export default Tabs;
