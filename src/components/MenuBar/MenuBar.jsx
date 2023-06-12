import React, { useState } from "react";
import "./MenuBar.css";
import { FaBold, FaItalic, FaUnderline, FaLink, FaListOl, FaListUl, FaQuoteRight, FaAlignCenter, FaAlignRight, FaAlignLeft } from "react-icons/fa";
import { IoImage, IoChevronDownSharp } from "react-icons/io5";
import BtnBlog from "../BtnBlog/BtnBlog";
import TypographyBtn from "../TypographyBtn/TypographyBtn";
const MenuBar = ({ changeHandler, editor }) => {

    const [show, setShow] = useState(false);
    const [changeHeading, setChangeHeading] = useState("h1");
    const [heading, setHeading] = useState(1);
    const btns = [
        {
            title: "strong",
            icon: <FaBold size={16} />,
            click: () => editor.chain().focus().toggleBold().run(),
            disable: () => !editor.can().chain().focus().toggleBold().run()
        },
        {
            title: "em",
            icon: <FaItalic size={16} />,
            click: () => editor.chain().focus().toggleItalic().run(),
            disable: () => !editor.can().chain().focus().toggleItalic().run()
        },
        {
            title: "ins",
            icon: <FaUnderline size={16} />,
            click: () => editor.chain().focus().toggleStrike().run(),
            disable: () => !editor.can().chain().focus().toggleStrike().run()
        },
        {
            title: "a",
            icon: <FaLink size={16} />
        },
        {
            title: "img",
            icon: <IoImage size={17} />
        },
        {
            title: "right",
            icon: <FaAlignRight size={16} />,
            click: () => editor.commands.setTextAlign('right'),
            disable: () => editor.commands.unsetTextAlign()
        },
        {
            title: "center",
            icon: <FaAlignCenter size={16} />,
            click: () => editor.commands.setTextAlign('center'),
            disable: () => editor.commands.unsetTextAlign()
        },
        {
            title: "left",
            icon: <FaAlignLeft size={16} />,
            click: () => editor.commands.setTextAlign('left'),
            disable: () => editor.commands.unsetTextAlign()
        },
        {
            title: "ul",
            icon: <FaListUl size={16} />,
            click: () => editor.chain().focus().toggleBulletList().run()
        },
        {
            title: "ol",
            icon: <FaListOl size={16} />,
            click: () => editor.chain().focus().toggleOrderedList().run()
        },
        {
            title: "quote",
            icon: <FaQuoteRight size={16} />,
            click: () => editor.commands.setBlockquote(),
            disable: () => editor.commands.unsetBlockquote()


        },
    ];
    if (!editor) {
        return null;
    }

    return (
        <>

            {
                btns.map((item, i) => {
                    return (
                        <BtnBlog key={i} title={item.title} click={changeHandler} onChange={item.click} disable={item.disable}>
                            {item.icon}
                        </BtnBlog>
                    );
                })
            }

            {/* heading */}
            <div className=" btn-item">
                <div className=""
                    onClick={() => {
                        changeHandler(changeHeading);
                        editor.chain().focus().toggleHeading({ level: heading }).run();
                    }}
                >
                    <p style={{ textTransform: "uppercase" }} className="btn-item__txt" >{changeHeading}</p>
                </div>
                <p className="btn-status__svg" onClick={() => setShow(!show)}>

                    <IoChevronDownSharp />

                </p>

                <TypographyBtn changeHeading={setChangeHeading} close={() => setShow(false)} show={show}
                    setHeading={setHeading} />

            </div>

        </>
    );
};

export default MenuBar;
