import React,{useEffect, useState,useRef,useCallback} from "react";
import "./Profile.css"
import {Link} from "react-router-dom";
import { supabase } from "../../superbase";
import { TiArrowSortedDown } from "react-icons/ti";
import MiniProfile from "../MiniProfile/MiniProfile";
import useOutsideClick from "../../hooks/useOutsideClick";

const Profile=(props)=>{


    const [userProfile,setUserProfile]=useState([])
    const [showMenu,setShowMenu]=useState(false)
    const [email,setEmail]=useState("")
    const wrapperRef = useRef(null);
  
    useEffect(() => {
        checkUserHandler()
        
       
    }, []);
    const checkUserHandler=async ()=>{
        try{
            const {data,error}=await supabase.auth.getUser()
            if(error) throw error
            const {user}=data
            
             
               
           setUserProfile(user)
           setEmail(user?.email);
           
           
            
        
           
     
        }
        catch(error){
          console.log(error.message);
          
        }
    }

    const hideMenuHandler=()=>{
        setShowMenu(false)
    }
    useOutsideClick(wrapperRef,hideMenuHandler);
    return(
       <>
         {
            userProfile?.user||userProfile?.email?
            <div className="profile-login" 
            // on={() => setShowMenu(false)}
            ref={wrapperRef}
          
            >
                  <button className="btn-profile" onClick={()=> setShowMenu(!showMenu)}  >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g id="vuesax_bulk_profile" data-name="vuesax/bulk/profile" transform="translate(-108 -252)">
                    <g id="profile">
                        <path id="Vector" d="M4.75,0a4.746,4.746,0,0,0-.12,9.49.807.807,0,0,1,.22,0h.07A4.746,4.746,0,0,0,4.75,0Z" transform="translate(115.25 254)" fill="currentColor" opacity="0.4"/>
                        <path id="Vector-2" data-name="Vector" d="M12.12,1.395a9.929,9.929,0,0,0-10.15,0A3.947,3.947,0,0,0,0,4.625a3.914,3.914,0,0,0,1.96,3.21,9.239,9.239,0,0,0,5.08,1.41,9.239,9.239,0,0,0,5.08-1.41,3.945,3.945,0,0,0,1.96-3.23A3.937,3.937,0,0,0,12.12,1.395Z" transform="translate(112.96 264.755)" fill="currentColor"/>
                        <path id="Vector-3" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(108 252)" fill="none" opacity="0"/>
                    </g>
                </g>
            </svg>

            <TiArrowSortedDown/>
        </button>
        <MiniProfile show={showMenu}  email={email} fullName={props?.fullName} />
            </div>
        :
        <Link to="/auth" className="profile">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g id="vuesax_bulk_profile" data-name="vuesax/bulk/profile" transform="translate(-108 -252)">
                <g id="profile">
                    <path id="Vector" d="M4.75,0a4.746,4.746,0,0,0-.12,9.49.807.807,0,0,1,.22,0h.07A4.746,4.746,0,0,0,4.75,0Z" transform="translate(115.25 254)" fill="currentColor" opacity="0.4"/>
                    <path id="Vector-2" data-name="Vector" d="M12.12,1.395a9.929,9.929,0,0,0-10.15,0A3.947,3.947,0,0,0,0,4.625a3.914,3.914,0,0,0,1.96,3.21,9.239,9.239,0,0,0,5.08,1.41,9.239,9.239,0,0,0,5.08-1.41,3.945,3.945,0,0,0,1.96-3.23A3.937,3.937,0,0,0,12.12,1.395Z" transform="translate(112.96 264.755)" fill="currentColor"/>
                    <path id="Vector-3" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(108 252)" fill="none" opacity="0"/>
                </g>
            </g>
        </svg>

        <p className="profile__txt">حساب کاربری</p>
        </Link>
         }
       </>
    )
}
export default Profile