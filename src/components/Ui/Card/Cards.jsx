import React from "react";
import Box from "../Box/Box";
import CardItem from "./CardItem";
import "./Cards.css";
import blogs from "../../../assets/blogs.svg";
import blogReject from "../../../assets/blogs-reject.svg";
import star from "../../../assets/star.svg";


const Cards = (props) => {

    const info = [
        {
            icon: blogs,
            title: "مقالات منتشر شده",
            subTitle: "20 مقاله",
            iconColor: "#3b82f6"
        },
        {
            icon: blogReject,
            title: "مقالات منتشر نشده",
            subTitle: "20 مقاله",
            iconColor: "#ef4444"
        },
        {
            icon: star,
            title: "امتیازات",
            subTitle: "10 ستاره",
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