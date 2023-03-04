import React from "react";
import "./CardItem.css"


const CardItem=(props)=>{


    return(
        <div className="card">
            <div className="card-icon" style={{backgroundColor:props.iconColor}}>
               <img src={props.icon} alt="icon" />

            </div>
            <div className="card-info">
                <p className="card-info__title">
                    {props.title} 
                </p>
                <p className="card-info__sub-title">
                     {props.subTitle}
                 </p>
            </div>
        </div>
    )
}
export default CardItem