import React,{useState,useEffect} from "react";
import {supabase} from "../../superbase.jsx";
import Loader from "../Ui/Loader/Loader.jsx";
import "./Uploader.css"

const Uploader=({url,size,onUpload,id})=>{
    const [blogUrl, setBlogUrl] = useState(null)
    const [uploading, setUploading] = useState(false)
    useEffect(() => {
        if (url) downloadImage(url)
    }, [url])

    const downloadImage=async (path)=>{

        console.log(path);
        
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
            alert(error.message)
        } finally {
            setUploading(false)
        }
    }
    return(
        <div style={{ width: "100%" }} className="file-upload">


            <img
                src={blogUrl ? blogUrl : `https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png`}
                alt={blogUrl ? 'Avatar' : 'No image'}
                className="blog-img"
                style={{ height: size, width: "100%",objectFit:"cover" }}
            />
            {uploading ? (
               <Loader show={uploading}/>
            ) : (
                <>

                <label className="file-upload__lbl" htmlFor={`single${id}`}>

                        <input
                            className="file-upload__input"
                            type="file"
                            multiple
                            id={`single${id}`}
                            accept="image/*"
                            onChange={(e)=>uploadBlogImg(e)}
                            disabled={uploading}
                        />
                </label>
                </>
            )}

        </div>
    )
}

export default Uploader