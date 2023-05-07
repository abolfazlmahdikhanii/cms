import React from "react";
import "./FlowItem.css";

const FollowItem = ({ firstName, lastName,username }) => {
    return (
        <div className="follow-item">
            <div className="follow-item--row">
                {/* img */}
                <div className="follow-item--img">
                    <img src="../../../../src/assets/profile.svg" alt="" className="author-profile--photo" />
                </div>
                {/* info */}
                <div className="follow-info">
                    <p className="follow-name">{firstName} {lastName}</p>
                    <p className="follow-username">@{username}</p>
                </div>
            </div>


            <button className="btn btn-follow">دنبال کردن</button>
        </div>
    );
};

export default FollowItem;
