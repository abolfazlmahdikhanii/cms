import React, { useCallback, useEffect, useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Wrapper from "../../hoc/Wrapper";
import Search from "../../components/Ui/Search/Search";
import { Route, Router, Routes } from "react-router-dom";
import Post from "../../components/Post/Post";
import Layout from "./Layout";
import { supabase } from "../../superbase";


const Home = ({session}) => {
    const[firstName,setFirstName]=useState("")
    const[lastName,setLastName]=useState("")
    const[avatarUrl,setAvatarUrl]=useState(null)

    useEffect(()=>{

      showUserName()
    },[session])

    const showUserName = async () => {


        try {
            let { data, error, status } = await supabase
                .from("profiles")
                .select(`firstName,lastName,avatar_url`)
                .eq('id', session?.user?.id)
                .single();


            if (error && status !== 406) {
                throw error;
            }
          
               
                
 
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
                <h1>digiblog</h1>
                <Search />
            </Header>
      
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/article/:id" element={<Post/>}/>
      </Routes>
      
        </Wrapper>
    );
};

export default Home;