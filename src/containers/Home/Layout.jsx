import React,{useState,useEffect} from "react";
import Blogs from "../../components/Blogs/Blogs";
import Category from "../../components/Category/Category";
import Slider from "../../components/Slider/Slider";
import Aside from "../../components/Aside/Aside";
import { supabase } from "../../superbase";
import Loader from "../../components/Ui/Loader/Loader";

const PAGE_SIZE = 10;

const Layout=()=>{
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [postContent, setPostContent] = useState([])
    const [page, setPage] = useState(1)
    const [category,setCategory]=useState("last-news")
    const categoryList=["tech","game","art","life-style","health"]
    useEffect(() => {
        getBlogData()
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);


    }, [category]);
    const getBlogData = async () => {
        try {
            console.log(category);
            
            setLoading(true);
      
            const offset = (page - 1) * PAGE_SIZE;
            
            let { data: blog, error } = await supabase
                .from('blogs')
                .select(`id,post_date,post_title,post_content,post_comment,post_type
                ,post_author(
                    firstName,
                    lastName,
                    avatar_url,
                    username
                )`)
                // .range(offset,offset+PAGE_SIZE-1)
                .eq(category!=="last-news"&&"post_type",category)
      
                    
            
            

            if (error)  throw error;
        

          
       
            


            setBlogs(blog);
            setPage((prev)=>prev+1)


        } catch (error) {

            console.log(error);

        }
        finally {
            setLoading(false);
        }

    };

    const handleScroll=()=>{
        if(window.innerHeight+document.documentElement.scrollHeight===document.documentElement.offsetHeight){
            getBlogData()
        }
    }
   
    return(
        <>
               {loading ?
                <Loader show={loading} />
                :
                (
                    <div>
                        <Slider />
                        <Category category={category} setCategory={setCategory}/>


                        <section className="main-container">
                            <main className="blog-list">


                                <Blogs blogs={blogs} category={category} />

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