import React,{useState} from "react";
import "./UploadModal.css";
import Wrapper from "../../../hoc/Wrapper";
import Backdrop from "../Backdrop/Backdrop";
import Box from "../Box/Box";

const UploadModal = (props) => {
    const [url, setUrl] = useState("");
    const [imgSrc, setImgSrc] = useState("");

    return (
        <Wrapper>


            <Backdrop show={props.show} close={props.close} />

            <section className="modal-upload" >
                <Box modal={true}>
                    <div className="nav-btn">
                        <div className="btn-item">
                            افزودن با آدرس
                        </div>
                        <div className="btn-item">
                            افزودن فایل
                        </div>
                    </div>
                    {/* image with url */}
                    <section className="modal-upload--url">
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
                                    <button className="btn-action btn-item">اپلود</button>
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
                </Box>
            </section>


        </Wrapper>

    );
};

export default UploadModal;