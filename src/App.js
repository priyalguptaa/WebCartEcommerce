import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./Authentication/SignUp";
import Login from "./Authentication/Login";
import HomePage from "./HomeComponenet/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<HomePage/>} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
