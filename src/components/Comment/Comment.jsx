import React, { useState, useEffect } from "react";
import "./Comment.css";
import Wrapper from "../../hoc/Wrapper";
import CommentForm from "../CommentForm/CommentForm";
import useRelativeTime from "../../hooks/useRelativeTime";

const Comment = ({ comment, replies, currentUserId, activeComment, setActiveComment, parentId, addComment, getReply }) => {


    const { id, body, user_id, blog_id, create_at } = comment;
    const canReply = Boolean(currentUserId);
    const canLike = Boolean(currentUserId);
    const canEdit = currentUserId === user_id.id;
    const canDelete = currentUserId === user_id.id;
    const isReplying = activeComment && activeComment.type === "replying" && activeComment.id === id;
    const isEditing = activeComment && activeComment.type === "editing" && activeComment.id === id;

    const [replying,setReplying]=useState(isReplying)
    const [editing,setEditing]=useState(isEditing)

    const replyId = parentId ? parentId : id;

    const timeFormat = useRelativeTime;

    useEffect(()=>{
      
    },[])



    return (
        <Wrapper>
            <section className={`comment-box `}  >
                <div className="comment-box--header">
                    {/* right */}
                    <div className="author-profile">
                        <div className="author-profile--photo">
                            <img src={user_id?.avatar_url && "../../../src/assets/profile.svg"} alt="" />
                        </div>
                        <div className="comment-profile--info">
                            <p className="comment-prfile__fullName">{user_id?.firstName} {user_id?.lastName}</p>
                            <p className="comment-date">{timeFormat(create_at)}</p>

                        </div>
                    </div>
                    {/* left */}

                    <div className="comment-box--btns">
                        {canReply &&
                            <button className="blog-comment__btn blog-content__btn btn-reply" onClick={() => setActiveComment({ id: comment.id, type: "replying" })}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={15} height={15}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                                </svg>

                                <p>پاسخ</p>
                            </button>
                        }
                        {canEdit &&
                            <button className="blog-comment__btn blog-content__btn btn-reply" onClick={() => setActiveComment({ id: comment.id, type: "editing" })}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={15} height={15}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                                </svg>

                                <p>ویرایش</p>
                            </button>
                        }
                        {!canLike &&
                            <button className="blog-content__btn  blog-like__btn">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" width={18} height={18}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                <p>0</p>

                            </button>
                        }
                    </div>
                </div>
                <div>
                    <p className="comment--txt__txt">
                        {body}
                    </p>
                </div>


            </section>
            <div className="reply-form--comment">
             
                    <CommentForm

                        submitLabel="ارسال پاسخ"
                        handleSubmit={(text) => addComment(text, replyId)}
                       
                        active={isReplying}
                        setActive={setActiveComment}
                    />

                
             
                    <CommentForm

                        submitLabel="ویرایش"
                        handleSubmit={(text) => addComment(text, replyId)}
                     
                        editValue={body}
                        active={isEditing}
                        setActive={setActiveComment}
                    />
                
            </div>
            <div className="replies-comment">
                {
                    replies.map((item, i) => {
                        return (
                            <div className={`replies-wrapper `} style={{ marginRight: `${(i + 1) * 3}rem` }}>
                                <Comment
                                    key={item?.id}
                                    comment={item}
                                    activeComment={activeComment}
                                    setActiveComment={setActiveComment}
                                    parentId={id}
                                    addComment={addComment}
                                    replies={getReply(item?.id)}
                                    currentUserId={currentUserId}


                                />
                            </div>
                        );
                    })
                }
            </div>
        </Wrapper>
    );
};


export default Comment;