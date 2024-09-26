import React from "react";
import s from "../style/messag.module.css"
import glassWhere from "../assets/icon/glass.png"
import killanBroo from "../assets/icon/kilan.png"
import agreeCheck from "../assets/icon/agrreCheced.png"
import teamPhoto from "../assets/icon/designTeamLongHear.png"
import ded from "../assets/icon/ded.png"
import { NavLink } from "react-router-dom";
// import designLoog from "../assets/icon/designLogo.png"

const Customers = () => {
    return (
        <div className={s.cust_container}>
            <p className={s.namePass}>Messages</p>
            <div className="search_container">
                <img src={glassWhere} alt="glass" />
                <input type="text" placeholder="Search..." />
            </div>
            {/* chatsAll */}
            {/* first */}
            <nav>
                <NavLink to="FirstInList">
                    <div className={s.card_numb}>
                        <div className={s.flex}>
                            <img src={killanBroo} alt="" />
                            <div>
                                <div className={s.allFlexTop}>
                                    <h3 className={s.name_pers}>Killan James</h3>
                                    <p className={s.oclock}>4:30 PM</p>
                                </div>
                                <div className={s.contForTop}>
                                    <p className={s.whatHiDo}>Typing...</p>
                                    <p className={s.now_povidomlen}>2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </NavLink>
                {/* second */}
                <NavLink>
                    <div className={s.card_numb}>
                        <div className={s.flex}>
                            <img src={teamPhoto} alt="" />
                            <div>
                                <div className={s.allFlexTop}>
                                    <h3 className={s.name_pers}>Design Team</h3>
                                    <p className={s.oclock}>9:36 AM</p>
                                </div>
                                <div className={s.contForTop}>
                                    <p className={s.grey}>Hello! Everyone</p>
                                    <img src={agreeCheck} alt="" style={{ width: 15, marginTop: 0, marginLeft: 86 }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </NavLink>
                {/* third */}
                <NavLink>
                    <div className={s.card_numb}>
                        <div className={s.flex}>
                            <img src={ded} alt="" />
                            <div>
                                <div className={s.allFlexTop}>
                                    <h3 className={s.name_pers}>Ahmed Medi</h3>
                                    <p className={s.oclock}>1:15 AM</p>
                                </div>
                                <div className={s.contForTop}>
                                    <p className={s.grey}>Wow really Cool 🔥</p>
                                    {/* <img src={agreeCheck} alt="" style={{ width: 15, marginTop: 0, marginLeft: 86 }} /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </nav>
        </div>
    )
};

export default Customers;
