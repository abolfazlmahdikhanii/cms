import React, { useState, useEffect } from "react";
import sanitizeHtml from 'sanitize-html';
import { toast } from 'react-toastify';
import "./Create-blog.css";
import Box from "../../../components/Ui/Box/Box";
import Element from "../../../components/Element/Element.jsx";
import { supabase } from "../../../superbase";
import StatusBlogMenu from "../../../components/StatusBlogMenu/StatusBlogMenu";
import Loader from "../../../components/Ui/Loader/Loader";
import { useLocation, useNavigate, useParams } from "react-router-dom";





const CreateBlog = (props) => {
    const [loading, setLoading] = useState(false);
    const [element, setElement] = useState([]);
    const [tab, setTab] = useState("category");
    const [img, setImg] = useState([]);
    const [status, setStatus] = useState("draft");
    const [title, setTitle] = useState("");

    const [showMenu, setshowMenu] = useState(false);
    const [content, setContent] = useState([]);
    const [tag, setTag] = useState([]);
    const [tagContent, setTagContent] = useState("");
    const [commentStatus, setCommentStatus] = useState(true);
    const [type, setType] = useState("");

    const data = [];
    const newData = [];
    const toastOption={
        position: "bottom-right",
        autoClose:1000,
         hideProgressBar: true,
         theme:"colored",
         style:{fontFamily:"shabnam,sans-serif"}
    }

    const match = useParams();
    const history = useLocation();
    const navigate = useNavigate();

    useEffect(() => {

      

       
       
        if (match?.id) {
            getBLogData(match?.id);
        }
       
        return(()=>{
            setElement([])
        //     setTitle("")
            setTag([])
            setType("")
            setContent([])
        })





    }, [history.pathname,title]);


    const getBLogData = async (id) => {
        try {
            setLoading(true);

            const { data, err } = await supabase.from("blogs").select(" post_title,post_content, post_status,  post_tags, comment_status, post_type")
                .eq("id", id)
                .single()


            if (err) throw err;

            setTitle(data.post_title);
            setTag(data.post_tags);
            setStatus(data.post_status);
            setType(data.post_type);
            setCommentStatus(data.comment_status);
            splitContent(data?.post_content);

        }
        catch (err) {
            console.log(err);
            setLoading(false);
        }
        finally {
            setLoading(false);
        }
    };

    const removeTag = (str) => {
        if ((str === null) || (str === ''))
            return false;
        else
            str = str.toString();


        return str.replace(/(<([^>]+)>)/ig, '');
    };
    const removeImgTag = (str) => {
        const clean = sanitizeHtml(str, {
            allowedTags: ['img'],



        });
        const newStr = clean.split(" ").find((item) => item.includes("src=")).slice(5, -1);
        

        return newStr;



    };
    const splitContent = (arr) => {
        for (const item of arr) {


           

            if (item.contentTag.includes("<h2")) {
                newData.push({
                    id: item.id,
                    name: "title",
                    value: removeTag(item.contentTag)
                });
            }
            if (item.contentTag.includes("<p")) {
                newData.push({
                    id: item.id,
                    name: "txt",
                    value: removeTag(item.contentTag)
                });
            }
            if (item.contentTag.includes("<img")) {


                newData.push({
                    id: item.id,
                    name: "img",
                    value: removeImgTag(item.contentTag)
                });


            }


        }
        const unique = [...new Set(newData.map(item => item))];
        console.log(unique);
        
        setElement(unique);
    };






    const formHandler = (e) => {
        e.preventDefault();
    };


    const submitFormHandler = async (e) => {
        e.preventDefault();




        for (const item of element) {
            if (item.value !== "" && 'value' in item) {

                if (item.name === "title") {
                    data.push({
                        id: item.id,
                        style: {},
                        contentTag: `<h2 className="title-posts">${item.value}</h2>`
                    });
                }
                if (item.name === "txt") {
                    data.push({
                        id: item.id,
                        style: {},
                        contentTag: `<p>${item.value}</p>`
                    });
                }
                if (item.name === "img") {
                    if (item.value.includes("https") || item.value.includes("http")) {
                        data.push({
                            id: item.id,
                            style: {},
                            contentTag: `<img loading='lazy' src='${item.value}'>`
                        });
                    }
                    else {
                        data.push({
                            id: item.id,
                            style: {},
                            contentTag: `<img loading='lazy' src='https://ydvgwyanjxqhlluftkwh.supabase.co/storage/v1/object/public/uploads/${item.value}'>`
                        });
                    }
                }
            }

        }





        if (match?.id) {
            updateBlogData(match?.id, data);
        }
        else {
            setBlogData();
        }




    };
    const setBlogData = async () => {
        try {
            setLoading(true);
            const unique = [...new Set(data.map(item => item))];

            setContent(unique);
            const { user } = props.user;
            if(!title||!unique)throw error
            
            const { error } = await supabase.from("blogs").insert({ post_title: title, post_content: unique, post_status: status, post_author: user.id, post_tags: tag, comment_status: commentStatus, post_type: type });

            if (error) throw error;
            toast.success("پست شما با موفقیت ایجاد شد ",toastOption)
            setContent([]);

        } catch (error) {
            toast.error("ایجاد پست جدید با مشکل مواجه شد",toastOption)

            setLoading(false);
        }
        finally {
            setLoading(false);
        }
    };
    const updateBlogData = async (id, arr) => {
        try {
            setLoading(true);
            const unique = [...new Set(arr.map(item => item))];

            console.log(unique);

            setContent(unique);
            const { user } = props.user;
            const { data, error } = await supabase.from("blogs").update({ post_title: title, post_content: unique, post_status: status, post_author: user.id, post_tags: tag, comment_status: commentStatus, post_type: type }).eq("id", id);

            if (error) throw error;

            toast.success("پست شما با موفقیت ویرایش شد ",toastOption)



        } catch (error) {
            setLoading(false);
            toast.success("ویرایش پست شما با خطا مواجه شد",toastOption)


        }
        finally {
            setLoading(false);
        }
    };
    const submitFormTagHanlder = (e) => {
        e.preventDefault();

        if (tagContent !== "") {
            setTag((prevState) => {
                return [
                    ...prevState, tagContent
                ];
            });
            setTagContent("");
        }


    };

    const changElementHandler = (el) => {
        setElement((prev) => {
            return [
                ...prev,
                {
                    id: crypto.randomUUID(),
                    name: el
                }
            ];
        });


    };
    const changeInputValueHandler = (e, id, name) => {
        const values = [...element];
        const findInput = values.find((item) => item.id === id);
        if (name === "img") {
            findInput.value = e;


        }
        else {
            findInput.value = e.target.value;
        }
        setElement(values);


    };

    const changeStatusHanlder = (e) => {

        let statusContent = e.target.dataset.value;


        console.log(statusContent);

        setStatus(statusContent);




    };

    const removeTagHandler = (index) => {
        const tags = [...tag];
        tags.splice(index, 1);

        setTag(tags);



    };

    const changeStatusHandler = (e) => {
        if (e.target.checked) setCommentStatus(true);
        else setCommentStatus(false);


    };
    return (
        <>
            <Loader show={loading} />
            <div action="#" className="form-blog" >

                <Box>
                    <input type="text" placeholder="عنوان مقاله را وارد نمایید" className="form-control__input form-control__input-title"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </Box>



                <Box>
                    <section className="container-blog">
                        <section className="nav-btn">

                            <div className="btn-item" onClick={() => changElementHandler("img")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <g id="vuesax_outline_gallery" data-name="vuesax/outline/gallery" transform="translate(-364 -252)">
                                        <g id="gallery">
                                            <path id="Vector" d="M13.75,21.5h-6C2.32,21.5,0,19.18,0,13.75v-6C0,2.32,2.32,0,7.75,0h6c5.43,0,7.75,2.32,7.75,7.75v6C21.5,19.18,19.18,21.5,13.75,21.5Zm-6-20C3.14,1.5,1.5,3.14,1.5,7.75v6C1.5,18.36,3.14,20,7.75,20h6C18.36,20,20,18.36,20,13.75v-6c0-4.61-1.64-6.25-6.25-6.25Z" transform="translate(365.25 253.25)" fill="currentColor" />
                                            <path id="Vector-2" data-name="Vector" d="M2.75,5.5A2.75,2.75,0,1,1,5.5,2.75,2.748,2.748,0,0,1,2.75,5.5Zm0-4A1.25,1.25,0,1,0,4,2.75,1.25,1.25,0,0,0,2.75,1.5Z" transform="translate(370.25 257.25)" fill="currentColor" />
                                            <path id="Vector-3" data-name="Vector" d="M.747,8.453a.746.746,0,0,1-.41-1.37l4.93-3.31a2.988,2.988,0,0,1,3.55.19l.33.29a1.473,1.473,0,0,0,1.84,0l4.16-3.57a2.986,2.986,0,0,1,3.8,0l1.63,1.4a.752.752,0,0,1-.98,1.14l-1.63-1.4a1.488,1.488,0,0,0-1.85,0l-4.16,3.57a2.986,2.986,0,0,1-3.8,0l-.33-.29a1.487,1.487,0,0,0-1.73-.08l-4.93,3.31A.813.813,0,0,1,.747,8.453Z" transform="translate(365.923 263.247)" fill="currentColor" />
                                            <path id="Vector-4" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(364 252)" fill="none" opacity="0" />
                                        </g>
                                    </g>
                                </svg>
                                <p className="btn-item__txt">افزودن تصویر</p>
                            </div>
                            <div className="btn-item" onClick={() => changElementHandler("title")}>

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <g id="vuesax_outline_document-text" data-name="vuesax/outline/document-text" transform="translate(-172 -188)">
                                        <g id="document-text">
                                            <path id="Vector" d="M13.75,21.5h-6C2.32,21.5,0,19.18,0,13.75v-6C0,2.32,2.32,0,7.75,0h5a.755.755,0,0,1,.75.75.755.755,0,0,1-.75.75h-5C3.14,1.5,1.5,3.14,1.5,7.75v6C1.5,18.36,3.14,20,7.75,20h6C18.36,20,20,18.36,20,13.75v-5a.75.75,0,0,1,1.5,0v5C21.5,19.18,19.18,21.5,13.75,21.5Z" transform="translate(173.25 189.25)" fill="currentColor" />
                                            <path id="Vector-2" data-name="Vector" d="M8.75,9.5h-4C1.33,9.5,0,8.169,0,4.749v-4A.741.741,0,0,1,.46.059a.757.757,0,0,1,.82.16l8,8A.751.751,0,0,1,8.75,9.5ZM1.5,2.559v2.19C1.5,7.329,2.17,8,4.75,8H6.94Z" transform="translate(185.25 189.251)" fill="currentColor" />
                                            <path id="Vector-3" data-name="Vector" d="M6.75,1.5h-6A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0h6A.755.755,0,0,1,7.5.75.755.755,0,0,1,6.75,1.5Z" transform="translate(178.25 200.25)" fill="currentColor" />
                                            <path id="Vector-4" data-name="Vector" d="M4.75,1.5h-4A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0h4A.755.755,0,0,1,5.5.75.755.755,0,0,1,4.75,1.5Z" transform="translate(178.25 204.25)" fill="currentColor" />
                                            <path id="Vector-5" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(172 188)" fill="none" opacity="0" />
                                        </g>
                                    </g>
                                </svg>

                                <p className="btn-item__txt">افزودن عنوان</p>
                            </div>
                            <div className="btn-item" onClick={() => changElementHandler("txt")}>

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <g id="vuesax_outline_document-text" data-name="vuesax/outline/document-text" transform="translate(-172 -188)">
                                        <g id="document-text">
                                            <path id="Vector" d="M13.75,21.5h-6C2.32,21.5,0,19.18,0,13.75v-6C0,2.32,2.32,0,7.75,0h5a.755.755,0,0,1,.75.75.755.755,0,0,1-.75.75h-5C3.14,1.5,1.5,3.14,1.5,7.75v6C1.5,18.36,3.14,20,7.75,20h6C18.36,20,20,18.36,20,13.75v-5a.75.75,0,0,1,1.5,0v5C21.5,19.18,19.18,21.5,13.75,21.5Z" transform="translate(173.25 189.25)" fill="currentColor" />
                                            <path id="Vector-2" data-name="Vector" d="M8.75,9.5h-4C1.33,9.5,0,8.169,0,4.749v-4A.741.741,0,0,1,.46.059a.757.757,0,0,1,.82.16l8,8A.751.751,0,0,1,8.75,9.5ZM1.5,2.559v2.19C1.5,7.329,2.17,8,4.75,8H6.94Z" transform="translate(185.25 189.251)" fill="currentColor" />
                                            <path id="Vector-3" data-name="Vector" d="M6.75,1.5h-6A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0h6A.755.755,0,0,1,7.5.75.755.755,0,0,1,6.75,1.5Z" transform="translate(178.25 200.25)" fill="currentColor" />
                                            <path id="Vector-4" data-name="Vector" d="M4.75,1.5h-4A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0h4A.755.755,0,0,1,5.5.75.755.755,0,0,1,4.75,1.5Z" transform="translate(178.25 204.25)" fill="currentColor" />
                                            <path id="Vector-5" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(172 188)" fill="none" opacity="0" />
                                        </g>
                                    </g>
                                </svg>

                                <p className="btn-item__txt">افزودن متن</p>
                            </div>
                            <div className="btn-item" onClick={() => changElementHandler("link")}>

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <g id="vuesax_outline_link-square" data-name="vuesax/outline/link-square" transform="translate(-620 -316)">
                                        <g id="link-square">
                                            <path id="Vector" d="M3.83,10.93H3.76A4.044,4.044,0,0,1,1.2,9.67a4.463,4.463,0,0,1,0-6.09l2.19-2.3a4.039,4.039,0,0,1,5.9,0,4.463,4.463,0,0,1,0,6.09L8.2,8.52A.75.75,0,1,1,7.11,7.49L8.2,6.34a2.938,2.938,0,0,0,0-4.02,2.62,2.62,0,0,0-3.73,0L2.28,4.62a2.938,2.938,0,0,0,0,4.02,2.564,2.564,0,0,0,1.62.8.751.751,0,0,1,.67.82A.74.74,0,0,1,3.83,10.93Z" transform="translate(624.35 321.84)" fill="currentColor" />
                                            <path id="Vector-2" data-name="Vector" d="M4.15,10.935A4.012,4.012,0,0,1,1.2,9.655a4.463,4.463,0,0,1,0-6.09l1.09-1.15a.75.75,0,1,1,1.09,1.03L2.29,4.6a2.938,2.938,0,0,0,0,4.02,2.611,2.611,0,0,0,3.73,0l2.19-2.3a2.938,2.938,0,0,0,0-4.02,2.564,2.564,0,0,0-1.62-.8.751.751,0,0,1-.67-.82.738.738,0,0,1,.82-.67A4.094,4.094,0,0,1,9.3,1.265a4.463,4.463,0,0,1,0,6.09l-2.19,2.3A4.05,4.05,0,0,1,4.15,10.935Z" transform="translate(629.16 323.225)" fill="currentColor" />
                                            <path id="Vector-3" data-name="Vector" d="M13.75,21.5h-6C2.32,21.5,0,19.18,0,13.75v-6C0,2.32,2.32,0,7.75,0h6c5.43,0,7.75,2.32,7.75,7.75v6C21.5,19.18,19.18,21.5,13.75,21.5Zm-6-20C3.14,1.5,1.5,3.14,1.5,7.75v6C1.5,18.36,3.14,20,7.75,20h6C18.36,20,20,18.36,20,13.75v-6c0-4.61-1.64-6.25-6.25-6.25Z" transform="translate(621.25 317.25)" fill="currentColor" />
                                            <path id="Vector-4" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(620 316)" fill="none" opacity="0" />
                                        </g>
                                    </g>
                                </svg>






                                <p className="btn-item__txt">افزودن لینک</p>
                            </div>

                            <div className="share-blog__btn btn-item"


                            >
                                <button className=" btn-item__status "
                                    onClick={submitFormHandler}
                                >
                                    <div className="btn-item__status-row">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <g id="vuesax_outline_directbox-send" data-name="vuesax/outline/directbox-send" transform="translate(-300 -188)">
                                                <g id="directbox-send">
                                                    <path id="Vector" d="M2.747,7.5A.755.755,0,0,1,2,6.749V2.559l-.72.72a.75.75,0,0,1-1.06-1.06l2-2a.753.753,0,0,1,.82-.16.741.741,0,0,1,.46.69v6A.755.755,0,0,1,2.747,7.5Z" transform="translate(309.253 189.251)" fill="currentColor" />
                                                    <path id="Vector-2" data-name="Vector" d="M2.747,3.5a.742.742,0,0,1-.53-.22l-2-2A.75.75,0,0,1,1.277.218l2,2a.754.754,0,0,1,0,1.06A.742.742,0,0,1,2.747,3.5Z" transform="translate(311.253 189.253)" fill="currentColor" />
                                                    <path id="Vector-3" data-name="Vector" d="M13.75,11.5h-8C0,11.5,0,8.45,0,5.75v-1C0,2.52,0,0,4.75,0A3.112,3.112,0,0,1,7,.75a.812.812,0,0,1,.1.09L8.12,1.92a2.312,2.312,0,0,0,3.28,0L12.42.84a.9.9,0,0,1,.1-.09A3.069,3.069,0,0,1,14.77,0c4.75,0,4.75,2.52,4.75,4.75v1C19.5,9.57,17.57,11.5,13.75,11.5Zm-9-10C1.5,1.5,1.5,2.52,1.5,4.75v1C1.5,8.49,1.5,10,5.75,10h8C16.73,10,18,8.73,18,5.75v-1c0-2.23,0-3.25-3.25-3.25a1.638,1.638,0,0,0-1.3.41l-.97,1.03a3.748,3.748,0,0,1-5.46,0L6.05,1.91A1.638,1.638,0,0,0,4.75,1.5Z" transform="translate(302.25 199.25)" fill="currentColor" />
                                                    <path id="Vector-4" data-name="Vector" d="M.75,7.455A.755.755,0,0,1,0,6.705v-2c0-1.94,0-4.35,3.68-4.7a.753.753,0,1,1,.14,1.5c-2.32.21-2.32,1.15-2.32,3.2v2A.755.755,0,0,1,.75,7.455Z" transform="translate(304.25 193.295)" fill="currentColor" />
                                                    <path id="Vector-5" data-name="Vector" d="M3.744,7.455a.755.755,0,0,1-.75-.75v-2c0-2.05,0-2.99-2.32-3.21A.751.751,0,0,1,0,.675a.738.738,0,0,1,.82-.67c3.68.35,3.68,2.76,3.68,4.7v2A.771.771,0,0,1,3.744,7.455Z" transform="translate(315.256 193.295)" fill="currentColor" />
                                                    <path id="Vector-6" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(300 188)" fill="none" opacity="0" />
                                                </g>
                                            </g>
                                        </svg>


                                        <p className="btn-item__txt">{status === "share" ? "انتشار مقاله" : "ذخیره در پیش نویس"}</p>
                                    </div>


                                </button>
                                <p className="btn-status__svg" onClick={() => setshowMenu(!showMenu)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={20} height={20}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>


                                </p>
                                <StatusBlogMenu
                                    show={showMenu}
                                    changeStatus={(e) => changeStatusHanlder(e)}
                                    close={() => setshowMenu(false)}
                                />
                            </div>

                        </section>
                        <form className="content-blog" onSubmit={formHandler}>
                            {
                                element.map((item, i) => {



                                    return (
                                        <Element value={item?.value} type={item.name} key={i} id={item.id} change={(e) => changeInputValueHandler(e, item.id, item.name)} />
                                    );
                                })
                            }


                        </form>

                    </section>
                </Box>

                <div className="creat-blog__option">

                    <Box>
                        {/* tab */}
                        <div className="blog-list--tab">
                            <div className={`blog-list__tab ${tab === "category" ? "active" : ""}`} onClick={() => setTab("category")} >دسته بندی</div>
                            <div className={`blog-list__tab ${tab === "tag" ? "active" : ""}`} onClick={() => setTab("tag")}>برچسب</div>
                            <div className={`blog-list__tab ${tab === "comment" ? "active" : ""}`} onClick={() => setTab("comment")}>وضعیت کامنت</div>
                        </div>
                        <div className={`option-control ${tab === "category" ? "option-control--active" : ""}`}>
                            <p>دسته بندی</p>
                            <div className="option-control-select">

                                <select name="" id="" className="option-control__select" value={type} onChange={(e) => setType(e.target.value)
                                }>
                                    <option > دسته بندی  را انتخاب نمایید</option>
                                    <option value="tech">فناوری</option>
                                    <option value="health">سلامت و زیبایی</option>
                                    <option value="art">فرهنگ و هنر</option>
                                    <option value="life-style">سبک زندگی</option>
                                    <option value="game">بازی و سرگرمی</option>
                                </select>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={24} height={24}>
                                    <path strokeLinecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>


                        </div>
                        <div className={`option-control ${tab === "tag" ? "option-control--active" : ""}`}>
                            <p>برچسب</p>
                            <div className="option-control_tag">
                                <div className="option-control_tag-box">
                                    {
                                        tag ? tag.map((item, i) => {
                                            return (
                                                <div key={i} className="option-control__tag-item">
                                                    <p className="option-control__tag-txt"> {item}</p>

                                                    <button className="tag-btn" onClick={() => removeTagHandler(i)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#d1d5db" width={18} height={18}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                        </svg>

                                                    </button>
                                                </div>
                                            );
                                        }) : ''
                                    }
                                </div>
                                <form className="option-control-row" onSubmit={submitFormTagHanlder}>
                                    <input type="text" className="option-control__tag-input" placeholder="اضافه کردن برچسب"
                                        value={tagContent}
                                        onChange={(e) => setTagContent(e.target.value)}
                                    />
                                    <button className="tag-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={20} height={20} className="">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                                        </svg>
                                    </button>

                                </form>
                            </div>
                        </div>
                        <div className={`option-control ${tab === "comment" ? "option-control--active" : ""}`}>
                            <p>وضعیت کامنت </p>
                            <label htmlFor="switch-chk" className="option-control__switch">
                                <input type="checkbox" className="option-control__switch-chk" id="switch-chk" onChange={(e) => changeStatusHandler(e)} />
                                <span className="option-control__switch-span"></span>
                            </label>
                        </div>
                    </Box>
                </div>
            </div >

        </>
    );
};
export default CreateBlog;