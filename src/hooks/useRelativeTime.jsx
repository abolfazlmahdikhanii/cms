import React from "react";



const useRelativeTime=(date=new Date())=>{
       
        
    const calcDates = (date1, date2) =>
    Math.round(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));

  const dayPassed = calcDates(+new Date().getTime(), +new Date(date).getTime());

  if(dayPassed===0)return "امروز"

 



  return new Intl.RelativeTimeFormat("fa").format(-Number(dayPassed),"days");
}

export default useRelativeTime