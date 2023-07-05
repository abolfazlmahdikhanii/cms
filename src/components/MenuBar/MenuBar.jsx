import React, { useState,useCallback } from "react";
import "./MenuBar.css";
import { FaBold, FaItalic, FaUnderline, FaLink, FaListOl, FaListUl, FaQuoteRight, FaAlignCenter, FaAlignRight, FaAlignLeft } from "react-icons/fa";
import { IoImage, IoChevronDownSharp } from "react-icons/io5";
import BtnBlog from "../BtnBlog/BtnBlog";
import TypographyBtn from "../TypographyBtn/TypographyBtn";
import UploadModal from "../Ui/UploadModal/UploadModal";
import ModalLink from "../Ui/ModalLink/ModalLink";
const MenuBar = ({ changeHandler, editor }) => {

    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [imgSrc, setImgSrc] = useState("");
    const [changeHeading, setChangeHeading] = useState("h1");
    const [heading, setHeading] = useState(1);
    const [showModalLink, setShowModalLink] = useState(false);
    const [url, setUrl] = useState("");


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
            icon: <FaLink size={16} />,
            click: () => setShowModalLink(true)
        },
        {
            title: "img",
            icon: <IoImage size={17} />,
            click: () => setShowModal(true)
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

    const addImage = useCallback((url) => {
      
   
        let src=null
    
        if (url) {

           src= url.includes("http")||url.includes("https")?`${url}`:`https://ydvgwyanjxqhlluftkwh.supabase.co/storage/v1/object/public/uploads/${url}`
          editor.chain().focus().setImage({ src: src }).run()
        }
      }, [editor])
    
    if (!editor) {
        return null;
    }
    const setLink = () => {
      
    
        // cancelled
        if (url === null) {
          return
        }
    
        // empty
        if (url === '') {
          editor.chain().focus().extendMarkRange('link').unsetLink()
            .run()
    
          return
        }
         editor.chain().focus().extendMarkRange('link').setLink({ href: url })
      .run()
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
            <UploadModal
                show={showModal}
                close={() => setShowModal(false)}
                url={imgSrc}
                changeUrl={(url) => {
                    setImgSrc(url)
                    addImage(url)

                }}
            />

            <ModalLink
                show={showModalLink}
                close={() => setShowModalLink(false)}
                setUrl={setUrl}
                url={url}
                click={ setLink }

            />
        </>
    );
};

export default MenuBar;
