import React from "react";
import logo from "../assets/logo.svg";
import bell from "../assets/notifiy.svg";
import SearchBar from "./SearchBar";
import drop from "../assets/drop.svg";
import { useDispatch } from "react-redux";
import { logoutUser } from "../Redux/features/AuthSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full h-[100px] p-3 flex items-center justify-between bg-white px-12">
      <img src={logo} className="bg-contain  w-[120px]" />
      <SearchBar placeholder={"Search Courses, teachers..."} width={"423px"} />

      <div className="flex items-center gap-10">
        <div className="w-max px-6 py-3 text-sm bg-primary cursor-pointer text-white rounded-md">
          Online Degrees
        </div>

        <div className=" w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#f5f5f5] ">
          <img src={bell} className="w-[20px] h-[20px]" />
        </div>

        <div
          onClick={() => dispatch(logoutUser())}
          className="w-max flex items-center gap-4 text-sm px-5 py-3 bg-[#f5f5f5] cursor-pointer text-black rounded-md"
        >
          <p>Umoru Emmanuel</p>
          <img src={drop} className="w-[13px] h-[13px]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
