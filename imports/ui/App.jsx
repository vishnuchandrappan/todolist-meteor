import React from "react";
import "./styles/main.css";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./components/Routes";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes />
      </div>
    </BrowserRouter>
  );
};
