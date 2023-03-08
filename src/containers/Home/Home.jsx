import React, { useCallback, useEffect, useState } from "react";
import "./Home.css";


import Header from "../../components/Header/Header";

import Wrapper from "../../hoc/Wrapper";

import Search from "../../components/Ui/Search/Search";


import { Route, Router, Routes } from "react-router-dom";
import Post from "../../components/Post/Post";
import Layout from "./Layout";

const Home = () => {



   

   


    return (
        <Wrapper>
            <Header >
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