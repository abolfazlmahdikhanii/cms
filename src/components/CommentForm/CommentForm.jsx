import React, { useState, useEffect } from "react";
import './CommentForm.css';
import { supabase } from "../../superbase";
import usePublicProfile from "../../hooks/usePublicProfile";

const CommentForm = ({ handleSubmit, submitLabel, userId, editValue = null, active,setActive }) => {
    const [text, setText] = useState(editValue||"");
    // const [active, setActive] = useState(true);
    const [users, setUser] = useState([]);
    const publicProfile=usePublicProfile



    useEffect(() => {
        getCurrentUser();

    }, [userId]);

    const onSubmit = (e) => {
        e.preventDefault();

        handleSubmit(text);

        setActive(false)


    };
    const getCurrentUser = async () => {
        try {
            const {data:user,error} =await supabase.auth.getUser()
  
            
            const { data, err } = await supabase.from("profiles")
                .select("username,firstName,lastName,avatar_url")
                .eq("id", user?.user?.id)
                .single();

            if (err || error) throw err;

            setUser(data);



        } catch (error) {
            console.log(error);

        }
    };
    const resetForm = (e) => {
        e.preventDefault();

        setActive(false)
        


    };
    return (
        <div className={`form-comment ${active ? 'form-coment--active' : ''}`}>
            <form onSubmit={onSubmit} className="comment-box comment-box--form">

                <div className="comment-box--header">
                    {/* right */}
                    <div className="author-profile">
                        <div className="author-profile--photo author-profile--comment-form">
                            <img src={publicProfile(users?.avatar_url)||"../../../src/assets/profile.svg"} alt="" />
                        </div>
                        <div className="comment-profile--info">
                            <p className="comment-prfile__fullName">{users?.firstName} {users?.lastName}</p>
                            <p className="comment-username">@{users?.username}</p>

                        </div>
                    </div>

                </div>


                <div className="form-comment--body">
                    <textarea className="form-control form-comment__input"
                        value={ text}
                        placeholder="متن مورد نظر را وارد نمایید ..."
                        onChange={(e) => setText(e.target.value)} />

                    <div className="btn-flex btn-comment-form">
                        <button className="btn-item btn-action comment-submit__btn">{submitLabel}</button>
                        <input type="reset" className="btn-item  comment-cancel__btn" onClick={resetForm} value="انصراف" />
                    </div>

                </div>







            </form>
        </div>
    );
};

export default CommentForm;