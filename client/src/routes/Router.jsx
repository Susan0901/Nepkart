import React from "react";
import { Routes, Route } from "react-router";
import Welcome from "../pages/Welcome";
import Login from "../pages/auth/Login";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
};

export default Router;
