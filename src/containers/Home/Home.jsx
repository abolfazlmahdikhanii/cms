import React, { useCallback, useEffect, useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Wrapper from "../../hoc/Wrapper";
import Search from "../../components/Ui/Search/Search";
import { Route, Router, Routes } from "react-router-dom";
import Post from "../../components/Post/Post";
import Layout from "./Layout";
import { supabase } from "../../superbase";
import logo from "../../assets/logo.svg";



const Home = ({ session }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [clickInput, setClickInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [findBlog, setFindBlog] = useState(null);

  const [avatarUrl, setAvatarUrl] = useState(null);


  useEffect(() => {

    showUserName();

  }, [session]);

  const showUserName = async () => {


    try {

      let { data, error } = await supabase
        .from("profiles")
        .select(`id,firstName,lastName,avatar_url`)
        .eq('id', session?.user?.id)
        .single();


      if (error) throw error;






      setFirstName(data?.firstName);
      setLastName(data?.lastName);
      setAvatarUrl(data?.avatar_url);

    }
    catch (error) {

      console.log(error);

    }

  };
  const searchInputHandler = async (e) => {
    try {

      setLoading(true)
      setSearch(e.target.value);

      const { data, error } = await supabase.from("blogs")
        .select("id,post_title,post_content,post_type,post_author(username)")
        .ilike("post_title", `%${search}%`);

      if (error) throw error;

      setFindBlog(data);



    } catch (err) {
      setLoading(false)
      console.log(err);

    }
    finally{
      setLoading(false)
    }

  };




  return (
    <Wrapper>
      <Header fullName={`${firstName} ${lastName}`}>

        <img src={logo} alt="" />
        <Search
          disable={clickInput}
          setClickInput={setClickInput}
          search={search}
          searchHandler={searchInputHandler}
          findBlog={findBlog}
          setFindBlog={setFindBlog}
          setSearch={setSearch}
          loading={loading}
        />

      </Header>

      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/article/:username/:id/:title" element={<Post session={session} />} />
      </Routes>

    </Wrapper>
  );
};

export default Home;