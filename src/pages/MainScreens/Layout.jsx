import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Tabs from "../../components/Tabs";
import { useSelector } from "react-redux";
import Footer from "../../components/Footer";

const Layout = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      {user ? (
        <div className="w-full min-h-screen bg-[#EAEAEA]">
          <Navbar />
          <Tabs />
          <Outlet />
          <Footer />
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default Layout;
