import React from "react";
import "./Aside.css";
import Box from "../Ui/Box/Box";

const Aside = (props) => {

    return (
        <Box>
            <div className="aside-title">
                <div className="aside-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" >
                        <line x1="18" y1="20" x2="18" y2="10"></line>
                        <line x1="12" y1="20" x2="12" y2="4"></line>
                        <line x1="6" y1="20" x2="6" y2="14"></line>
                    </svg>

                </div>
                <div>
                    <p className="aside-title__title">پربازدیدترین ها</p>
                </div>
            </div>

            <ul className="aside-list">
                <li className="aside-item">
                    <div className="aside-item--img">
                        <img src="../../../src/assets/bg-slider.jpg" alt="" className="aside-item--img__img" />
                    </div>
                    <div className="aside-item--title">
                        <h3 className="aside-item--title__title">  یوبیسافت تعداد قابل توجهی از کارکنان خود را اخراج می‌کند

                        </h3>
                    </div>
                </li>
                <li className="aside-item">
                    <div className="aside-item--img">
                        <img src="../../../src/assets/bg-slider.jpg" alt="" className="aside-item--img__img" />
                    </div>
                    <div className="aside-item--title">
                        <h3 className="aside-item--title__title">  یوبیسافت تعداد قابل توجهی از کارکنان خود را اخراج می‌کند

                        </h3>
                    </div>
                </li>
            </ul>
        </Box>
    );
};

export default Aside;