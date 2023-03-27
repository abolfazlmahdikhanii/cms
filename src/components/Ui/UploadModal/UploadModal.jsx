import React from "react";
import "./UploadModal.css";
import Wrapper from "../../../hoc/Wrapper";
import Backdrop from "../Backdrop/Backdrop";
import Box from "../Box/Box";

const UploadModal = (props) => {

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
                                <div className="form-control">
                                    <p className="form-control__txt">آدرس عکس</p>
                                    <input
                                        className="form-control__input"
                                        type="url"
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
                            </div>
                        </div>
                    </section>
                </Box>
            </section>


        </Wrapper>

    );
};

export default UploadModal;