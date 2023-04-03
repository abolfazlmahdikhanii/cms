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

    const link = ["/", "shared-post"];
    const link2 = ["/", "draft"];

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
            console.log(data);


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
                <NavLink to="draft" end className="blog-list__tab " activeClassName="active" onClick={() => setBlogType("draft")}>پیش نویس ها</NavLink>
                <NavLink to={link && "shared-post"}
                    end
                    

                    className="blog-list__tab  "
                    activeClassName="active"
                    onClick={() => setBlogType("share")}>پست های منتشر شده</NavLink>
            </div>
            <Loader show={loading} />

            <Routes>
                <Route path="/" element={<ShareList blogs={blogs} session={session} />} />
                <Route path="shared-post" element={<ShareList blogs={blogs} session={session} />} />
                <Route path="draft" element={<DraftList blogs={blogs} session={session} />} />
            </Routes>




        </div>
    );
};
export default BlogList;