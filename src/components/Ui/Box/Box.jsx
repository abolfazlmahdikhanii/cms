import React from "react";
import "./Box.css"

const Box=({type,key=undefined,children,modal})=>{
    return(
        <div   key={key}  className={`box ${type==="category"?"box-category":''} ${modal?'box--modal':''}`}>
            {children}
        </div>
    )
}

export default Box