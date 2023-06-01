import React,{useState,useEffect, Children} from "react";
import Avatar from "../Avatar/Avatar";
import UploadModal from "../Ui/UploadModal/UploadModal";
import Uploader from "../Uploader/Uploader";
import "./EditorContent.css"

const EditorContent = ({type="p",change,url,id,value,children}) => {
    const [show,setShow]=useState(false)
    const [src,setSrc]=useState("")
   
    const [strong,setStrong]=useState("")
    const [content,setContent]=useState("")
    const [style,setStyle]=useState("right")

  
  
    const headings = ["h1", "h2", "h3", "h4", "h5", "h6"];
    const newContent=[]
    const textAreaHeight=(e)=>{
e.target.style.height=""
e.target.style.height = Math.max(e.target.scrollHeight, 100) + "px";
    }

    const changeContentHandler=(e)=>{

    change(e)
    setContent(e.target.innerHTML)
    
      
    }
    let checkStyle=type==="right"||type==="left"||type==="center"
    

  
      let Tag=type

      let element=null
      let ele=null
      switch (type) {
        case "center":
        case "right":
        case "left":
          
            
          break
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
        case "p":
       element=<Tag autoFocus contentEditable onInput={(e)=>change(e)} style={{textAlign:checkStyle||type}}></Tag>
          break;
          

        // case "strong":
        // case "em":
        // case "ins":
        //  return <p autoFocus contentEditable onInput={(e)=>changeContentHandler(e)} dangerouslySetInnerHTML={{__html:`<${Tag}>${content}</${Tag}>`}}>

        //   </p>
     
     
          
          
      
        default:
          element= <p autoFocus contentEditable onInput={(e)=>change(e)}></p>
          break;
      }
      console.log(ele);
      
    return (
        
         <>
      
       {element}
      
      



       
         </>
   
    );
};

export default EditorContent