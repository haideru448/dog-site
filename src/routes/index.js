import React from "react";
import { Route } from "react-router-dom";
import LoginPage from "../pages/Login";
import HomePage from "../components/HomePage/Main";
import { Routes } from 'react-router-dom';


export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage/>} />
    </Routes>
  );
}
