import React, { useEffect, useState } from "react";
import './BlogList.css';
import { supabase } from "../../../superbase";

import Wrapper from "../../../hoc/Wrapper";
import { NavLink, Route, Routes } from "react-router-dom";

import ShareList from "./ShareList";
import DraftList from "./DraftList";
import Loader from "../../../components/Ui/Loader/Loader";


const BlogList = ({ session }) => {

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [blogType, setBlogType] = useState("share");


    useEffect(() => {
        getUserBlogs(blogType);
    }, [session, blogType]);

    const getUserBlogs = async (type) => {
        try {
            setLoading(true);
            const { user } = session;
            const { data, error } = await supabase.from("blogs").select("post_title,post_content,post_date,id")
                .eq("post_author", user?.id)
                .eq("post_status", type);

            if (error) throw error;



            setBlogs(data);
         


        } catch (error) {
            setLoading(false);
            console.log(error);

        }
        finally {
            setLoading(false);
        }
    };

    return (
        <div>

            {/* tab */}
            <div className="blog-list--tab">
                <div className={`blog-list__tab ${blogType === "draft" ? 'active' : ''}`} onClick={() => setBlogType("draft")}>پیش نویس ها</div>
                <div
                    className={`blog-list__tab ${blogType === "share" ? 'active' : ''}`}
                    onClick={() => setBlogType("share")}>پست های منتشر شده</div>
            </div>
            <Loader show={loading} />

            <ShareList blogs={blogs} session={session} show={blogType} />
            <DraftList blogs={blogs} session={session} show={blogType} />









        </div>
    );
};
export default BlogList;