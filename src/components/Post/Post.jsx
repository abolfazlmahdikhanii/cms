import React, { useEffect, useState } from "react";
import "./post.css";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../../superbase";
import useRelativeTime from "../../hooks/useRelativeTime";
import Box from "../../components/Ui/Box/Box";
import useTranslatorCategory from "../../hooks/useTranslatetorCategory";
import Aside from "../Aside/Aside";


const Post = ({ blogs }) => {

    const [content, setContent] = useState([]);
    const [blogContent, setBlogContent] = useState([]);

    const match = useParams();

    const timeFormat = useRelativeTime;
    const translator = useTranslatorCategory;
    useEffect(() => {
        getBlogData();
        filterPosts(blogContent);

    }, [blogs,blogContent]);
    const getBlogData = async () => {
        try {


            let { data: blog, error } = await supabase
                .from('blogs')
                .select(`id,post_date,post_title,post_content,post_comment,post_type
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

        const imgIndex = data.findIndex((item) => item.includes("img"));
        
        if (imgIndex === -1) return;
        data.splice(imgIndex, 1);


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
                <div className="register-box">
                    <h4 className="register-box__title">در دیجی بلاگ ثبت نام کنید</h4>
                    <p className="register-box__dis">جهت بهره‌مندی و دسترسی به امکانات ویژه و بخش‌های مختلف در دیجی بلاگ عضو ویژه دیجی بلاگ شوید.</p>
                    <Link to="/auth" className="btn-action btn-item btn-link">
                        عضویت در دیجی بلاگ
                    </Link>
                </div>

                <Box>
                    <div className="author-profile">
                        <div className="author-profile--photo">
                            <img src={'../../../src/assets/profile.svg'} alt="" />
                        </div>
                        <div className="author-profile--info">
                            <p className="author-prfile__fullName">
                                {`${blogContent[0]?.post_author.firstName} ${blogContent[0]?.post_author.lastName}`}
                            </p>
                            <p className="author-prfile__dis"></p>
                            <button className="btn-follow">دنبال کردن</button>
                        </div>
                    </div>
                </Box>

                <Aside type="viewst" />
                <Box>
                    <div className="share-post">
                        <p>به اشتراک بگذارید</p>
                        <div className="social">
                            <p>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="12" fill="#1DA1F2"></circle>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5675 8.98649C17.5728 9.11843 17.5745 9.25031 17.5745 9.38224C17.5745 13.3822 14.6857 18 9.40302 18C7.78027 18 6.27135 17.4962 5 16.6387C5.22473 16.6627 5.45297 16.6807 5.68471 16.6807C7.03019 16.6807 8.26943 16.1948 9.25242 15.3792C7.99566 15.3613 6.93446 14.4797 6.56847 13.2803C6.74417 13.3163 6.92511 13.3343 7.11015 13.3343C7.37107 13.3343 7.62441 13.2984 7.86724 13.2264C6.55211 12.9506 5.56154 11.7272 5.56154 10.2579C5.56154 10.2399 5.56154 10.2339 5.56154 10.2219C5.94914 10.4438 6.39276 10.5817 6.86382 10.5997C6.09214 10.0539 5.58488 9.12441 5.58488 8.07494C5.58488 7.52321 5.72614 7.00145 5.97481 6.55168C7.39092 8.38676 9.50809 9.59217 11.8949 9.71811C11.8459 9.49622 11.8208 9.2624 11.8208 9.02851C11.8208 7.35535 13.1067 6 14.6933 6C15.5193 6 16.2652 6.36587 16.7888 6.95358C17.4444 6.82164 18.0584 6.56979 18.6142 6.22196C18.3988 6.92961 17.944 7.52318 17.3498 7.895C17.9312 7.82303 18.4857 7.66124 19 7.42136C18.6142 8.02706 18.1285 8.56071 17.5675 8.98649Z" fill="white"></path>
                                </svg>
                            </p>
                            <p>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.512309 11.8958C0.511586 13.9188 1.04259 15.8938 2.05227 17.6349L0.415588 23.5836L6.53091 21.9874C8.21581 22.9014 10.1128 23.3839 12.0434 23.3845H12.0484C18.4062 23.3845 23.5812 18.2344 23.584 11.9048C23.5852 8.83736 22.3863 5.95342 20.2082 3.78333C18.0304 1.61354 15.1342 0.417944 12.0479 0.416504C5.68976 0.416504 0.514777 5.5659 0.512021 11.8958L0.512309 11.8958ZM12.0483 23.3844H12.0484H12.0483C12.048 23.3844 12.0481 23.3844 12.0483 23.3844Z" fill="url(#paint0_linear_66_2179)"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.06359 6.92064C8.83989 6.42566 8.60451 6.41575 8.39175 6.40704C8.21762 6.39967 8.01847 6.40015 7.81955 6.40015C7.62039 6.40015 7.29692 6.47454 7.02339 6.77197C6.74962 7.06942 5.97827 7.78841 5.97827 9.2507C5.97827 10.7131 7.04833 12.1262 7.19741 12.3247C7.34675 12.5228 9.26303 15.6197 12.2976 16.8109C14.8199 17.801 15.3332 17.6041 15.8806 17.5545C16.428 17.505 17.6472 16.8357 17.8959 16.1417C18.1447 15.4477 18.1447 14.8528 18.0701 14.7286C17.9955 14.6047 17.7964 14.5303 17.4978 14.3818C17.1991 14.2332 15.7312 13.5141 15.4576 13.4149C15.1838 13.3158 14.9848 13.2663 14.7856 13.5639C14.5866 13.8611 14.0147 14.5304 13.8405 14.7286C13.6664 14.9272 13.4921 14.952 13.1935 14.8034C12.8949 14.6542 11.9332 14.3407 10.7924 13.3283C9.90479 12.5404 9.30559 11.5676 9.13134 11.27C8.95721 10.9728 9.11275 10.8118 9.26245 10.6636C9.3966 10.5304 9.56113 10.3166 9.71047 10.1431C9.85945 9.96951 9.90915 9.84565 10.0087 9.64739C10.1083 9.44901 10.0585 9.27543 9.98388 9.12676C9.90915 8.9781 9.32891 7.50829 9.06341 6.92055" fill="white"></path>
                                    <defs>
                                        <linearGradient id="paint0_linear_66_2179" x1="11.9999" y1="23.5812" x2="11.9999" y2="0.414069" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#20B038"></stop>
                                            <stop offset="1" stop-color="#60D66A"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </p>
                            <p>
                                <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12.9996" cy="13" r="12.5" fill="#0088CC" stroke="white"></circle>
                                    <path d="M18.987 7.08265L5.70001 12.1745C4.79315 12.5361 4.79853 13.0386 5.53471 13.2627L8.84854 14.2904L10.1165 18.1528C10.2706 18.5755 10.1946 18.7432 10.6414 18.7432C10.9862 18.7432 11.1392 18.587 11.3312 18.4006C11.4534 18.2819 12.1784 17.5815 12.9881 16.7994L16.4351 19.3298C17.0693 19.6775 17.5273 19.4974 17.6853 18.7445L19.948 8.15037C20.1796 7.22757 19.5939 6.80899 18.987 7.08265ZM9.3686 14.0543L16.838 9.37207C17.2109 9.14739 17.5528 9.26819 17.272 9.51577L10.8763 15.2492L10.6273 17.8883L9.3686 14.0543V14.0543Z" fill="white"></path>
                                </svg>
                            </p>
                        </div>
                    </div>
                </Box>
            </aside>
        </div>
    );
};

export default Post;