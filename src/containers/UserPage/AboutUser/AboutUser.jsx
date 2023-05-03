import React from "react";
import "./AoutUser.css"
import Box from "../../../components/Ui/Box/Box";

const AboutUser = ({about}) => {
  return(
 <Box>
    <div className="about-user--wrapper">
        <h4 className="about-user__title">درباره من</h4>
        <p className="about-user__dis">
          {about}
        </p>
    </div>
 </Box>
  );
};

export default AboutUser;
