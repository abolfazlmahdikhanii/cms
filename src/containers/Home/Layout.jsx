import React,{useState,useEffect} from "react";
import Blogs from "../../components/Blogs/Blogs";
import Category from "../../components/Category/Category";
import Slider from "../../components/Slider/Slider";
import Aside from "../../components/Aside/Aside";
import { supabase } from "../../superbase";
import Loader from "../../components/Ui/Loader/Loader";
const Layout=()=>{
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [postContent, setPostContent] = useState([])
    useEffect(() => {

        getBlogData();


    }, []);
    const getBlogData = async () => {
        try {
            setLoading(true);
            let { data: blog, error } = await supabase
                .from('blogs')
                .select(`id,post_date,post_title,post_content,post_rate,post_comment,post_type
                ,post_author(
                    firstName,
                    lastName,
                    avatar_url
                )`);

            if (error) {
                setLoading(true);
                throw error;
            };



            setBlogs(blog);



        } catch (error) {

            console.log(error);

        }
        finally {
            setLoading(false);
        }

    };
    return(
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


                                <Blogs blogs={blogs} />

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
    )
}

export default Layout