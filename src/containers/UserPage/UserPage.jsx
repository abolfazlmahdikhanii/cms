import React, { useState, useEffect } from "react";
import "./UserPage.css";
import Box from "../../components/Ui/Box/Box";
import { NavLink, Route, Routes, useParams } from "react-router-dom";
import AboutUser from "./AboutUser/AboutUser";
import Articles from "./Articles/Articles";
import { supabase } from "../../superbase";
import usePublicProfile from "../../hooks/usePublicProfile";

const UserPage = () => {
  const [about, setAbout] = useState(null);
  const [userData, setUserData] = useState(null);
  const [userBlogs, setUserBlogs] = useState([]);
  

  const match = useParams();
  const publicProfile = usePublicProfile;

  useEffect(() => {
    getUserAbout();
    getUserBlogs();
  }, [match]);


  const getUserAbout = async () => {
    try {


      const { data, err } = await supabase.from("profiles")
        .select("*")
        .eq("username", match?.username.slice(1))
        .single();

      if (err) throw err;


      setUserData(data);
      setAbout(data?.bio);


    } catch (error) {
      console.log(error);

    }
  };
  const getUserBlogs = async () => {
    try {


      const { data: blogs, err } = await supabase.from("blogs")
        .select("*,post_author(username,firstName,lastName,avatar_url)")
        .eq("post_author(id)", userData?.id);

      if (err) throw err;
      setUserBlogs(blogs);

    } catch (error) {
      console.log(error);

    }
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
            <button className="btn btn-follow btn-item btn-big">دنبال کردن</button>
          </div>
        </section>
        {/* follower */}
        <section className="activity-info">
          <div className="follower-row">
            <p className="follower"><span className="follow-num">266</span> دنبال کننده</p>
            <p className="follower"><span className="follow-num">0</span> دنبال شده</p>
          </div>
        </section>
        {/* tabs */}
        <section className="user-tabs">
          <NavLink to="" end className="user-tabs__tab" activeClassName="active">درباره من</NavLink>
          <NavLink to="articles" end className="user-tabs__tab" activeClassName="active">مقالات</NavLink>
        </section>
      </Box>

      <Routes>
        <Route path="/" element={<AboutUser about={about} />} />
        <Route path="/articles" element={<Articles blogs={userBlogs} />} />
      </Routes>


    </div>
  );
};

export default UserPage;
