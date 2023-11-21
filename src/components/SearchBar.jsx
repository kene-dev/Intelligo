import React from "react";
import icon from "../assets/searchIcon.svg";

const SearchBar = ({ placeholder, onChange, onSubmit }) => {
  return (
    <div className="w-[423px] h-[39px] relative rounded-md">
      <input
        onChange={onChange}
        placeholder={placeholder}
        color="#00000080"
        className="w-full h-full appearance-none bg-[#f5f5f5] focus:outline-primary focus:outline-[.3px] rounded-md px-8 text-sm text-black/80"
      />
      <img
        src={icon}
        className="w-[20px] h-[20px] absolute top-[9px] left-[6px]"
      />
    </div>
  );
};

export default SearchBar;
