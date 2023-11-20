import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/AuthScreens/Auth";
import Onboarding from "./pages/AuthScreens/Onboarding";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="onboard" element={<Onboarding />} />
    </Routes>
  );
}

export default App;
