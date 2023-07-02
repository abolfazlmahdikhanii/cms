import React,{useEffect,useState} from "react";
import { supabase } from "../superbase";
const usePublicProfile = (location) => {

    const [url,setUrl]=useState("")
    useEffect(() => {
         downloadImage(location);
    }, [location]);

    const downloadImage = async (path) => {

        try {
            const { data, error } =  supabase.storage.from('avatars').getPublicUrl(path);
            if (error) throw error;
            setUrl(data.publicUrl)
        
        }
        catch (error) {
            console.log(error.message);
      
        }
    };

    return url
};

export default usePublicProfile;
