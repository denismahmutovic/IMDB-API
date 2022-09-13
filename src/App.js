import React from "react";
import "./App.css";
import BottomNavigation from "@mui/material/BottomNavigation";

import { Routes, Route, Link, NavLink } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Movies from "./components/Movies/Movies";

export default function App() {
  let activeStyle = {
    textDecoration: "underline",
    color: "red",
  };

  let activeClassName = "underline";

  return (
    <div className="card-container">
      <BottomNavigation showLabels>
        <NavLink
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <h4>Home </h4>
        </NavLink>

        <NavLink
          to="/Movies"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <h4>Movies </h4>
        </NavLink>
      </BottomNavigation>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Movies" element={<Movies />} />
        {/* <Route path="news/:id" element={<SingleNews />} /> */}
      </Routes>
    </div>
  );
}
