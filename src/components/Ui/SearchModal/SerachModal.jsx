import React from "react";
import "./SearchModal.css";
import Wrapper from "../../../hoc/Wrapper";
import Backdrop from "../Backdrop/Backdrop";
import Box from "../Box/Box";

export const SerachModal = ({ show,close }) => {
    return (
        <Wrapper>
            <Backdrop show={show} close={close} />
            <section className={`search-dialog ${show ? "search-dialog--hidden" : ""}`} >
                <div className="search-dialog--box">

                </div>
            </section>
        </Wrapper>

    );
};
