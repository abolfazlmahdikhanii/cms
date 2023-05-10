import React from "react";
import { Link } from "react-router-dom";


const AuthorProfile = ({ avatar_url, username, firstName, lastName, bio, type = null, cls = null }) => {
    return (

        <div className={`author-profile `}>
            <div className={`author-profile--photo ${cls === "user-page" ? "user-info--img" : ""}`}>
                <img src={avatar_url || '../../../src/assets/profile.svg'} alt="" />
            </div>
            <div className={`author-profile--info ${type === "full" ? "author-profile--3" : ""}`}>
                <div>
                    <Link to={`/@${username}`} className={`author-prfile__fullName ${cls === "user-page" ? "user-info__name" : ""}`}>
                        {`${firstName} ${lastName}`}
                    </Link>
                    <p className={`author-dis ${cls === "user-page" ? "user-info__user" : ""}`}>
                        {cls === "user-page" ? `@${username}` : bio}
                    </p>
                </div>
                <button className={`btn-follow ${cls === "user-page" ? "btn-big" : ""}`}>دنبال کردن</button>
            </div>
        </div>

    );
};

export default AuthorProfile;
