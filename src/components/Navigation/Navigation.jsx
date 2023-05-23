import React from "react";
import "./Navigation.css";
import NavItem from "./NavItem.jsx";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import Wrapper from "../../hoc/Wrapper";
import Backdrop from "../Ui/Backdrop/Backdrop";


const Navigation = ({show,close}) => {
    return (
      <Wrapper>
        <Backdrop show={show} close={close}/>
          <div className={`navigation ${show?"show-nav":""}`}>
            <div className="logo">

               <Link to="/">
               <img src={logo} alt="" />
               </Link>

            </div>
            <NavItem />
        </div>
      </Wrapper>
    );
};
export default Navigation;