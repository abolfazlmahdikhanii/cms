import React from "react";
import "./Box.css"

const Box=({type,key,children,modal})=>{
    return(
        <div   key={key}  className={`box ${type&&type==="category"?"box-category":''} ${modal?'box--modal':''}`}>
            {children}
        </div>
    )
}

export default Box