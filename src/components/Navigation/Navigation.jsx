import React from "react";
import "./Navigation.css";
import NavItem from "./NavItem.jsx";
import logo from "../../assets/logo.svg";


const Navigation = (props) => {
    return (
        <div className="navigation">
            <div className="logo">

                <img src={logo} alt="" />

            </div>
            <NavItem />
        </div>
    );
};
export default Navigation;