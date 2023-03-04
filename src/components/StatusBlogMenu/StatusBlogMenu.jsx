import React from "react";
import "./StatusBlogMenu.css"

const StatusBlogMenu=(props)=>{

    return(
        <div className={`drowp-down-status ${props.show ? 'show-drowp-down' : ''}`}>
           <ul className="drowp-down-status__list">
             <button data-value="share" className="profile-item drowp-down__txt" onClick={(e)=>{
                props.changeStatus(e)
                  props.close()
                }}>
                 انتشار مقاله
             </button>
             <button data-value="draft" className="profile-item drowp-down__txt" onClick={(e)=>{
                props.changeStatus(e)
                props.close()
                }}>
              ذخیره در پیش نویس 
             </button>
           </ul>
        </div>   
    )
}

export default StatusBlogMenu