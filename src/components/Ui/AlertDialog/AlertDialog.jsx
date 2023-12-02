import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import "./AlertDialog.css";
import Wrapper from "../../../hoc/Wrapper";
import Backdrop from "../Backdrop/Backdrop";
import Box from "../Box/Box";
import { supabase } from "../../../superbase";


const AlertDialog = ({id,close,session,show}) => {
    const [blogId,setBlogId]=useState(id)
    
    const toastOption={
        position: "bottom-right",
        autoClose:1000,
         hideProgressBar: true,
         theme:"colored",
         style:{fontFamily:"shabnam,sans-serif"}
    }
    
   useEffect(()=>{


setBlogId(id)
   },[id,blogId])
    
    const removeBlogHandler=async(id)=>{
        try{
        
            console.log(blogId);
            
            const {user}=session
            const {err}=await supabase.from("blogs").delete()
            .eq("id",id)
            .eq("post_author",user?.id)
            if(err) throw err
            toast.success("پست شما با موفقیت حذف شد ",toastOption)

            close()
        }
        catch(err){
         
            toast.error("حذف پست شما با مشکل مواجه شد",toastOption)

            
        }
        finally{
        
        }
    }
  
    return (
        <Wrapper>


            <Backdrop show={show} />

            <section className={`alert-dialog ${!show ? 'alert-dialog--hidden' : ''}`} >
                <Box modal={true} >
                  <h4 className="dialog-title__title">حذف پست</h4>
                  <div className="dialog-body">
                    <p className="dialog-dis__dis">آیا از پاک کردن این پیش‌نویس مطمئن هستید؟ در صورت حذف، پیش‌نویس شما قابل بازیابی نخواهد بود.</p>

                    <div className="dialog-btns">
                        <button className="btn-item outline-btn outline-btn--cancel" onClick={close}>منصرف شدم</button>
                        <button className="btn-item outline-btn outline-btn--remove" onClick={()=>removeBlogHandler(blogId)}>بله، حذف شود</button>

                    </div>
                  </div>
                </Box>
            </section>


        </Wrapper>

    );
};

export default AlertDialog;