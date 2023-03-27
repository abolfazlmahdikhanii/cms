import React from "react";
import "./UploadModal.css"
import Wrapper from "../../../hoc/Wrapper";
import Backdrop from "../Backdrop/Backdrop";
import Box from "../Box/Box";

const UploadModal = (props) => {

    return (
        <Wrapper>


            <Backdrop show={props.show} close={props.close} />

            <Box>
                <div>
                    
                </div>
            </Box>
            
                 
        </Wrapper>

    );
};

export default UploadModal