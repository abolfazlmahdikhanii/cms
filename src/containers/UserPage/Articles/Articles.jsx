import React from "react";
import "./Articles.css";
import PostCard from "../../../components/Ui/PostCard/PostCard"

const Articles = ({blogs}) => {

  return (
    <div>
      <div className="blog-list--title">
        <div className="blog-list--title__icon">
          <svg width="37" height="34" viewBox="0 0 37 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="24" r="10" fill="currentColor"></circle>
            <circle cx="30" cy="13" r="7" fill="currentColor" fillOpacity="0.4"></circle>
            <circle cx="15" cy="4" r="4" fill="currentColor" fillOpacity="0.7"></circle>
          </svg>
        </div>
        <div>
          <h3 className="blog-list--title__txt">مقالات</h3>
        </div>
      </div>

      <div>
         {
          blogs?.map((item)=>{
           const  {firstName,lastName,avatar_url}=item?.post_author
            return(
            
              <PostCard
                img={item?.post_content}
                title={item?.post_title}
                category={item?.post_type}
                firstName={firstName}
                lastName={lastName}
                avatar={avatar_url}
      
              />
            )
          })
         }
      </div>

    </div>

  );
};

export default Articles;
