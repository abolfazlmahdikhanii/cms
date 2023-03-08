import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../superbase";


const Post=({blogs})=>{

    const [content,setContent]=useState([])
    const [blogContent,setBlogContent]=useState([])

    const match=useParams()
    useEffect(() => {
       getBlogData()
       filterPosts(blogContent)
          
    }, [blogContent]);
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
                .eq("id",match?.id)

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

        setContent(data)

        

    };
    return(
        <div dangerouslySetInnerHTML={{__html:content.join('')}}>

        </div>
    )
}

export default Post