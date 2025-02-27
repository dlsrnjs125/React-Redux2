import React from "react";
import { NavLink } from "react-router-dom";
import "../Navbar.css"; // 스타일 추가

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="app-title">Order Project</h1>
      <div className="nav-links">
        <NavLink to="/users/" className="nav-button">User</NavLink>
        <NavLink to="/books/" className="nav-button">Book</NavLink>
        <NavLink to="/orders/" className="nav-button">Order</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
