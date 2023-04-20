import React, { useCallback, useEffect, useState } from "react";
import "./Blogs.css";
import BlogItem from "./BlogsItem";
import { supabase } from "../../superbase";
import useTranslatorCategory from "../../hooks/useTranslatetorCategory";
import { useNavigate } from "react-router-dom";
import Loader from "../Ui/Loader/Loader";
import useFilterPargraph from "../../hooks/useFilterParagraph";
import useFilterImage from "../../hooks/useFilterImage";




const Blogs = ({ blogs,category }) => {

    const translator = useTranslatorCategory;
    const [users, setUser] = useState(null);

    const [isUser, setIsUser] = useState(false);
    const [loading, setLoading] = useState(false);
    const [click, setClick] = useState(false);
    const [clickSave, setClickSave] = useState(false);
   

    const filterParagraph=useFilterPargraph
    const filterImage=useFilterImage
    
 
    const categoryTitle=category?category:"last-news"

    useEffect(() => {
   
        checkExistUser();

    }, [blogs, click]);

    const handleClick = (id) => {

        if (!click) {
            removeBlogRate(id);
            setClick(true);
        }
        else {
            updateBlogRate(id);
            setClick(false);
        }
    };
    const handleSaveClick = (id) => {

        if (!clickSave) {
            removeSaveBlog(id);
            setClickSave(true);
        }
        else {
            saveBlogHandler(id);
            setClickSave(false);
        }
    };

    const updateBlogRate = async (id) => {

        try {
            setLoading(true);
            if (isUser) {
                const { user } = users;
                console.log(user);
                
                const { err } = await supabase.from('vote')
                    .insert({ blog_id: id, user_id: user?.id, posetive_vote: true });


                if (err) throw err;



            }
        } catch (error) {
            setLoading(false);
            console.log(error);

        }
        finally {
            setLoading(true);
        }

    };
    const removeBlogRate = async (id) => {

        try {
            setLoading(true);
            if (isUser) {
                const { user } = users;
                const { err } = await supabase.from('vote')
                    .delete()
                    .eq("blog_id", id);



                if (err) throw err;



            }
        } catch (error) {
            setLoading(false);
            console.log(error);

        }

        finally {
            setLoading(true);
        }
    };

    const saveBlogHandler = async (id) => {
        try {
            setLoading(true);
            if (isUser) {
                const { user } = users;
                const { err } = await supabase.from('save')
                    .insert({ blog_id: id, user_id: user?.id });


                if (err) throw err;


             

            }
        } catch (error) {
            setLoading(false);
            console.log(error);

        }
        finally {
            setLoading(true);
        }
    };
   const removeSaveBlog=async (id)=>{
    try {
        setLoading(true);
        if (isUser) {
            const { user } = users;
            console.log(user);
            
            const { err } = await supabase.from('save')
                .delete()
                .eq("blog_id",id )
                .eq("user_id",user?.id)
           
                
               




            if (err) throw err;

      
            


        }
    } catch (error) {
        setLoading(false);
        console.log(error);

    }

    finally {
        setLoading(true);
    }
   }
    const checkExistUser = async () => {
        try {
            const { data, err } = await supabase.auth.getUser();
            if (err) throw err;

            setUser(data);


            if (!data) {
                alert("please login");
                setIsUser(false);
            }
            else {
                setIsUser(true);
            }
        }
        catch (err) {
            console.log(err);

        }
    };
   
  
   
  



    return (


        <div className="blogs-content">
            <div className="blog-list--title">
                <div className="blog-list--title__icon">
                    <svg width="37" height="34" viewBox="0 0 37 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="24" r="10" fill="currentColor"></circle>
                        <circle cx="30" cy="13" r="7" fill="currentColor" fillOpacity="0.4"></circle>
                        <circle cx="15" cy="4" r="4" fill="currentColor" fillOpacity="0.7"></circle>
                    </svg>
                </div>
                <div>
                    <h3 className="blog-list--title__txt">{translator(categoryTitle)}</h3>
                </div>
            </div>



            {
                blogs.map((item) => {
                    const { firstName, lastName, avatar_url,username } = item?.post_author;
                    return (
                        <BlogItem
                            key={item?.id}
                            id={item?.id}
                            title={item?.post_title}
                            username={username}
                            category={translator(item?.post_type)}
                            img={filterImage(item?.post_content)}
                            fullName={`${firstName} ${lastName}`}
                            avatar={avatar_url}
                            paragraphs={filterParagraph(item?.post_content)}
                            userId={users?.user?.id}
                            date={item?.post_date}
                            clickRate={() => handleClick(item?.id)}
                            clickSave={() => handleSaveClick(item?.id)}
                            

                        />
                    );
                })
            }



        </div>
    );
};
export default Blogs;