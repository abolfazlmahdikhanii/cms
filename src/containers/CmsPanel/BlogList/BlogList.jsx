import React, { useEffect, useState } from "react";
import './BlogList.css';
import Box from "../../../components/Ui/Box/Box";
import { supabase } from "../../../superbase";
import useFilterPargraph from "../../../hooks/useFilterParagraph";
import useRelativeTime from "../../../hooks/useRelativeTime";


const BlogList = ({ session }) => {

    const [blogs, setBlogs] = useState([]);
    const filterParagraph = useFilterPargraph;
    const relativeTime=useRelativeTime
    useEffect(() => {
        getUserBlogs();
    }, [session]);

    const getUserBlogs = async () => {
        try {
            const { user } = session;
            const { data, error } = await supabase.from("blogs").select("post_title,post_content,post_date,id")
            .eq("post_author", user?.id)
            .eq("post_status","share");

            if (error) throw error;

   

            setBlogs(data);

        } catch (error) {
            console.log(error);

        }
    };
    return (
        <div>
            {
                blogs?.map((item) => {
                    return (
                        <Box key={item.id} >
                            <div className="blog-list--row" >
                                <div className="blog-list--info">
                                    <h2 className="blog-list__title">{item.post_title}</h2>
                                    <div className="blog-list__dis" dangerouslySetInnerHTML={{ __html: filterParagraph(item?.post_content).join("") }}></div>

                                </div>
                                <div className="blog-list--action">
                                    <div>
                                        <p className="blog-list--date">اخرین تغییر :  {relativeTime(item.post_date)}</p>
                                    </div>
                                    <div className="blog-list--btn-action">
                                        <button className="btn-item btn-edit">

                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                                <g id="vuesax_outline_edit" data-name="vuesax/outline/edit" transform="translate(-620 -252)">
                                                    <g id="edit">
                                                        <path id="Vector" d="M13.75,21.5h-6C2.32,21.5,0,19.18,0,13.75v-6C0,2.32,2.32,0,7.75,0h2a.755.755,0,0,1,.75.75.755.755,0,0,1-.75.75h-2C3.14,1.5,1.5,3.14,1.5,7.75v6C1.5,18.36,3.14,20,7.75,20h6C18.36,20,20,18.36,20,13.75v-2a.75.75,0,0,1,1.5,0v2C21.5,19.18,19.18,21.5,13.75,21.5Z" transform="translate(621.25 253.25)" fill="currentColor" />
                                                        <path id="Vector-2" data-name="Vector" d="M2.2,16.693a2.239,2.239,0,0,1-1.58-.62,2.25,2.25,0,0,1-.59-1.95l.43-3.01a3.468,3.468,0,0,1,.87-1.74l7.88-7.88c1.99-1.99,4.01-1.99,6,0a4.175,4.175,0,0,1,1.48,3.31,4.448,4.448,0,0,1-1.48,2.68l-7.88,7.88a3.468,3.468,0,0,1-1.74.87l-3.01.43A1.668,1.668,0,0,1,2.2,16.693Zm8.07-14.14-7.88,7.88a2.035,2.035,0,0,0-.45.89l-.43,3.01a.785.785,0,0,0,.17.68.785.785,0,0,0,.68.17l3.01-.43a1.983,1.983,0,0,0,.89-.45l7.88-7.88a3.069,3.069,0,0,0,1.04-1.77,2.776,2.776,0,0,0-1.04-2.11C12.539.942,11.439,1.393,10.269,2.553Z" transform="translate(626.301 252.997)" fill="currentColor" />
                                                        <path id="Vector-3" data-name="Vector" d="M5.687,6.447a.645.645,0,0,1-.2-.03A7.937,7.937,0,0,1,.027.957a.76.76,0,0,1,.52-.93.745.745,0,0,1,.92.52,6.425,6.425,0,0,0,4.42,4.42.755.755,0,0,1,.52.93A.736.736,0,0,1,5.687,6.447Z" transform="translate(634.163 255.383)" fill="currentColor" />
                                                        <path id="Vector-4" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(620 252)" fill="none" opacity="0" />
                                                    </g>
                                                </g>
                                            </svg>

                                            <p>ویرایش</p>
                                        </button>
                                        <button className="btn-item btn-remove">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                                <g id="trash" transform="translate(-108 -188)">
                                                    <path id="Vector" d="M18.754,2.016h-.08a78.776,78.776,0,0,0-15.8-.2l-2.04.2A.755.755,0,0,1,0,1.336a.745.745,0,0,1,.67-.82l2.04-.2a81.144,81.144,0,0,1,16.11.2.751.751,0,0,1,.67.82A.741.741,0,0,1,18.754,2.016Z" transform="translate(110.246 192.714)" fill="currentColor" />
                                                    <path id="Vector-2" data-name="Vector" d="M.751,4.47a.615.615,0,0,1-.13-.01.753.753,0,0,1-.61-.86l.22-1.31C.391,1.33.611,0,2.941,0h2.62c2.34,0,2.56,1.38,2.71,2.3l.22,1.3a.746.746,0,1,1-1.47.25L6.8,2.55c-.14-.87-.17-1.04-1.23-1.04H2.951c-1.06,0-1.08.14-1.23,1.03l-.23,1.3A.75.75,0,0,1,.751,4.47Z" transform="translate(115.749 189.25)" fill="currentColor" />
                                                    <path id="Vector-3" data-name="Vector" d="M10.812,14.361H4.392c-3.49,0-3.63-1.93-3.74-3.49L0,.8A.757.757,0,0,1,.7,0a.758.758,0,0,1,.8.7l.65,10.07c.11,1.52.15,2.09,2.24,2.09h6.42c2.1,0,2.14-.57,2.24-2.09L13.7.7a.764.764,0,0,1,.8-.7.751.751,0,0,1,.7.8l-.65,10.07C14.442,12.431,14.3,14.361,10.812,14.361Z" transform="translate(112.398 196.389)" fill="currentColor" />
                                                    <path id="Vector-4" data-name="Vector" d="M4.08,1.5H.75A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0H4.08a.755.755,0,0,1,.75.75A.755.755,0,0,1,4.08,1.5Z" transform="translate(117.58 203.75)" fill="currentColor" />
                                                    <path id="Vector-5" data-name="Vector" d="M5.75,1.5h-5A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0h5A.755.755,0,0,1,6.5.75.755.755,0,0,1,5.75,1.5Z" transform="translate(116.75 199.75)" fill="currentColor" />
                                                    <path id="Vector-6" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(108 188)" fill="none" opacity="0" />
                                                </g>
                                            </svg>
                                            <p>حذف</p>

                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Box>
                    );
                })
            }
        </div >
    );
};
export default BlogList;