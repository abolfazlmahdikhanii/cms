import React, { useEffect, useState } from "react";
import "./post.css";
import { useParams } from "react-router-dom";
import { supabase } from "../../superbase";
import useRelativeTime from "../../hooks/useRelativeTime";
import Box from "../../components/Ui/Box/Box";
import useTranslatorCategory from "../../hooks/useTranslatetorCategory";


const Post = ({ blogs }) => {

    const [content, setContent] = useState([]);
    const [blogContent, setBlogContent] = useState([]);

    const match = useParams();

    const timeFormat=useRelativeTime
    const translator = useTranslatorCategory;
    useEffect(() => {
        getBlogData();
        filterPosts(blogContent);

    }, [blogs, blogContent]);
    const getBlogData = async () => {
        try {


            let { data: blog, error } = await supabase
                .from('blogs')
                .select(`id,post_date,post_title,post_content,post_rate,post_comment,post_type
                ,post_author(
                    firstName,
                    lastName,
                    avatar_url
                )`)
                .eq("id", match?.id);

            if (error) {

                throw error;
            };

            setBlogContent(blog);

        } catch (error) {

            console.log(error);

        }
        finally {

        }

    };
    const filterPosts = (array) => {
        let data = [];
        const posts = array.map((item) => item.post_content);
        posts.forEach(blog => {
            for (let value of blog) {
                data.push(value.contentTag);


            }
        });

        setContent(data);

   


    };


    return (
        <div className="main-container">

            <main className="blog-list blog-post">

                <div className="post-cover">
                    <img src="../../../src/assets/bg-slider.jpg" alt="" loading="lazy" />
                </div>

                <Box>
                    <h2 className="post__title">{blogContent[0]?.post_title}</h2>
                    <div className="post-row">
                        <div className="detail-author--profile">
                            <img src={'../../../src/assets/profile.svg'} alt="profile-icon" className="detail-author--profile__img" />
                            <p className="detail-author--profile__txt">{`${blogContent[0]?.post_author.firstName} ${blogContent[0]?.post_author.lastName}`}</p>
                        </div>

                        <div className="blog-content--date">
                            <p className="blog-content--category__category-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                    <g id="vuesax_outline_clock" data-name="vuesax/outline/clock" transform="translate(-172 -188)">
                                        <g id="clock">
                                            <path id="Vector" d="M10.75,21.5A10.75,10.75,0,1,1,21.5,10.75,10.759,10.759,0,0,1,10.75,21.5Zm0-20A9.25,9.25,0,1,0,20,10.75,9.261,9.261,0,0,0,10.75,1.5Z" transform="translate(173.25 189.25)" fill="currentColor" />
                                            <path id="Vector-2" data-name="Vector" d="M4.82,9.17a.67.67,0,0,1-.38-.11L1.34,7.21A2.949,2.949,0,0,1,0,4.85V.75A.755.755,0,0,1,.75,0,.755.755,0,0,1,1.5.75v4.1a1.478,1.478,0,0,0,.61,1.07l3.1,1.85A.749.749,0,0,1,5.47,8.8.77.77,0,0,1,4.82,9.17Z" transform="translate(182.89 194.76)" fill="currentColor" />
                                            <path id="Vector-3" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(172 188)" fill="none" opacity="0" />
                                        </g>
                                    </g>
                                </svg>

                            </p>
                            <p>{timeFormat(blogContent[0]?.post_date)}</p>
                        </div>
                        <div className="blog-content--category__category">
                            <p className="blog-content--category__category-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                                    <g id="vuesax_outline_folder-open" data-name="vuesax/outline/folder-open" transform="translate(-492 -188)">
                                        <g id="folder-open">
                                            <path id="Vector" d="M16.726,12.5H4.146c-3.4,0-3.58-1.87-3.73-3.38l-.4-5.01a3.792,3.792,0,0,1,.81-2.72A3.74,3.74,0,0,1,3.746,0h13.38A3.736,3.736,0,0,1,20,1.34l.17.23a3.687,3.687,0,0,1,.69,2.55l-.4,4.99C20.306,10.63,20.126,12.5,16.726,12.5ZM3.746,1.5a2.226,2.226,0,0,0-1.73.82l-.07.07a2.247,2.247,0,0,0-.43,1.59l.4,5.01c.14,1.46.2,2.01,2.23,2.01h12.58c2.04,0,2.09-.55,2.23-2.02l.4-5.01a2.18,2.18,0,0,0-.5-1.64l-.1-.12a2.227,2.227,0,0,0-1.64-.71Z" transform="translate(493.564 198.25)" fill="currentColor" />
                                            <path id="Vector-2" data-name="Vector" d="M17.75,10.94a.755.755,0,0,1-.75-.75V8.4c0-2.98-.52-3.5-3.5-3.5H10.95A2.05,2.05,0,0,1,9,3.93L7.71,2.22A1.324,1.324,0,0,0,6.27,1.5H5c-2.98,0-3.5.52-3.5,3.5v5.15a.755.755,0,0,1-.75.75A.755.755,0,0,1,0,10.15V5C0,1.17,1.17,0,5,0H6.28A2.723,2.723,0,0,1,8.92,1.32l1.28,1.7c.27.36.29.38.76.38h2.55c3.83,0,5,1.17,5,5v1.79A.771.771,0,0,1,17.75,10.94Z" transform="translate(494.75 189.28)" fill="currentColor" />
                                            <path id="Vector-3" data-name="Vector" d="M5.89,1.5H.75A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0H5.89a.75.75,0,0,1,0,1.5Z" transform="translate(500.68 204.25)" fill="currentColor" />
                                            <path id="Vector-4" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(492 188)" fill="none" opacity="0" />
                                        </g>
                                    </g>
                                </svg>

                            </p>
                            <p>{translator(blogContent[0]?.post_type)}</p>
                        </div>
                    </div>
                </Box>

                <Box>
                    <div className="post-content--box" dangerouslySetInnerHTML={{ __html: content.join('') }}></div>
                </Box>


            </main>

            <aside className="blog-aside">

            </aside>
        </div>
    );
};

export default Post;