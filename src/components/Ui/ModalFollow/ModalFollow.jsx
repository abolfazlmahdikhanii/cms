import React from "react";
import "./ModalFollow.css"
import Box from "../Box/Box";
import Wrapper from "../../../hoc/Wrapper";
import Backdrop from "../../Ui/Backdrop/Backdrop"

const ModalFollow = () => {
    return (
        <Wrapper>

            <Backdrop  />

            <section className="modal-follow">
                <Box modal={true}>
                 <div className="row follow-nav">
                    <div className="blog-list__tab">
                        دنبال کننده ها
                    </div>
                    <div className="blog-list__tab">
                        دنبال شده ها
                    </div>
                 </div>
                </Box>
            </section>
        </Wrapper>
    );
};

export default ModalFollow;
