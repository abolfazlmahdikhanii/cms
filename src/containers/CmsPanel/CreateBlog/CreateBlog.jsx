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
import MenuBar from "../../../components/MenuBar/MenuBar";





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
    const toastOption = {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: true,
        theme: "colored",
        style: { fontFamily: "shabnam,sans-serif" }
    };

    const match = useParams();
    const history = useLocation();
    const navigate = useNavigate();

    useEffect(() => {





        if (match?.id) {
            getBLogData(match?.id);
        }

        return (() => {
            setElement([]);
            //     setTitle("")
            setTag([]);
            setType("");
            setContent([]);
        });





    }, [history.pathname, title]);


    const getBLogData = async (id) => {
        try {
            setLoading(true);

            const { data, err } = await supabase.from("blogs").select(" post_title,post_content, post_status,  post_tags, comment_status, post_type")
                .eq("id", id)
                .single();


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
            if (!title || !unique) throw error;

            const { error } = await supabase.from("blogs").insert({ post_title: title, post_content: unique, post_status: status, post_author: user.id, post_tags: tag, comment_status: commentStatus, post_type: type });

            if (error) throw error;
            toast.success("پست شما با موفقیت ایجاد شد ", toastOption);
            setContent([]);

        } catch (error) {
            toast.error("ایجاد پست جدید با مشکل مواجه شد", toastOption);

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

            toast.success("پست شما با موفقیت ویرایش شد ", toastOption);



        } catch (error) {
            setLoading(false);
            toast.success("ویرایش پست شما با خطا مواجه شد", toastOption);


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
                <div className="share-blog__btn btn-item">
                    <button className=" btn-item__status "
                        onClick={submitFormHandler}
                    >
                     
                            <p className="btn-item__txt">{status === "share" ? "انتشار مقاله" : "ذخیره در پیش نویس"}</p>
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
                <Box>
                    <input type="text" placeholder="عنوان مقاله را وارد نمایید" className="form-control__input form-control__input-title"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </Box>



                <Box>
                    <section className="container-blog">
                        <section className="nav-btn">

                           <MenuBar changeHandler={changElementHandler}/>



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
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
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