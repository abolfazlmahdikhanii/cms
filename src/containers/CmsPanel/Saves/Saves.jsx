import React,{useEffect,useState} from "react";
import PostCard from "../../../components/Ui/PostCard/PostCard";
import { supabase } from "../../../superbase";
import './Saves.css'
import useTranslatorCategory from "../../../hooks/useTranslatetorCategory";
import useFilterImage from "../../../hooks/useFilterImage";

const Saves=({session})=>{
    const [favBlogs,setFavBlogs]=useState([])
    const translatorCategory=useTranslatorCategory
    const filterImage=useFilterImage
    useEffect(()=>{
     getSavessBlog()

    },[])
    const getSavessBlog=async()=>{
        try {
            const {user}=session
            const {data,error}=await supabase.from("save").select("user_id(avatar_url,firstName,lastName),blog_id(id,post_title,post_type,post_content)").eq("user_id",user?.id)

            if(error) throw error

            console.log(data);
            
            setFavBlogs(data)

        } catch (error) {
            console.log(error);
            
        }
    }
    const removeSaveBlog=async (id)=>{
        try {
          
          
                const { user } = session;
                console.log(user);
                
                const { err } = await supabase.from('save')
                    .delete()
                    .eq("blog_id",id )
                    .eq("user_id",user?.id)
               
                    
                   
    
    
    
    
                if (err) throw err;
    
          
                
    

            
        } catch (error) {
        
            console.log(error);
    
        }
    
        finally {
         
        }
       }
    return(
       <div className="fav-grid">
         {
            favBlogs.map((item)=>{
                const{id,post_title,post_type,post_content}=item?.blog_id
                const{avatar_url,firstName,lastName}=item?.user_id
                return(
                    <PostCard 
                    key={id}
                    type="save"
                     title={post_title}
                     category={translatorCategory(post_type)}
                     avatar={avatar_url}
                     firstName={firstName}
                     lastName={lastName}
                     img={filterImage(post_content)}
                        click={()=>removeSaveBlog(id)}
                    />
                )
            })
         }
       </div>
    )
}

export default Saves