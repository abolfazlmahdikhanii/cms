import React from "react";
import "./SearchModal.css";
import Wrapper from "../../../hoc/Wrapper";
import Backdrop from "../Backdrop/Backdrop";
import Box from "../Box/Box";
import ItemList from "../ItemList/ItemList";
import { Oval } from 'react-loader-spinner';

const SerachModal = ({ show, close, findBlog,loading }) => {
    return (
        <Wrapper>

            <Backdrop show={show} close={close} />
            <section className={`search-dialog ${show ? "search-dialog--hidden" : ""}`} >
                <Oval
                    height={30}
                    width={30}
                    color="#4338ca"
                    wrapperStyle={{}}
                    wrapperClass="oval-loader"
                    visible={loading}
                    ariaLabel='oval-loading'
                    secondaryColor="#818cf8"
                    strokeWidth={6}
                    strokeWidthSecondary={6}

                />
                <div className="search-dialog--box">
                    {
                        findBlog?.flatMap((item) => {


                            return (
                                <ItemList
                                    key={item?.id}
                                    id={item?.id}
                                    username={item?.post_author?.username}
                                    title={item?.post_title}
                                    content={item?.post_content}
                                    close={close}

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