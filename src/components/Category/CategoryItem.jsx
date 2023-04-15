import React from "react";
import "./CategoryItem.css";
import {  NavLink } from "react-router-dom";
const CategoryItem = ({icon,title,bgIcon,bgItem,value,category,setCategory}) => {
    return (
        <NavLink end to={`/category/${value==="last-news"?"":value}`} className="category-item" style={{backgroundColor:bgItem}} onClick={()=>setCategory(value)}>
            <div className="category-item--icon" style={{backgroundColor:bgIcon}}>
                <p>
                    <img src={icon} alt="icon-category" />

                </p>
            </div>

            <div>
                <h4 className="category-item--title">{title}</h4>
            </div>
        </NavLink>
    );
};

export default CategoryItem;