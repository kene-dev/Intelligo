import React, { useState } from "react";

const CustomModal = ({ isOpen, onClose, size, children }) => {
  const getSizeClassName = () => {
    switch (size) {
      case "sm":
        return "w-96 h-[50%]";
      case "md":
        return "w-[500px] h-[50%]";
      case "lg":
        return "w-2/3 h-[90%]";
      default:
        return "w-96";
    }
  };

  return (
    <div
      className={`fixed top-0 left-0  right-0 bottom-0 flex items-center justify-center bg-black/50 ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      <div
        className={`bg-white rounded shadow p-4 ${getSizeClassName()} transform transition-transform duration-200 ease-out ${
          isOpen ? "scale-100" : "scale-0"
        }`}
      >
        <button className="absolute top-2 right-2" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default CustomModal;
