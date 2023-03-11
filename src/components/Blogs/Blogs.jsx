import React,{useCallback, useEffect,useState} from "react";
import "./Blogs.css"
import BlogItem from "./BlogsItem";
import { supabase } from "../../superbase";
import useTranslatorCategory from "../../hooks/useTranslatetorCategory";
import { useNavigate } from "react-router-dom";
import useRelativeTime from "../../hooks/useRelativeTime";

const Blogs=({blogs})=>{
    const [img, setImg] = useState([]);

    const [imgSrc, setImgSrc] = useState(null);
    const [imageUrl, setImageUrl] = useState()
    const [avatarUrl, setAvatarUrl] = useState()
    const translator=useTranslatorCategory
    const [paragraph, setParagraph] = useState([]);
    const [users,setUser]=useState(null)
    const [isUser,setIsUser]=useState(false)
   
    
 
    const timeFormat=useRelativeTime
    useEffect(() => {
      
      
        filterPosts(blogs)
        checkExistUser()
        
       
        
    }, [blogs]);

    const updateBlogRate=async(id)=>{
        
          try {
        if(isUser){
            const {user}=users
           const {err}=await supabase.from('vote')
           .insert({blog_id:id,user_id:user?.id,posetive_vote:true})
           
           
           if(err)throw err

           
           
        }         
          } catch (error) {
              console.log(error);
              
          }

      }
    const removeBlogRate=async(id)=>{
        
          try {
        if(isUser){
            const {user}=users
           const {err}=await supabase.from('vote')
           .delete()
           .eq("blog_id",id)
           
           
           if(err)throw err

           
           
        }         
          } catch (error) {
              console.log(error);
              
          }

      }
    
      const checkExistUser=async()=>{
          try{
              const {data,err}=await supabase.auth.getUser()
              if(err) throw err
               
              setUser(data)
               
               
              if(!data){
                  alert("please login")
                  setIsUser(false)
              }
              else{
                  setIsUser(true)
              }
          }
          catch(err){
              console.log(err);
              
          }
      }



    const downloadImage =async (path) => {

        try {
            const { data,error } =await supabase.storage.from('avatar').createSignedUrl(path,60);
            if (error) throw error;

        
        //     const url= URL.createObjectURL(data)
        //    console.log(url);
           
            setAvatarUrl(data);
        }
        catch (error) {
            console.log(error.message);
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


        filterImage(data);
        filtetPargraph(data);
  avatarImg(array)
    };
    const filterImage = (posts) => {
        const imgFilterd = posts.filter(item => item.includes("img"));

        setImg(imgFilterd[0]);
    };
    const filtetPargraph =(posts) => {
        const paragraphFilterd = posts.filter(item => item.includes("<p"));
        setParagraph(paragraphFilterd);
    };
    const avatarImg=(avatar)=>{
        let author=null
        avatar.forEach(blog => {
         
              author=blog.post_author;
               


            
        });
     
        
        
        setImgSrc(author?.avatar_url)
    }
 

    return(
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
                                        <h3 className="blog-list--title__txt">آخرین مطالب</h3>
                                    </div>
           </div>
         {
            blogs.map((item)=>{
                const {firstName,lastName}=item?.post_author
                return(
                    <BlogItem
                      key={item?.id}
                      id={item?.id}
                      title={item?.post_title}
                      category={translator(item?.post_type)}
                      img={img}
                      fullName={`${firstName} ${lastName}`}
                      avatar={avatarUrl}
                      paragraphs={paragraph}
                      userId={users?.user?.id}
                      date={timeFormat(item?.post_date)}
                      clickRate={()=>updateBlogRate(item?.id)}
                      removeRate={()=>removeBlogRate(item.id)}
                    />
                )
            })
        }

     
       </div>
    )
}
export default Blogs