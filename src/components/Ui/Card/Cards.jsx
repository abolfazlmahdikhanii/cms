import React from "react";
import Box from "../Box/Box";
import CardItem from "./CardItem";
import "./Cards.css";
import blogs from "../../../assets/blogs.svg";
import blogReject from "../../../assets/blogs-reject.svg";
import star from "../../../assets/star.svg";


const Cards = ({starTotal,draftTotal,shareTotal}) => {

    const info = [
        {
            icon: blogs,
            title: "مقالات منتشر شده",
            subTitle: `${shareTotal} مقاله`,
            iconColor: "#3b82f6"
        },
        {
            icon: blogReject,
            title: "مقالات منتشر نشده",
            subTitle: `${draftTotal} مقاله`,
            iconColor: "#ef4444"
        },
        {
            icon: star,
            title: "امتیازات",
            subTitle: `${starTotal} ستاره`,
            iconColor: "#f59e0b"
        }
    ];
    return (
        <div className="cards">
            {
                info.map((item, i) => {
                    return (
                        <Box key={i}>
                            <CardItem
                                {...item}
                            />
                        </Box>
                    );
                })
            }


        </div>


    );
};

export default Cards;