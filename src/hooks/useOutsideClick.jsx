import React,{useEffect, useState,useRef} from "react";


const useOutsideClick=(ref,handler)=>{

    useEffect(()=>{
        const handleClickOutside=(e)=>{
            if(ref.current&&!ref.current.contains(e.target)){
               handler()
                
            }
         
        }

        document.body.addEventListener("mousedown",handleClickOutside)
        return ()=>{
            document.body.removeEventListener("mousedown",handleClickOutside)
        }
    },[ref])
}

export default useOutsideClick