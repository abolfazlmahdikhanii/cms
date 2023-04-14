import React from "react";
import { Link } from "react-router-dom";
import useFilterImage from "../../../hooks/useFilterImage";
import useFilterPargraph from "../../../hooks/useFilterParagraph";


const ItemList = ({ title,id,username,content }) => {

    const filterImg = useFilterImage;
    const filterParagraph = useFilterPargraph;


    return (
        <Link className="aside-item" to={`/article/@${username}/${id}/${title.split(" ").join("-")}`}>
            <div className="aside-item--img" dangerouslySetInnerHTML={{ __html: filterImg(content) }}>

            </div>
            <div className="aside-item--title">
                <h3 className="search-item--title__title">
                    {title}
                </h3>


            </div>
        </Link>
    );
};

export default ItemList;
