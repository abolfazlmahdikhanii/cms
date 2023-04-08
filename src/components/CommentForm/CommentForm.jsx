import React, { useState } from "react";
import './CommentForm.css';

const CommentForm = ({ handleSubmit, submitLabel, show = false, user ,editValue = null }) => {
    const [text, setText] = useState("");
    const [active, setActive] = useState(show);

    const onSubmit = (e) => {
        e.preventDefault();

        handleSubmit(text);
        setActive(prev => !prev);
    };
    return (
        <div className={`form-comment ${active ? 'form-coment--active' : ''}`}>
            <form onSubmit={onSubmit} className="comment-box">

                <div className="comment-box--header">
                    {/* right */}
                    <div className="author-profile">
                        <div className="author-profile--photo">
                            <img src="../../../src/assets/profile.svg" alt="" />
                        </div>
                        <div className="comment-profile--info">
                            <p className="comment-prfile__fullName">{user.firstName} {user.lastName}</p>
                            <p className="comment-date">@{user.lastName}</p>

                        </div>
                    </div>

                </div>


                <div className="form-comment--body">
                    <textarea className="form-control form-comment__input"
                        value={editValue || text}
                        placeholder="متن مورد نظر را وارد نمایید ..."
                        onChange={(e) => setText(e.target.value)} />

                    <button className="btn-item btn-action comment-submit__btn">{submitLabel}</button>
                    <button className="btn-item btn-action comment-submit__btn" onClick={() => setActive(false)}>انصراف</button>

                </div>







            </form>
        </div>
    );
};

export default CommentForm;