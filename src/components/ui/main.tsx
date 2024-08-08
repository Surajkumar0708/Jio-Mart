import React from "react";
import {  Route, Routes } from "react-router-dom";
import Groceries from "../../pages/Groceries/Groceries";
import Home from "../../pages/Home/Home";

const Main = () => {
  return(
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/groceries" element={<Groceries />} />
      </Routes>
  )
};

export default Main;
