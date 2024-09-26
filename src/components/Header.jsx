import React from "react";
import logo from "../assets/logo_01.png";
import s from "../style/header.module.css";
const Header = () => {
  return (
    <div>
      <img className={s.logo} src={logo} alt="" />
    </div>
  );
};

export default Header;
