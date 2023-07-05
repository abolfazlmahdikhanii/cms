import React, { useState, useEffect } from "react";
import "./UploadModal.css";
import Wrapper from "../../../hoc/Wrapper";
import Backdrop from "../Backdrop/Backdrop";
import Box from "../Box/Box";
import Uploader from "../../Uploader/Uploader";

const UploadModal = (props) => {
    const [url, setUrl] = useState("");
    const [imgSrc, setImgSrc] = useState("");
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");
    const [tab, setTab] = useState('url');


  

    const submitHandler = () => {
        props.changeUrl(imgSrc||url, width, height);
        props.close()
    };

    return (
        <Wrapper>


            <Backdrop show={props.show} close={props.close} />

            <section className={`modal-upload ${!props.show ? 'modal-upload--hidden' : ''}`} >
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
                            
                        }}>
                            افزودن فایل
                        </div>
                    </div>
                    {/* image with url */}
                    <section className={`modal-upload--url ${tab === 'url' ? 'modal-upload--show' : ''}`}>
                        <div className="">
                            <div className="modal-upload__form">
                                <div className="form-control form-control--modal">
                                    <p className="form-control__txt">آدرس عکس</p>
                                    <input
                                        className="form-control__input"
                                        type="text"
                                        value={imgSrc}
                                        onChange={(e) => {
                                            setImgSrc(e.target.value)
                                        
                                        
                                        }}
                                    />
                                </div>
                                <div>
                             {
                                imgSrc&&(
                                    <img
                                    src={imgSrc ? imgSrc : `https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png`}
                                    className="blog-img"
                                    style={{ height: '20rem', width: "100%", objectFit: "cover" }}
                                    alt="" />
                                )
                             }
                            </div>
                          
                            </div>
                            <div className="nav-btn">
                                    <button className="btn-action btn-item" onClick={submitHandler}>اپلود</button>
                                    <button className="btn-action btn-item" onClick={() => setImgSrc(imgSrc)}>پیش نمایش</button>
                                </div>
                           
                           
                        </div>

                    </section>
                    {/* image with file */}
                    <section className={`modal-upload--url ${tab === 'file' ? 'modal-upload--show' : ''}`}>
                        <div className="">
                     

                            <div className="uploader-box">
                                <Uploader url={url} onUpload={(url) => setUrl(url)} />
                             
                            </div>
                            <div className="nav-btn">
                                    <button className="btn-action btn-item" onClick={submitHandler}>ثبت تصویر</button>

                                </div>
                        </div>

                    </section>
                </Box>
            </section>


        </Wrapper>

    );
};

export default UploadModal;