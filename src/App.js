import React from "react";
import "./App.css";
import BottomNavigation from "@mui/material/BottomNavigation";

import { Routes, Route, Link, NavLink } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Movies from "./components/Movies/Movies";
import Series from "./components/Series/Series";
import SingleNews from "./components/SingleNews";
import Footer from "./components/Footer/Footer";
import { margin } from "@mui/system";

let activeStyle = {
  textDecoration: "underline",
  color: "red",
  transition: "0.3s",
};

let activeClassName = "underline";
export default function App() {
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
        <NavLink
          to="/series"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <h4>Series </h4>
        </NavLink>
      </BottomNavigation>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="series" element={<Series />} />
        <Route path="news/:id" element={<SingleNews />} />
      </Routes>
      <Footer />
    </div>
  );
}
