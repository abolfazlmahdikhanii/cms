import React from "react";
import "./SearchModal.css";
import Wrapper from "../../../hoc/Wrapper";
import Backdrop from "../Backdrop/Backdrop";
import Box from "../Box/Box";
import ItemList from "../ItemList/ItemList";

const SerachModal = ({ show, close, findBlog }) => {
    return (
        <Wrapper>
            <Backdrop show={show} close={close} />
            <section className={`search-dialog ${show ? "search-dialog--hidden" : ""}`} >
                <div className="search-dialog--box">
                    {
                        findBlog?.flatMap(( item) => {
                      
                            
                            return (
                                <ItemList
                                    key={item?.id}
                                    id={item?.id}
                                    username={item?.post_author?.username}
                                    title={item?.post_title}
                                    content={item?.post_content}

                                />
                            );
                        })
                    }
                </div>
            </section>
        </Wrapper>

    );
};

export default SerachModal;