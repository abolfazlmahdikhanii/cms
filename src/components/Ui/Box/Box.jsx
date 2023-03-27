import React from "react";
import "./Box.css"

const Box=(props)=>{
    return(
        <div className={`box ${props.type&&props.type==="category"?"box-category":''} ${props.modal?'box--modal':''}`}>
            {props.children}
        </div>
    )
}

export default Box