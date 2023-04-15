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
    const [loading, setLoading] = useState(false);
    const [postContent, setPostContent] = useState([]);
    const [page, setPage] = useState(1);
    const match = useParams();

    const categoryList = ["art", "tech", "game", "health", "life-style"];

    useEffect(() => {
        getBlogData();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);


    }, []);
    const getBlogData = async () => {
        try {

            let condition = match?.value;



            setLoading(true);

            const offset = (page - 1) * PAGE_SIZE;
            if (condition) {
                let { data: blog, error } = await supabase
                    .from('blogs')
                    .select(`id,post_date,post_title,post_content,post_comment,post_type
            ,post_author(
                firstName,
                lastName,
                avatar_url,
                username
            )`)

                    .eq("post_type", condition)
                    .range(offset, offset + PAGE_SIZE - 1);
                if (error) throw error;
                setBlogs(blog);
                setPage((prev) => prev + 1);
            }

            else {
                let { data: blog, error } = await supabase
                    .from('blogs')
                    .select(`id,post_date,post_title,post_content,post_comment,post_type
            ,post_author(
                firstName,
                lastName,
                avatar_url,
                username
            )`)

                    .in("post_type", categoryList)
                    .range(offset, offset + PAGE_SIZE - 1);
                if (error) throw error;
                console.log(blog);

                setBlogs(blog);
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

    return (
        <>
            {loading ?
                <Loader show={loading} />
                :
                (
                    <div>
                        <Slider />
                        <Category />


                        <section className="main-container">
                            <main className="blog-list">


                                <Blogs blogs={blogs} category={match?.value} />

                            </main>

                            <aside className="blog-aside">
                                <Aside type="viewst" />
                                <Aside type="controversial" />
                            </aside>
                        </section>
                    </div>
                )
            }
        </>
    );
};

export default Layout;