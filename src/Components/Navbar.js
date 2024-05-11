import React, { useState } from "react";
import fccLogo from "../Assets/fccLogo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={fccLogo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">Horizon</a>
        <a href="">Schedule</a>
        <a href="">Sponsors</a>
        <a href="">Team</a>
      </div>
    </nav>
  );
};

export default Navbar;
