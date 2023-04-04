import React,{useState} from "react";
import useFilterPargraph from "../../../hooks/useFilterParagraph";
import useRelativeTime from "../../../hooks/useRelativeTime";
import AlertDialog from "../../../components/Ui/AlertDialog/AlertDialog";
import BlogCard from "../../../components/Ui/BlogCard/BlogCard";

const ShareList = ({ blogs,session,show }) => {
    const [showAlert, setShowAlert] = useState(false);
    const [blogId, setBlogId] = useState(null);
    const filterParagraph = useFilterPargraph;
    const relativeTime = useRelativeTime;
    let cls="diactive-container"
    const removeBlogHandler = (id) => {

        setShowAlert(true);
        setBlogId(id);
    };

    if(show==="share"){

        cls="active-container"
    }

    return (
        
        <div className={cls}>
            {
                blogs?.map((item) => {
                    return (

                        <BlogCard
                            key={item?.id}
                            title={item?.post_title}
                            date={relativeTime(item?.post_date)}
                            content={filterParagraph(item?.post_content).join("")}
                            remove={() => removeBlogHandler(item?.id)}
                        />

                    );
                })
            }

            <AlertDialog show={showAlert} close={() => setShowAlert(false)} id={blogId} session={session} type="share" />
        </div >
    );
};

export default ShareList;