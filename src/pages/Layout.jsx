import React from "react";
import Nivigation from "../components/Nivigation";
import { Outlet } from "react-router-dom";
import s from "../style/layout.module.css";
const Layout = () => {
  return (
    <div className={s.layout_container}>
      <Nivigation />
      <div style={{ width: "25%" }}></div>
      <div className={s.outlet_container}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
