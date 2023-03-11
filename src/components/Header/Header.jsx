import React, {useEffect, useState} from "react";
import "./Header.css"
import Profile from "../Profile/Profile.jsx";
import ThemButton from "../Ui/ThemButton/ThemButton.jsx";

const Header=(props)=>{
   
    return(
        <div className="header">
             <div className="header-right">
                {props.children}
             </div>

            <div className="header-left">
                <ThemButton/>
                <Profile fullName={props?.fullName}/>
            </div>
        </div>
    )
}
export default Header