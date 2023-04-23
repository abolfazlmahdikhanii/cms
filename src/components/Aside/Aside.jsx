import React from "react";
import "./Aside.css";
import Box from "../Ui/Box/Box";
import { Link } from "react-router-dom";
import useFilterImage from "../../hooks/useFilterImage";

const Aside = ({ post, type }) => {

    const filterImg = useFilterImage;

    let header = null;
    switch (type) {
        case "viewst":

            header =

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" >
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>;


            break;
        case "controversial":
            header =
                <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"></path>
                </svg>;




            break;

        default:
            break;
    }

    return (
        <Box>
            <div className="aside-title">
                <div className={`aside-icon  ${type === "viewst" ? "aside-icon__viewst" : "aside-icon__controversial"}`}>
                    {header}

                </div>
                <div>
                    <p className="aside-title__title">{type === "viewst" ? "پر بازدیدترین ها" : "پربحث ترین ها"}</p>
                </div>
            </div>
            <div className="aside-list">

                {
                    post?.map((item) => {

                        const { id, post_title, post_author, post_content } = item?.blog_id;

                        return (
                            <Link to={`article/@${post_author?.username}/${id}/${post_title.split(" ").join("-")}`} className="aside-item" key={id}>

                                <div className="aside-item--img" dangerouslySetInnerHTML={{ __html: filterImg(post_content) }}>

                                </div>
                                <div className="aside-item--title">
                                    <h3 className="aside-item--title__title">
                                        {post_title}
                                    </h3>
                                </div>
                            </Link>

                        );
                    })
                }
            </div>
        </Box>
    );
};

export default Aside;