import React from "react";
import "./Alert.css"
import Wrapper from "../../../hoc/Wrapper";


const Alert=({show,children,type})=>{

    return(
        <Wrapper>
            <div className={`alert-message ${type} ${!show?'alert-message--hidden':''}`}>
                {children}
            </div>
        </Wrapper>
    )
}

export default Alert
