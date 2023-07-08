import React,{useState,useEffect} from "react";
import {supabase} from "../../superbase.jsx";
import Loader from "../Ui/Loader/Loader.jsx";
import {AiOutlineCloudUpload} from "react-icons/ai"
import "./Uploader.css"
import { toast } from 'react-toastify';
const Uploader=({url,size,onUpload,id})=>{
    const [blogUrl, setBlogUrl] = useState(null)
    const [uploading, setUploading] = useState(false)
    const toastOption = {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: true,
        theme: "colored",
        style: { fontFamily: "shabnam,sans-serif" }
    };
    
    useEffect(() => {
        if (url) downloadImage(url)

    
    }, [url])

    const downloadImage=async (path)=>{

    
        
        try{
            const {data,error}= supabase.storage.from('uploads').getPublicUrl(path)
            if(error) throw error

          
            setBlogUrl(data.publicUrl)
        }
        catch (error) {
            console.log(error.message)
        }
    }

 
    const uploadBlogImg = async (event) => {
        event.preventDefault()
        try {
            setUploading(true)

            if (!event.target.files || event.target.files.length === 0) {
                throw new Error('You must select an image to upload.')
            }

            const file = event.target.files[0]
            const fileExt = file.name.split('.').pop()
            const fileName = `${Math.random()}.${fileExt}`
            const filePath = `${fileName}`

            let { error: uploadError } = await supabase.storage.from('uploads').upload(filePath, file)

            if (uploadError) {
                throw uploadError
            }

            onUpload(filePath)
            return filePath
        } catch (error) {
            toast.error("آپلود عکس با مشکل مواجه شد ! دوباره امتحان کنید", toastOption);

            setUploading(false)
        } finally {
            setUploading(false)
        }
    }
    return(
        <div  className="file-upload">


         
            {uploading ? (
               <Loader show={uploading} loaderUpload={true}/>
            ) : (
                <>

                <label className="file-upload__lbl" htmlFor={`single`} style={{border:blogUrl?"none":"4px dashed #6366f1"}}>

                        <input
                            className="file-upload__input"
                            type="file"
                            multiple
                            id={`single`}
                            accept="image/*"
                            onChange={(e)=>uploadBlogImg(e)}
                            disabled={uploading}
                        />

                    <div className="file-upload--box" style={{display:blogUrl?"none":"flex"}}>
        
                    <AiOutlineCloudUpload size={115} color="#4f46e5"/>
                    <p className="file-upload--box__txt">تصویر مورد نظر خود را آپلود کنید</p>
                    </div>
                    {
            blogUrl&&(
                <img
                src={blogUrl ? blogUrl : `https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png`}
                alt={blogUrl ? 'Avatar' : 'No image'}
                className="blog-img"
                style={{ width: "100%",objectFit:"cover" }}
            />
            )
         }

                </label>
                </>
            )}

        </div>
    )
}

export default Uploader