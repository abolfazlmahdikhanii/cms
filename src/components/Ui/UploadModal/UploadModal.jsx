import React, { useState,useEffect } from "react";
import "./UploadModal.css";
import Wrapper from "../../../hoc/Wrapper";
import Backdrop from "../Backdrop/Backdrop";
import Box from "../Box/Box";
import Uploader from "../../Uploader/Uploader";

const UploadModal = (props) => {
    const [url, setUrl] = useState("");
    const [imgSrc, setImgSrc] = useState("");
    const [tab, setTab] = useState('url');

    useEffect(()=>{
       setImgSrc("")
    },[])

    const submitHandler = () => {
        props.changeUrl(imgSrc);
    };

    return (
        <Wrapper>


            <Backdrop show={props.show} close={props.close} />

            <section className="modal-upload" >
                <Box modal={true}>
                    <div className="nav-btn">
                        <div className={`btn-item ${tab === 'url' ? 'tab-modal--active' : ''}`} onClick={() => {
                            setTab('url');
                            setImgSrc("");
                        }}>
                            افزودن با آدرس
                        </div>
                        <div className={`btn-item ${tab === 'file' ? 'tab-modal--active' : ''}`} onClick={() => {
                            setTab('file');
                            setImgSrc("");
                        }}>
                            افزودن فایل
                        </div>
                    </div>
                    {/* image with url */}
                    <section className={`modal-upload--url ${tab === 'url' ? 'modal-upload--show' : ''}`}>
                        <div className="modal-upload--url__row">
                            <div className="modal-upload__form">
                                <div className="form-control form-control--modal">
                                    <p className="form-control__txt">آدرس عکس</p>
                                    <input
                                        className="form-control__input"
                                        type="url"
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                    />
                                </div>
                                <div className="form-control">
                                    <p className="form-control__txt">طول عکس</p>
                                    <input
                                        className="form-control__input"
                                        type="url"
                                    />
                                </div>
                                <div className="form-control">
                                    <p className="form-control__txt">عرض عکس</p>
                                    <input
                                        className="form-control__input"
                                        type="url"
                                    />
                                </div>
                                <div className="nav-btn">
                                    <button className="btn-action btn-item" onClick={submitHandler}>اپلود</button>
                                    <button className="btn-action btn-item" onClick={() => setImgSrc(url)}>پیش نمایش</button>
                                </div>
                            </div>

                            <div>
                                <img
                                    src={imgSrc ? imgSrc : `https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png`}
                                    className="blog-img"
                                    style={{ height: '31rem', width: "100%", objectFit: "cover" }}
                                    alt="" />
                            </div>
                        </div>

                    </section>
                    {/* image with file */}
                    <section className={`modal-upload--url ${tab === 'file' ? 'modal-upload--show' : ''}`}>
                        <div className="modal-upload--url__row-2">
                            <div className="modal-upload__form">

                                <div className="form-control">
                                    <p className="form-control__txt">طول عکس</p>
                                    <input
                                        className="form-control__input"
                                        type="url"
                                    />
                                </div>
                                <div className="form-control">
                                    <p className="form-control__txt">عرض عکس</p>
                                    <input
                                        className="form-control__input"
                                        type="url"
                                    />
                                </div>
                                <div className="nav-btn">
                                    <button className="btn-action btn-item" onClick={submitHandler}>اپلود</button>

                                </div>
                            </div>

                            <div>
                                <Uploader url={imgSrc} onUpload={(imgSrc) => setImgSrc(imgSrc)} />
                            </div>
                        </div>

                    </section>
                </Box>
            </section>


        </Wrapper>

    );
};

export default UploadModal;