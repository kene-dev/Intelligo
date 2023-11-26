import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/AuthScreens/Auth";
import Onboarding from "./pages/AuthScreens/Onboarding";
import Layout from "./pages/MainScreens/Layout";
import Home from "./pages/MainScreens/Home";
import Progress from "./pages/MainScreens/Progress";
import SingleCourse from "./pages/MainScreens/SingleCourse";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./pages/LandingPage";
import StudyGroup from "./pages/MainScreens/StudyGroup";

function App() {
  return (
    <>
      <ToastContainer position="top-center" hideProgressBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="auth" element={<Auth />} />
        <Route path="onboard" element={<Onboarding />} />

        <Route exact path="layout" element={<Layout />}>
          <Route path="home">
            <Route index element={<Home />} />
          </Route>

          <Route path="progress">
            <Route index element={<Progress />} />
          </Route>
          <Route path="singlecourse/:id" element={<SingleCourse />} />
          <Route path="groups" element={<StudyGroup />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
