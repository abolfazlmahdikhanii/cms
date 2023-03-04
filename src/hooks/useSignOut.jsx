import React from "react";
import { useRoutes } from "react-router-dom";
import { supabase } from "../superbase";

const useSignOut=()=>{

    supabase.auth.signOut()
    const navigate=useRoutes()
    navigate.push('/')
}

export default useSignOut