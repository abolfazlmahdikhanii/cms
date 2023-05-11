import React from "react";
import "./Navigation.css";
import NavItem from "./NavItem.jsx";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";


const Navigation = (props) => {
    return (
        <div className="navigation">
            <div className="logo">

               <Link to="/">
               <img src={logo} alt="" />
               </Link>

            </div>
            <NavItem />
        </div>
    );
};
export default Navigation;