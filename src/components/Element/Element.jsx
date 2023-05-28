import React,{useState,useEffect} from "react";
import Avatar from "../Avatar/Avatar";
import UploadModal from "../Ui/UploadModal/UploadModal";
import Uploader from "../Uploader/Uploader";
import "./Element.css"

const Element = ({type,change,url,id,value}) => {
    const [show,setShow]=useState(false)
    const [src,setSrc]=useState("")
   
    const [values, setValues] = useState({
        "title":'',
        "paragraph":'',
        "link":'',
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
        case "imgCover":
              element=<Uploader id={id} url={values.imgSrc} size={320} onUpload={(url)=>changeSrcHandler(url,"imgSrc")}/>
            break
        case "title":
            element=<input autoFocus type="text" className="title content__input" value={value||values.title} onChange={(e)=>{changeValueHandler(e,"title")}}  />
            break;
        case "txt":
            element=<textarea autoFocus className="paragraph content__input" onInput={textAreaHeight} value={value||values.paragraph} onChange={(e)=>{changeValueHandler(e,"paragraph")}} ></textarea>

            break;
        case "link":
            element=<input autoFocus type="text" className="link content__input" value={value||values.link} onChange={(e)=>{changeValueHandler(e,"link")}}  />
        default:
            // element=<input type="text" className="title" value={paragraph} onChange={(e)=>setParagraph(e.target.value)} />
            break;
    }



    return (
        <div>
            <UploadModal 
            show={show} 
            close={()=>setShow(false)}
            url={values.imgSrc} 
            changeUrl={(url)=>changeSrcHandler(url,"img")}
            />
            {element}
        </div>
    );
};

export default Element