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

    useEffect(() => {
        setImgSrc("");
    }, [imgSrc]);

    const submitHandler = () => {
        props.changeUrl(url, width, height);
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
                                        type="text"
                                        value={url}
                                        onChange={(e) => {
                                            setUrl(e.target.value)
                                        
                                        
                                        }}
                                    />
                                </div>
                          
                                <div className="nav-btn">
                                    <button className="btn-action btn-item" onClick={submitHandler}>اپلود</button>
                                    <button className="btn-action btn-item" onClick={() => setImgSrc(imgSrc)}>پیش نمایش</button>
                                </div>
                            </div>

                            <div>
                                <img
                                    src={url ? url : `https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png`}
                                    className="blog-img"
                                    style={{ height: '31rem', width: "100%", objectFit: "cover" }}
                                    alt="" />
                            </div>
                        </div>

                    </section>
                    {/* image with file */}
                    <section className={`modal-upload--url ${tab === 'file' ? 'modal-upload--show' : ''}`}>
                        <div className="modal-upload--url__row-2">
                     

                            <div>
                                <Uploader url={imgSrc} onUpload={(imgSrc) => setImgSrc(imgSrc)} />
                                <div className="nav-btn">
                                    <button className="btn-action btn-item" onClick={submitHandler}>اپلود</button>

                                </div>
                            </div>
                        </div>

                    </section>
                </Box>
            </section>


        </Wrapper>

    );
};

export default UploadModal;