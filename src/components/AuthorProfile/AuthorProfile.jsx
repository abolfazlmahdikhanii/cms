import React from "react";
import { Link } from "react-router-dom";


const AuthorProfile = ({ avatar_url, username, firstName, lastName, bio, type = null }) => {
    return (

        <div className={`author-profile `}>
            <div className="author-profile--photo">
                <img src={avatar_url || '../../../src/assets/profile.svg'} alt="" />
            </div>
            <div className={`author-profile--info ${type === "full" ? "author-profile--3" : ""}`}>
                <div>
                    <Link to={`/@${username}`} className="author-prfile__fullName">
                        {`${firstName} ${lastName}`}
                    </Link>
                    <p className="author-prfile__dis">
                        {bio}
                    </p>
                </div>
                <button className="btn-follow">دنبال کردن</button>
            </div>
        </div>

    );
};

export default AuthorProfile;
