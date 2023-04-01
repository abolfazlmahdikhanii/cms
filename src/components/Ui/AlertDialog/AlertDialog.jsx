import React, { useState, useEffect } from "react";
import "./AlertDialog.css";
import Wrapper from "../../../hoc/Wrapper";
import Backdrop from "../Backdrop/Backdrop";
import Box from "../Box/Box";
import { supabase } from "../../../superbase";


const AlertDialog = (props) => {
    const [blogId,setBlogId]=useState(props?.id)
   useEffect(()=>{
console.log(props.id);

setBlogId(props?.id)
   },[props?.id,blogId])
    
    const removeBlogHandler=async(id)=>{
        try{
            const {user}=props?.session
            const {err}=await supabase.from("blogs").delete()
            .eq("id",id)
            .eq("post_author",user?.id)
            if(err) throw err

            props.close()
        }
        catch(err){
            console.log(err);
            
        }
    }
  
    return (
        <Wrapper>


            <Backdrop show={props.show} />

            <section className={`alert-dialog ${!props.show ? 'alert-dialog--hidden' : ''}`} >
                <Box modal={true} >
                  <h4 className="dialog-title__title">حذف پست</h4>
                  <div className="dialog-body">
                    <p className="dialog-dis__dis">آیا از پاک کردن این پیش‌نویس مطمئن هستید؟ در صورت حذف، پیش‌نویس شما قابل بازیابی نخواهد بود.</p>

                    <div className="dialog-btns">
                        <button className="btn-item outline-btn outline-btn--cancel" onClick={props.close}>منصرف شدم</button>
                        <button className="btn-item outline-btn outline-btn--remove" onClick={()=>removeBlogHandler(blogId)}>بله، حذف شود</button>

                    </div>
                  </div>
                </Box>
            </section>


        </Wrapper>

    );
};

export default AlertDialog;