import React, {useEffect, useState} from "react";
import "./Header.css"
import Profile from "../Profile/Profile.jsx";
import ThemButton from "../Ui/ThemButton/ThemButton.jsx";

const Header=(props)=>{
    const [date,setDate]=useState(null)
    useEffect(()=>{
        const now=new Date();
        const formatDate=new Intl.DateTimeFormat("fa",{
            day: "numeric",
            year: "numeric",
            month: "long",
            weekday: "long",

        }).format(now)
        setDate(formatDate)
    }, [])
    return(
        <div className="header">
             <div className="header-right">
                 <p className="header-right__title  header-right__txt">
                     {props.user} عزیز; خوش آمدی. 👋
                 </p>
                 <i className="header-right__border"></i>
                 <p className="header-right__date header-right__txt">
                     {date}
                 </p>
             </div>

            <div className="header-left">
                <ThemButton/>
                <Profile fullName={props.fullName}/>
            </div>
        </div>
    )
}
export default Header