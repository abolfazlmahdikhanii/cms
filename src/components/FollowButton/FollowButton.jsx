import React, { useState, useEffect } from "react";
import { supabase } from "../../superbase";

const FollowButton = ({ id, session, cls,type }) => {
    const [isFollow, setIsFollow] = useState(false);


    useEffect(() => {


        checkFollowUser(id);

    }, [session,isFollow,id]);

    // if author follow =>unfollow  else=>follow
    const clickFollowHanlder = (id) => {

        if (isFollow) {
            unfollowHandler(id);

        }
        else {
            followHandler(id);
        }
    };

    const followHandler = async (id) => {

        try {
         
            const { err } = await supabase.from("follow_list")
                .insert({ user_follow: id, user_follower: session?.user?.id });
            if (err) throw err;
        } catch (error) {
          
            console.log(error);

        }
        finally {
 
        }
    };
    const unfollowHandler = async (id) => {
        try {
        
            const { data, err } = await supabase.from("follow_list")
                .delete()
                .eq("user_follow", id)
                .eq("user_follower", session?.user?.id);

            if (err) throw err;
            setIsFollow(false);
        } catch (error) {

            console.log(error);

        }
       


    };
    const checkFollowUser = async (id) => {
        try {

            const { data, err } = await supabase.from("follow_list")
                .select("*")
                .eq("user_follow", id)
                .eq("user_follower", session?.user?.id);
            if (err) throw err;

            if (data?.length > 0) setIsFollow(true);

        } catch (error) {
            console.log(error);

        }
    };
    return (


        <div>
            <button className={` btn-follow ${cls === "user-page" ? "btn-big" : ""} ${type === "full" ? "btn-medium" : ""} ${isFollow && "btn-followed"}`}
                onClick={() => clickFollowHanlder(id)}
            >{isFollow ? "دنبال نکردن" : "دنبال کردن"}</button>
        </div>


    );
};

export default FollowButton;
