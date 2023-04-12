import React from "react";
import "./SearchModal.css";
import Wrapper from "../../../hoc/Wrapper";
import Backdrop from "../Backdrop/Backdrop";
import Box from "../Box/Box";

export const SerachModal = ({ show }) => {
    return (
        <Wrapper>
            <Backdrop show={show} />
            <section className={`search-dialog `} >
                <div className="search-dialog--box">

                </div>
            </section>
        </Wrapper>

    );
};
