import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import s from "../style/navigation.module.css";
import exchange from "../assets/icon/book.png";
import manaher from "../assets/icon/settings.png";
import product from "../assets/icon/strilka.png";

const Nivigation = () => {
  return (
    <div className={s.nav_container}>
      <div>
        <Header />
        <nav>
          <NavLink to="exchange-rate" className={s.nav_btn}>
            <span>
              <img src={exchange} alt="" />
            </span>
            {/* Exchange rate */}
          </NavLink>
          <NavLink to="product" className={s.nav_btn}>
            <span>
              <img src={manaher} alt="" />
            </span>
            {/* TOP manager */}
          </NavLink>
          <NavLink to="customers" className={s.nav_btn}>
            <span>
              <img src={product} alt="" />
            </span>
            {/* Product */}
          </NavLink>
        </nav>
      </div>

      <Footer />
    </div>
  );
};

export default Nivigation;
