import React,{useEffect,useState} from "react";
import PostCard from "../../../components/Ui/PostCard/PostCard";
import { toast } from 'react-toastify';
import { supabase } from "../../../superbase";
import './Saves.css'
import useTranslatorCategory from "../../../hooks/useTranslatetorCategory";
import useFilterImage from "../../../hooks/useFilterImage";
import Loader from "../../../components/Ui/Loader/Loader";

const Saves=({session})=>{
    const [favBlogs,setFavBlogs]=useState([])
    const [loading, setLoading] = useState(false);
    const translatorCategory=useTranslatorCategory
    const filterImage=useFilterImage
    const toastOption={
        position: "bottom-right",
        autoClose:1000,
         hideProgressBar: true,
         theme:"colored",
         style:{fontFamily:"shabnam,sans-serif"}
    }
    useEffect(()=>{
     getSavessBlog()

    },[])
    const getSavessBlog=async()=>{
        try {
            setLoading(true)
            const {user}=session
            const {data,error}=await supabase.from("save").select("user_id(avatar_url,firstName,lastName),blog_id(id,post_title,post_type,post_content)").eq("user_id",user?.id)

            if(error) throw error

            console.log(data);
            
            setFavBlogs(data)

        } catch (error) {
            setLoading(false)
            console.log(error);
            
        }
        finally{
            setLoading(false)
        }
    }
    const removeSaveBlog=async (id)=>{
        try {
          
          
            setLoading(true)
                const { user } = session;
                console.log(user);
                
                const { err } = await supabase.from('save')
                    .delete()
                    .eq("blog_id",id )
                    .eq("user_id",user?.id)
               
                    
                   
    
    
    
    
                if (err) throw err;
                toast.success("با موفقیت از لیست ذخیره شده ها حذف شد",toastOption)

          
                
    

            
        } catch (error) {
        setLoading(false)
        toast.error("حذف پست از لیست ذخیره شد ها با مشکل مواجه شد",toastOption)

    
        }
    
        finally {
            setLoading(false)
        }
       }
    return(
       <div className="fav-grid">
        <Loader show={loading}/>
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