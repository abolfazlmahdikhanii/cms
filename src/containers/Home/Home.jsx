import React, { useCallback, useEffect, useState ,useRef,lazy,Suspense} from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Wrapper from "../../hoc/Wrapper";
import Search from "../../components/Ui/Search/Search";
import { Route, Router, Routes } from "react-router-dom";
import Post from "../../components/Post/Post";
import Layout from "./Layout";
import { supabase } from "../../superbase";
import logo from "../../assets/logo.svg";
import UserPage from "../UserPage/UserPage";




const Home = ({ session }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
 

  const [avatarUrl, setAvatarUrl] = useState("");



  useEffect(() => {

    // showUserName();


  }, []);

  const showUserName = async () => {


    try {
      

      const  { data, error } = await supabase
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




  return (
    <Wrapper>
      <Header fullName={`${firstName} ${lastName}`}>

        <img src={logo} alt="" />
        <Search
      
        />

      </Header>

      <Routes>
        <Route path="/*" element={<Layout  />} />
        <Route path="/category/:value" element={<Layout />} />
       
      
      <Route path="/article/:username/:id/:title" element={<Post session={session} />} />

  
      </Routes>

    </Wrapper>
  );
};

export default Home;