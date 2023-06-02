import React,{useState,useEffect} from "react";
import Avatar from "../Avatar/Avatar";
import UploadModal from "../Ui/UploadModal/UploadModal";
import Uploader from "../Uploader/Uploader";
import "./EditorContent.css"

const EditorContent = ({type,change,url,id,value}) => {
    const [show,setShow]=useState(false)
    const [src,setSrc]=useState("")
   
    const [values, setValues] = useState({
        "h1":'',
        "h2":'',
        "h3":'',
        "h4":'',
        "h5":'',
        "h6":'',
        "p":'',
        "a":'',
        "strong":'',
        "em":'',
        "ins":'',
        "imgSrc":''
    });
  
  
    const changeValueHandler=(e,el)=>{

      const elements={...values}
      
      elements[el]=e.target.value
      setValues(elements)
      change(e)
    }
    const changeSrcHandler=(url,w,h,el)=>{

      const elements={...values}
      
      elements[el]={
        src:url,
        width:`${w}%`,
        height:`${h}px`
      }
      setValues(elements)
      setSrc(url)
      change(url)
    console.log(url);
    
    }
    const textAreaHeight=(e)=>{
e.target.style.height=""
e.target.style.height = Math.max(e.target.scrollHeight, 100) + "px";
    }

    const removeEmptyInput=(e)=>{
     if(e.key==="Backspace"){
      if(e.target.value===""){
        e.target.remove()
      }
     }
      
    }
    
let pic=null

   const imgSrc=(str)=>{

    if(str!==null){
    
     
            
          return str?`https://ydvgwyanjxqhlluftkwh.supabase.co/storage/v1/object/public/uploads/${str}`:"https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png"
        
    }
   }
    
    if(src.includes("https")||src.includes("http")){
        pic=src
    }
    else{
        
        pic=src?`https://ydvgwyanjxqhlluftkwh.supabase.co/storage/v1/object/public/uploads/${src}`:"https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png"
    }


    let element=null
    switch (type) {
        case "img":
            //   element=<Uploader id={id} url={values.imgSrc} size={320} onUpload={(url)=>changeSrcHandler(url,"imgSrc")}/>
            element=<img
            id={id}
            src={imgSrc(value)||pic}
            className="blog-img"
            style={{ height: '31rem', width: "100%",objectFit:"cover" }}
            onClick={()=>setShow(true)}
        />
            break
       
              element=<Uploader id={id} url={values.imgSrc} size={320} onUpload={(url)=>changeSrcHandler(url,"imgSrc")}/>
            break
        case "h1":
            element=<input autoFocus type="text" className="title content__input h1" value={value||values.h1} onChange={(e)=>{changeValueHandler(e,"h1")}}  onKeyDown={(e)=>removeEmptyInput(e)}/>
            break;
        case "h2":
            element=<input autoFocus type="text" className="title content__input h2" value={value||values.h2} onChange={(e)=>{changeValueHandler(e,"h2")}} onKeyDown={(e)=>removeEmptyInput(e)} />
            break;
        case "h3":
            element=<input autoFocus type="text" className="title content__input h3" value={value||values.h3} onChange={(e)=>{changeValueHandler(e,"h3")}} onKeyDown={(e)=>removeEmptyInput(e)} />
            break;
        case "h4":
            element=<input autoFocus type="text" className="title content__input h4" value={value||values.h4} onChange={(e)=>{changeValueHandler(e,"h4")}}  onKeyDown={(e)=>removeEmptyInput(e)}/>
            break;
        case "h5":
            element=<input autoFocus type="text" className="title content__input h5" value={value||values.h5} onChange={(e)=>{changeValueHandler(e,"h5")}}  onKeyDown={(e)=>removeEmptyInput(e)}/>
            break;
        case "h6":
            element=<input autoFocus type="text" className="title content__input h6" value={value||values.h6} onChange={(e)=>{changeValueHandler(e,"h6")}}  onKeyDown={(e)=>removeEmptyInput(e)}/>
            break;
        case "strong":
            element=<input  autoFocus type="text" className="paragraph content__input strong" value={value||values.strong} onChange={(e)=>{changeValueHandler(e,"strong")}}  onKeyDown={(e)=>removeEmptyInput(e)}/>
            break;
        case "em":
            element=<input autoFocus  type="text" className="paragraph content__input em" value={value||values.em} onChange={(e)=>{changeValueHandler(e,"em")}}  onKeyDown={(e)=>removeEmptyInput(e)}/>
            break;
        case "ins":
            element=<input autoFocus  type="text" className="paragraph content__input ins" value={value||values.ins} onChange={(e)=>{changeValueHandler(e,"ins")}}  onKeyDown={(e)=>removeEmptyInput(e)}/>
            break;
     
        case "p":
            element=<textarea autoFocus className="paragraph content__input" onInput={textAreaHeight} value={value||values.p} onChange={(e)=>{changeValueHandler(e,"paragraph")}} onKeyDown={(e)=>removeEmptyInput(e)}></textarea>

            break;
        case "link":
            element=<input autoFocus type="text" className="link content__input" value={value||values.link} onChange={(e)=>{changeValueHandler(e,"link")}}  onKeyDown={(e)=>removeEmptyInput(e)}/>
        default:
            // element=<input type="text" className="title" value={paragraph} onChange={(e)=>setParagraph(e.target.value)} />
            break;
    }



    return (
        <>
            {/* <UploadModal 
            show={show} 
            close={()=>setShow(false)}
            url={values.imgSrc} 
            changeUrl={(url)=>changeSrcHandler(url,"img")}
            /> */}
            {element}
        </>
    );
};

export default EditorContent