import React from "react";
import "./FlowItem.css";
import AuthorProfile from "../../AuthorProfile/AuthorProfile";
import usePublicProfile from "../../../hooks/usePublicProfile";

const FollowItem = ({id, firstName, lastName,username ,avatar_url,session}) => {
    const publicProfile=usePublicProfile
    return (
        < >
                <AuthorProfile
          
          username={username}
          session={session}
          id={id}
           avatar_url={publicProfile(avatar_url)}
          firstName={firstName}
          lastName={lastName}
          type="full"
          cls="user-page"
        />
        </>
    );
};

export default FollowItem;
