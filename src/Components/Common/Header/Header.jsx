import React from "react";
import "./Header.css";
import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";


const Header = () => {
  return (
    <div className="header">
      <HeaderTop />
      <HeaderBottom />
    </div>
  );
};
export default Header;
