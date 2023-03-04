import React from "react";
import "./Loader.css"
import Wrapper from "../../../hoc/Wrapper";
import Backdrop from "../Backdrop/Backdrop";
import { ThreeDots } from 'react-loader-spinner';

const Loader = (props) => {

    return (
        <Wrapper>


            <Backdrop show={props.show} />

            <div className={`loader-box ${!props.show ? 'loader--hidden' : ''}`}>
                <p className="brand-name">digimag</p>

                <ThreeDots
                    height="45"
                    width="45"
                    radius="9"
                    color="#6366f1"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
            </div>
        </Wrapper>

    );
};

export default Loader