import React, { useState } from "react";
import './CommentForm.css';

const CommentForm = ({ handleSubmit, submitLabel, show = false }) => {
    const [text, setText] = useState("");
    // const [active, setActive] = useState(false);
    let active = show;
    const onSubmit = (e) => {
        e.preventDefault();

        handleSubmit(text);
        active = false;
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
                            <p className="comment-prfile__fullName">ابوالفضل مهدیخانی</p>
                            <p className="comment-date">4 روز پیش</p>

                        </div>
                    </div>

                </div>


                <div className="form-comment--body">
                    <textarea className="form-control form-comment__input"
                        value={text}
                        placeholder="متن مورد نظر را وارد نمایید ..."
                        onChange={(e) => setText(e.target.value)} />

                    <button className="btn-item btn-action comment-submit__btn">{submitLabel}</button>

                </div>







            </form>
        </div>
    );
};

export default CommentForm;