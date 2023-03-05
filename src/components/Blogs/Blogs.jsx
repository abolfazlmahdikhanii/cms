import React from "react";
import BlogItem from "./BlogsItem";


const Blogs=({blogs})=>{
    return(
       <div className="blogs-content">
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