
import { useState,useEffect } from "react";
import Cards from "../../../components/Ui/Card/Cards";
import { supabase } from "../../../superbase";


const Dashboard = ({session}) => {
    const [blogs,setBlogs]=useState([])
    const [draftBlogs,setDraftBlogs]=useState(0)
    const [shareBlogs,setShareBlogs]=useState(0)
    const [star,setStar]=useState(0)

    useEffect(()=>{
        getUserBlogs()
        filterBlogs(blogs)
    },[blogs])


    const getUserBlogs = async () => {
        try {
           
            const { user } = session;
            const { data, error } = await supabase.from("blogs").select("post_status")
                .eq("post_author", user?.id)
  

            if (error) throw error;



            setBlogs(data);
   
         


        } catch (error) {
  
            console.log(error);

        }
      
    };

   const filterBlogs=(blogs=blogs)=>{
const filterDraftBlogs=blogs?.filter((blog)=>blog.post_status==="draft")
setDraftBlogs(filterDraftBlogs.length)
const filterShareBlogs=blogs?.filter((blog)=>blog.post_status==="share")
setShareBlogs(filterShareBlogs.length)
setStar(blogs.length*2)
   }

    return (
        <>
            <Cards starTotal={star} draftTotal={draftBlogs} shareTotal={shareBlogs}/>
        </>
    );
};
export default Dashboard;