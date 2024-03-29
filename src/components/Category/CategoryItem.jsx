import React,{useEffect} from "react";
import "./CategoryItem.css";
import Loader from "../Ui/Loader/Loader";

const CategoryItem = ({icon,title,bgIcon,bgItem,activeItem,value,category,setCategory}) => {
  
    return (
    
        <div className="category-item" style={{backgroundColor:bgItem}}>
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