import React,{useState} from "react";
import useFilterPargraph from "../../../hooks/useFilterParagraph";
import useRelativeTime from "../../../hooks/useRelativeTime";
import AlertDialog from "../../../components/Ui/AlertDialog/AlertDialog";
import BlogCard from "../../../components/Ui/BlogCard/BlogCard";

const DraftList = ({ blogs,session }) => {
    const [showAlert, setShowAlert] = useState(false);
    const [blogId, setBlogId] = useState(null);
    const filterParagraph = useFilterPargraph;
    const relativeTime = useRelativeTime;
    const removeBlogHandler = (id) => {

        setShowAlert(true);
        setBlogId(id);
    };
    return (
        <div>
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

            <AlertDialog show={showAlert} close={() => setShowAlert(false)} id={blogId} session={session} type="draft" />
        </div >
    );
};

export default DraftList;