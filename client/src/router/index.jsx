import React from "react";
import { CreatePost, Home } from "../pages";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/create-post" element={<CreatePost />}></Route>
    </Routes>
  );
};

export default AppRoutes;
