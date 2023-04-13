import React from "react";
import "./SearchModal.css";
import Wrapper from "../../../hoc/Wrapper";
import Backdrop from "../Backdrop/Backdrop";
import Box from "../Box/Box";
import ItemList from "../ItemList/ItemList";

export const SerachModal = ({ show, close, findBlog }) => {
    return (
        <Wrapper>
            <Backdrop show={show} close={close} />
            <section className={`search-dialog ${show ? "search-dialog--hidden" : ""}`} >
                <div className="search-dialog--box">
                    {
                        findBlog?.map((item) => {
                            return (
                                <ItemList
                                    key={item?.id}
                                    title={item?.title}
                                />
                            );
                        })
                    }
                </div>
            </section>
        </Wrapper>

    );
};
