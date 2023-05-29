import React, { useState } from "react";
import "./MenuBar.css";
import { FaBold, FaItalic, FaUnderline, FaLink, FaListOl, FaListUl, FaQuoteRight } from "react-icons/fa";
import { IoImage, IoChevronDownSharp } from "react-icons/io5";
import BtnBlog from "../BtnBlog/BtnBlog";
import TypographyBtn from "../TypographyBtn/TypographyBtn";
const MenuBar = ({ changeHandler }) => {

    const [show, setShow] = useState(false);
    const [changeHeading, setChangeHeading] = useState(false);
    const btns = [
        {
            title: "bold",
            icon: <FaBold />
        },
        {
            title: "italic",
            icon: <FaItalic />
        },
        {
            title: "underline",
            icon: <FaUnderline />
        },
        {
            title: "link",
            icon: <FaLink />
        },
        {
            title: "img",
            icon: <IoImage size={17} />
        },
        {
            title: "list",
            icon: <FaListUl />
        },
        {
            title: "number-list",
            icon: <FaListOl />
        },
        {
            title: "quote",
            icon: <FaQuoteRight />
        },
    ];


    return (
        <>

            {
                btns.map((item, i) => {
                    return (
                        <BtnBlog key={i} title={item.title} click={changeHandler}>
                            {item.icon}
                        </BtnBlog>
                    );
                })
            }

            {/* heading */}
            <div className=" btn-item">
                <div className=""
                    onClick={() => changeHandler(changeHeading)}
                >
                    <p className="btn-item__txt">{changeHeading || "h1"}</p>
                </div>
                <p className="btn-status__svg" onClick={() => setShow(!show)}>

                    <IoChevronDownSharp />

                </p>

                <TypographyBtn changeHeading={setChangeHeading} close={() => setShow(false)} show={show} />

            </div>

        </>
    );
};

export default MenuBar;
