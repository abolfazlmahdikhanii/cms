import React,{useState} from "react";
import Avatar from "../Avatar/Avatar";
import Uploader from "../Uploader/Uploader";
import "./Element.css"

const Element = ({type,change,url,id}) => {
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
    const changeSrcHandler=(url,el)=>{

      const elements={...values}
      
      elements[el]=url
      setValues(elements)
      change(url)
    console.log(url);
    
    }
    const textAreaHeight=(e)=>{
e.target.style.height=""
e.target.style.height = Math.max(e.target.scrollHeight, 100) + "px";
    }
    

    let element=null
    switch (type) {
        case "img":
              element=<Uploader id={id} url={values.imgSrc} size={320} onUpload={(url)=>changeSrcHandler(url,"imgSrc")}/>
            break
        case "imgCover":
              element=<Uploader id={id} url={values.imgSrc} size={320} onUpload={(url)=>changeSrcHandler(url,"imgSrc")}/>
            break
        case "title":
            element=<input autoFocus type="text" className="title content__input" value={values.title} onChange={(e)=>{changeValueHandler(e,"title")}}  />
            break;
        case "txt":
            element=<textarea autoFocus className="paragraph content__input" onInput={textAreaHeight} value={values.paragraph} onChange={(e)=>{changeValueHandler(e,"paragraph")}} ></textarea>

            break;
        case "link":
            element=<input autoFocus type="text" className="link content__input" value={values.link} onChange={(e)=>{changeValueHandler(e,"link")}}  />
        default:
            // element=<input type="text" className="title" value={paragraph} onChange={(e)=>setParagraph(e.target.value)} />
            break;
    }



    return (
        <div>
            {element}
        </div>
    );
};

export default Element