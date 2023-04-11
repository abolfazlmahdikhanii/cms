import React from "react";
import "./CategoryItem.css";
const CategoryItem = ({icon,title,bgIcon,bgItem,value,category,setCategory}) => {
    return (
        <div data-value={value} className="category-item" style={{backgroundColor:bgItem}} onClick={()=>setCategory(value)}>
            <div className="category-item--icon" style={{backgroundColor:bgIcon}}>
                <p>
                    <img src={icon} alt="icon-category" />

                </p>
            </div>

            <div>
                <h4 className="category-item--title">{title}</h4>
            </div>
        </div>
    );
};

export default CategoryItem;