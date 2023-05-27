import React,{useState,useEffect} from "react";
import { useMediaQuery } from "react-responsive";

const useDarkMode = () => {

  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)"
    },
    undefined,
    prefersDark => {
      setIsDark(prefersDark);
    }
  )
    const [isDark,setIsDark]=useState(systemPrefersDark)

    const toggleThem=()=>{
        if(isDark){
          localStorage.setItem("them","light")
          setIsDark(false)
        }
        else{
          localStorage.setItem("them","dark")
          setIsDark(true)
        }

    }

    useEffect(()=>{
      const getThem=localStorage.getItem("them")
      if(getThem==="dark"){
        document.documentElement.setAttribute("data-them","dark")
        setIsDark(true)

      }
      else{
        document.documentElement.setAttribute("data-them","light")
        setIsDark(false)
      }
   

    },[isDark])
  return [isDark,toggleThem]
};

export default useDarkMode;
