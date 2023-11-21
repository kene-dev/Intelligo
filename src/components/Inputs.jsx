import React from "react";

const Inputs = ({ label, type, placeholder, onChange, value, name }) => {
  return (
    <div className="w-full h-full">
      <label className="text-sm">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        className="appearance-none border-[.5px] text-sm focus:outline-primary focus:outline-[.3px] border-black/50 h-[45px] w-full p-2  transition-all duration-200 rounded-md"
      />
    </div>
  );
};

export default Inputs;
