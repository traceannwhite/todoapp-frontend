import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/dhcagrzcb/image/upload/v1629232615/Untitled_design_jhkmsx.png"
          alt=""
          className="logo"
        />
      </Link>
    </div>
  );
};

export default Header;
