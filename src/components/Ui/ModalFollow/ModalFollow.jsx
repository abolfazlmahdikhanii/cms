import React from "react";
import "./ModalFollow.css";
import Box from "../Box/Box";
import Wrapper from "../../../hoc/Wrapper";
import Backdrop from "../../Ui/Backdrop/Backdrop";
import FollowItem from "./FollowItem";

const ModalFollow = ({ followes, show, activeTab, close, setActiveTab }) => {


    return (
        <Wrapper>

            <Backdrop show={show} close={close}/>

            <section className={`modal-follow ${!show ? "modal-follow--hidden" : ""}`}>
                <Box modal={true}>
                    <div className="row follow-nav">
                        <div className={`blog-list__tab ${activeTab === "follower" ? "active" : ""}`} onClick={() => setActiveTab("follower")}>
                            دنبال کننده ها
                        </div>
                        <div className={`blog-list__tab ${activeTab === "following" ? "active" : ""}`} onClick={() => setActiveTab("following")}>
                            دنبال شده ها
                        </div>
                    </div>
                    <div className="follow-body">
                        {

                            followes?.map((item) => {
                                const { id } = item?.user_follower || item?.user_follow;

                            

                                return (
                                    < FollowItem
                                        key={id}
                                        {...item?.user_follower || item?.user_follow}
                                    />
                                );
                            })
                        }
                    </div>
                </Box>
            </section>
        </Wrapper>
    );
};

export default ModalFollow;
