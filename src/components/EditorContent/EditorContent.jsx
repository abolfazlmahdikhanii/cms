import React,{useState,useEffect} from "react";


import Avatar from "../Avatar/Avatar";
import UploadModal from "../Ui/UploadModal/UploadModal";
import Uploader from "../Uploader/Uploader";
import "./EditorContent.css"




const Tiptap = () => {
 
  
    return (
        <>
        
      <EditorContent editor={editor} />

      </>
    )
  }
  
  export default Tiptap



