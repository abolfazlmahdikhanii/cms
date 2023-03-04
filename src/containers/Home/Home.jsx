import React from "react";
import Category from "../../components/Category/Category";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import Wrapper from "../../hoc/Wrapper";


const Home=()=>{
    return(
     <Wrapper>
        <Header/>
        
        <Slider/>
        <Category/>
    
     </Wrapper>
    )
}

export default Home