import React, { useState } from "react";
import "./MenuBar.css";
import { FaBold, FaItalic, FaUnderline, FaLink, FaListOl, FaListUl, FaQuoteRight, FaAlignCenter, FaAlignRight, FaAlignLeft } from "react-icons/fa";
import { IoImage, IoChevronDownSharp } from "react-icons/io5";
import BtnBlog from "../BtnBlog/BtnBlog";
import TypographyBtn from "../TypographyBtn/TypographyBtn";
const MenuBar = ({ changeHandler }) => {

    const [show, setShow] = useState(false);
    const [changeHeading, setChangeHeading] = useState("h1");
    const btns = [
        {
            title: "strong",
            icon: <FaBold size={16} />
        },
        {
            title: "em",
            icon: <FaItalic size={16}/>
        },
        {
            title: "ins",
            icon: <FaUnderline size={16}/>
        },
        {
            title: "a",
            icon: <FaLink size={16}/>
        },
        {
            title: "img",
            icon: <IoImage size={17} />
        },
        {
            title: "center",
            icon: <FaAlignCenter size={16}/>
        },
        {
            title: "right",
            icon: <FaAlignRight size={16}/>
        },
        {
            title: "left",
            icon: <FaAlignLeft size={16}/>
        },
        {
            title: "ul",
            icon: <FaListUl size={16}/>
        },
        {
            title: "ol",
            icon: <FaListOl size={16}/>
        },
        {
            title: "quote",
            icon: <FaQuoteRight size={16}/>
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
                    <p style={{textTransform:"uppercase"}} className="btn-item__txt" >{changeHeading}</p>
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
