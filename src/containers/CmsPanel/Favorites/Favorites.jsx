import React, { useEffect, useState } from "react";
import PostCard from "../../../components/Ui/PostCard/PostCard";
import { supabase } from "../../../superbase";
import './Favorites.css';
import useTranslatorCategory from "../../../hooks/useTranslatetorCategory";
import useFilterImage from "../../../hooks/useFilterImage";
import Loader from "../../../components/Ui/Loader/Loader";

const Favorites = ({ session }) => {
    const [favBlogs, setFavBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const translatorCategory = useTranslatorCategory;
    const filterImage = useFilterImage;
    useEffect(() => {
        getFavoritesBlog();

    }, []);
    const getFavoritesBlog = async () => {
        try {
            setLoading(true)
            const { user } = session;
            const { data, error } = await supabase.from("vote").select("user_id(avatar_url,firstName,lastName),blog_id(id,post_title,post_type,post_content)").eq("user_id", user?.id);

            if (error) throw error;

            console.log(data);

            setFavBlogs(data);

        } catch (error) {
            setLoading(false)
            console.log(error);

        }
        finally{
            setLoading(false)
        }
    };
    const removeBlogRate = async (id) => {

        try {
            setLoading(true)
         
                const { user } = session;
                const { err } = await supabase.from('vote')
                    .delete()
                    .eq("user_id", user?.id)
                    .eq("blog_id", id);



                if (err) throw err;



            
        } catch (error) {
            setLoading(false)
            console.log(error);

        }

        finally {
setLoading(false)
        }
    };

    return (
        <div className="fav-grid">
            <Loader show={loading}/>
            {
                favBlogs.map((item) => {
                    const { id, post_title, post_type, post_content } = item?.blog_id;
                    const { avatar_url, firstName, lastName } = item?.user_id;
                    return (
                        <PostCard
                            key={id}
                            type="fav"
                            title={post_title}
                            category={translatorCategory(post_type)}
                            avatar={avatar_url}
                            firstName={firstName}
                            lastName={lastName}
                            img={filterImage(post_content)}
                            click={() => removeBlogRate(id)}

                        />
                    );
                })
            }
        </div>
    );
};

export default Favorites;