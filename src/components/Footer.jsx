import React from "react";
import s from "../style/footer.module.css";
const Footer = () => {
  return (
    <div className={s.login_info}>
      <img
        src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Free-Download.png" alt=""
      />
      <p className={s.nameProf}>Nikita Krenov</p>
    </div>
  );
};

export default Footer;
