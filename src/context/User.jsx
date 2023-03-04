import React, { useState } from "react"

export const User=React.createContext({
    userName:null,
    fullName:null,
    avatar:null,
    email:null
   
})

const UserContextProvider=(props)=>{

    
    return(
        <User.Provider value={{userName:props.userName,fullName:props.fullName,avatar:props.avatar}}>
            {props.children}
        </User.Provider>
    )
}


export default UserContextProvider