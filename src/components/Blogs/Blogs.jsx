import React from "react";
import BlogItem from "./BlogsItem";


const Blogs=({blogs})=>{
    return(
       <div>
         {/* {
            blogs.map((item)=>{
                return(

                )
            })
        } */}

        <BlogItem/>
       </div>
    )
}
export default Blogs