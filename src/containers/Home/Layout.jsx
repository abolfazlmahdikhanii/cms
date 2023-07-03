import React, { useState, useEffect } from "react";
import Blogs from "../../components/Blogs/Blogs";
import Category from "../../components/Category/Category";
import Slider from "../../components/Slider/Slider";
import Aside from "../../components/Aside/Aside";
import { supabase } from "../../superbase";
import Loader from "../../components/Ui/Loader/Loader";
import { useParams } from "react-router-dom";

const PAGE_SIZE = 10;

const Layout = () => {
    const [blogs, setBlogs] = useState([]);
    const [lastBlogs, setLastBlogs] = useState([]);
    const [sliderBlogs, setSliderBlogs] = useState();
    const [loading, setLoading] = useState(false);
    const [postContent, setPostContent] = useState([]);
    const [page, setPage] = useState(1);
    const match = useParams();

    const categoryList = ["art", "tech", "game", "health", "life-style"];
    const DAY=24 * 60 * 60 * 1000

    useEffect(() => {

        getLastBlogs()
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
   

    }, []);
    useEffect(() => {
        getBlogData();
        
        getSliderBlog()
        const interval=setInterval(getSliderBlog,DAY)

        return()=>{

            clearInterval(interval)
        }

    }, [match]);
    const getBlogData = async () => {
        try {


            let condition = match?.value;

            setLoading(true);

            // const offset = (page - 1) * PAGE_SIZE;
            if (condition !== undefined) {
                let { data: blog, error } = await supabase
                    .from('blogs')
                    .select(`id,post_date,post_title,post_content,post_comment,post_type
            ,post_author(
                firstName,
                lastName,
                avatar_url,
                username
            )`)

                    .eq("post_type", condition);
                // .range(offset, offset + PAGE_SIZE - 1);
                if (error) throw error;
                setBlogs(blog);
                setPage((prev) => prev + 1);
            }

            else {
                let { data: blogs, error } = await supabase
                    .from('blogs')
                    .select(`id,post_date,post_title,post_content,post_comment,post_type
            ,post_author(
                firstName,
                lastName,
                avatar_url,
                username
            )`)

                    .in("post_type", categoryList);
                // .range(offset, offset + PAGE_SIZE - 1);
                if (error) throw error;


                setBlogs(blogs);
                setPage((prev) => prev + 1);
            }





        } catch (error) {

            console.log(error);

        }
        finally {
            setLoading(false);
        }

    };



    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollHeight === document.documentElement.offsetHeight) {
            getBlogData();
        }
    };
    const getLastBlogs = async () => {
        try {
            let { data: blog, error } = await supabase
                .from('blogs')
                .select(`id,post_date,post_title,post_content
                        ,post_author(
                        firstName,
                        lastName,
                        avatar_url,
                        username
                        )`)

                .order('post_date', { ascending: false })
                .limit(5);

            if (error) throw error;
            setLastBlogs(blog);
        } catch (err) {
            console.log(err);

        }
    };
    const getSliderBlog = async () => {
        try {
            let { data: blog, error } = await supabase
                .from('blogs')
                .select(`id,post_date,post_title,post_content
                        ,post_author(
                        firstName,
                        lastName
                        )`)

                .order('post_date', { ascending: false })
                .limit(1);

            if (error) throw error;
            if (blog.length > 0) {
                setSliderBlogs(blog[0]);
              }
        } catch (err) {
            console.log(err);

        }
    };

    return (
        <>

            <Loader show={loading} />


            <div>
                <Slider blog={sliderBlogs} />
                <Category />


                <section className="main-container">
                    <main className="blog-list">


                        <Blogs blogs={blogs} category={match?.value} />

                    </main>

                    <aside className="blog-aside">
                        {/* <Aside type="viewst" post={mostVistorPost} /> */}
                        <Aside type="controversial" post={lastBlogs} />
                    </aside>
                </section>
            </div>


        </>
    );
};

export default Layout;