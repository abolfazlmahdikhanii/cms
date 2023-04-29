import React from "react";
import "./UserPage.css";
import Box from "../../components/Ui/Box/Box";

const UserPage = () => {
  return (
    <div className="user-container">
      {/* header Profile */}
      <Box>
        {/* banner */}
        <div className="user-info--banner">
          <img src="../../../src/assets/bg-slider.jpg" alt="" />
        </div>
        <section className="user-info">
          <div className="user-info--wrapper">
            <div className="user-info--img">
              <img src="../../../src/assets/profile.svg" alt="" />
            </div>
            <div>
              <h4>abolfazl</h4>
              <p>@abolfazmk</p>
            </div>
          </div>
          {/* button */}
          <div>
            <button>دنبال کردن</button>
          </div>
        </section>
      </Box>

    </div>
  );
};

export default UserPage;
