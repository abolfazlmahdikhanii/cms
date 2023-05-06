import React, { useState, useEffect } from "react";
import "./UserPage.css";
import Box from "../../components/Ui/Box/Box";
import { NavLink, Route, Routes, useParams } from "react-router-dom";
import AboutUser from "./AboutUser/AboutUser";
import Articles from "./Articles/Articles";
import { supabase } from "../../superbase";
import usePublicProfile from "../../hooks/usePublicProfile";
import ModalFollow from "../../components/Ui/ModalFollow/ModalFollow";

const UserPage = ({ session }) => {

  const [userData, setUserData] = useState(null);
  const [userBlogs, setUserBlogs] = useState([]);
  const [isFollow, setIsFollow] = useState(false);
  const [followList, setFollowList] = useState([]);
  const [followingList, setFollowingList] = useState([]);
  const [totalFllower, setTotalFollower] = useState(0);
  const [totalFllowing, setTotalFollowing] = useState(0);


  const match = useParams();
  const publicProfile = usePublicProfile;

  useEffect(() => {
    getUserAbout();
    getUserBlogs();
    checkFollowUser(userData?.id);
    getFollowerList(userData?.id); 
    getFollowingList(userData?.id); 
  }, [session, match.username, isFollow,totalFllower,totalFllowing]);

  // if author follow =>unfollow  else=>follow
  const clickFollowHanlder = (id = userData?.id) => {

    if (isFollow) {
      unfollowHandler(id);

    }
    else {
      followHandler(id);
    }
  };
  const getUserAbout = async () => {
    try {


      const { data, err } = await supabase.from("profiles")
        .select("*")
        .eq("username", match?.username.slice(1))
        .single();

      if (err) throw err;


      setUserData(data);



    } catch (error) {
      console.log(error);

    }
  };
  const getUserBlogs = async () => {
    try {


      const { data: blogs, err } = await supabase.from("blogs")
        .select("*,post_author(id,username,firstName,lastName,avatar_url)")
        .eq("post_author", userData?.id);

      if (err) throw err;
      setUserBlogs(blogs);

    } catch (error) {
      console.log(error);

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
  };
  const getFollowerList = async (id = userData?.id) => {
    try {
      const { data, err } = await supabase.from("follow_list")
        .select(`user_follower(
         id,
         username,
         firstName,
         lastName,
         avatar_url
      )`)
        .eq("user_follow", id);

      if (err) throw err;
      setFollowList(data);
      setTotalFollower(data?.length);
    }
    catch (err) {
      console.log(err);

    }
  };
  const getFollowingList = async (id = userData?.id) => {
    try {
      const { data, err } = await supabase.from("follow_list")
        .select(`user_follow(
         id,
         username,
         firstName,
         lastName,
         avatar_url
      )`)
        .eq("user_follower", id);

      if (err) throw err;
      setFollowingList(data);
      setTotalFollowing(data?.length);
    }
    catch (err) {
      console.log(err);

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
  const unfollowHandler = async (id) => {
    const { data, err } = await supabase.from("follow_list")
      .delete()
      .eq("user_follow", id)
      .eq("user_follower", session?.user?.id);

    if (err) throw err;
    setIsFollow(false);


  };



  return (
    <div className="user-container">
      {/* header Profile */}
      <Box>
        {/* banner */}
        <div className="user-info--banner">
          <img src="../../../src/assets/—Pngtree—shading background abstract colorful background_938007.jpg" alt="" />
        </div>
        <section className="user-info">
          <div className="user-info--wrapper">
            <div className="user-info--img">
              <img src={publicProfile(userData?.avatar_url) || "../../../src/assets/profile.svg"} alt="" />
            </div>
            <div className="user-info--info">
              <h4 className="user-info__name">{userData?.firstName} {userData?.lastName}</h4>
              <p className="user-info__user" >@{userData?.username}</p>
            </div>
          </div>
          {/* button */}
          <div>
            <button className={`btn btn-item btn-big btn-follow ${isFollow && "btn-followed"}`}
              onClick={() => clickFollowHanlder(userData?.id)}
            >{isFollow ? "دنبال نکردن" : "دنبال کردن"}</button>
          </div>
        </section>
        {/* follower */}
        <section className="activity-info">
          <div className="follower-row">
            <p className="follower"><span className="follow-num">{totalFllower}</span> دنبال کننده</p>
            <p className="follower"><span className="follow-num">{totalFllowing}</span> دنبال شده</p>
          </div>
          <ModalFollow/>
        </section>
        {/* tabs */}
        <section className="user-tabs">
          <NavLink to="" end className="user-tabs__tab" activeClassName="active">درباره من</NavLink>
          <NavLink to="articles" end className="user-tabs__tab" activeClassName="active">مقالات</NavLink>
        </section>
      </Box>

      <Routes>
        <Route path="/" element={<AboutUser about={userData?.bio} />} />
        <Route path="/articles" element={<Articles blogs={userBlogs} />} />
      </Routes>


    </div>
  );
};

export default UserPage;
