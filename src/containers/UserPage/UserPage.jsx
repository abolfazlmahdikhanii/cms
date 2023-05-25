import React, { useState, useEffect } from "react";
import "./UserPage.css";
import Box from "../../components/Ui/Box/Box";
import { NavLink, Route, Routes, useParams } from "react-router-dom";
import AboutUser from "./AboutUser/AboutUser";
import Articles from "./Articles/Articles";
import { supabase } from "../../superbase";
import usePublicProfile from "../../hooks/usePublicProfile";
import ModalFollow from "../../components/Ui/ModalFollow/ModalFollow";
import Loader from "../../components/Ui/Loader/Loader";
import bannerImg from "../../../src/assets/—Pngtree—shading background abstract colorful background_938007.jpg"
import AuthorProfile from "../../components/AuthorProfile/AuthorProfile";

const UserPage = ({ session }) => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [userBlogs, setUserBlogs] = useState([]);
 
  const [followList, setFollowList] = useState([]);
  const [followingList, setFollowingList] = useState([]);
  const [totalFllower, setTotalFollower] = useState(0);
  const [totalFllowing, setTotalFollowing] = useState(0);
  const [activeTab, setActiveTab] = useState("follower");
  const [showModal, setShowModal] = useState(false);


  const match = useParams();
  const publicProfile = usePublicProfile;

  useEffect(() => {
    getUserAbout();
    getUserBlogs();
    getFollowerList(userData?.id);
    getFollowingList(userData?.id);
  }, [session, match, totalFllower, totalFllowing]);


  const getUserAbout = async () => {
    try {


      setLoading(true);
      const { data, err } = await supabase.from("profiles")
        .select("*")
        .eq("username", match?.username.slice(1))
        .single();

      if (err) throw err;


      setUserData(data);



    } catch (error) {
      setLoading(false);
      console.log(error);

    }
    finally {
      setLoading(false);
    }
  };
  const getUserBlogs = async () => {
    try {

      setLoading(true);
      const { data: blogs, err } = await supabase.from("blogs")
        .select("*,post_author(id,username,firstName,lastName,avatar_url)")
        .eq("post_author", userData?.id);

      if (err) throw err;
      setUserBlogs(blogs);

    } catch (error) {
      setLoading(false);
      console.log(error);

    }
    finally {
      setLoading(false);
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
      ;
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

 
 



  return (
    <div className="user-container">

      <Loader show={loading} />
      {/* header Profile */}
      <Box>
        {/* banner */}
        <div className="user-info--banner">
          <img src={bannerImg} alt="banner" loading="lazy"/>
        </div>
        <section className="user-info">
          

          <AuthorProfile
          
            username={userData?.username}
            session={session}
            id={userData?.id}
             avatar_url={publicProfile(userData?.avatar_url)}
            firstName={userData?.firstName}
            lastName={userData?.lastName}
            type="full"
            cls="user-page"
          />
        </section>
        {/* follower */}
        <section className="activity-info">
          <div className="follower-row">
            <p className="follower" onClick={() => {
              setShowModal(true);
              setActiveTab("follower");
            }}>
              <span className="follow-num">{totalFllower}</span> دنبال کننده</p>
            <p className="follower"
              onClick={() => {
                setShowModal(true);
                setActiveTab("following");
              }}
            ><span className="follow-num">{totalFllowing}</span> دنبال شده</p>
          </div>

        </section>
        {/* tabs */}
        <section className="user-tabs">
          <NavLink to="" end className="user-tabs__tab" activeclassname="active">درباره من</NavLink>
          <NavLink to="articles" end className="user-tabs__tab" activeclassname="active">مقالات</NavLink>
        </section>
      </Box>

      <Routes>
        <Route path="/" element={<AboutUser about={userData?.bio} />} />
        <Route path="/articles" element={<Articles blogs={userBlogs} />} />
      </Routes>

      <ModalFollow
        followes={activeTab === "follower" ? followList : followingList}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        show={showModal}
        close={() => setShowModal(false)}
      />
    </div>
  );
};

export default UserPage;
