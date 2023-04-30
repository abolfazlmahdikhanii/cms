import React from "react";
import "./UserPage.css";
import Box from "../../components/Ui/Box/Box";
import { NavLink } from "react-router-dom";

const UserPage = () => {
  return (
    <div className="user-container">
      {/* header Profile */}
      <Box>
        {/* banner */}
        <div className="user-info--banner">
          <img src="../../../src/assets/—Pngtree—shading background abstract colorful background_938007.jpg" alt="" />
        </div>
        <section className="user-info">
          <div className="user-info--wrapper">
            <div className="user-info--img">
              <img src="../../../src/assets/profile.svg" alt="" />
            </div>
            <div className="user-info--info">
              <h4 className="user-info__name">ابوالفضل مهدیخانی</h4>
              <p className="user-info__user">@abolfazmk</p>
            </div>
          </div>
          {/* button */}
          <div>
            <button className="btn btn-follow btn-item btn-big">دنبال کردن</button>
          </div>
        </section>
        {/* follower */}
        <section className="activity-info">
          <div className="follower-row">
            <p className="follower"><span className="follow-num">266</span> دنبال کننده</p>
            <p className="follower"><span className="follow-num">0</span> دنبال شده</p>
          </div>
        </section>
        {/* tabs */}
        <section className="user-tabs">
          <NavLink className="user-tabs__tab" activeClassName="active">درباره من</NavLink>
          <NavLink className="user-tabs__tab" activeClassName="active">مقالات</NavLink>
        </section>
      </Box>

      <Box>

      </Box>

    </div>
  );
};

export default UserPage;
