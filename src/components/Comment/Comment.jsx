import React, { useState, useEffect } from "react";
import "./Comment.css";
import Wrapper from "../../hoc/Wrapper";
import CommentForm from "../CommentForm/CommentForm";
import useRelativeTime from "../../hooks/useRelativeTime";

const Comment = ({ comment, replies, currentUserId, activeComment, setActiveComment, parentId, addComment, getReply, editComment, removeComment }) => {


    const { id, body, user_id, blog_id, created_at } = comment;
    const canReply = Boolean(currentUserId);
    const canLike = Boolean(currentUserId);
    const canEdit = currentUserId === user_id.id;
    const canDelete = currentUserId === user_id.id;
    const isReplying = activeComment && activeComment.type === "replying" && activeComment.id === id;
    const isEditing = activeComment && activeComment.type === "editing" && activeComment.id === id;

    const [replying, setReplying] = useState(isReplying);
    const [editing, setEditing] = useState(isEditing);

    const replyId = parentId ? parentId : id;

    const timeFormat = useRelativeTime;

    useEffect(() => {

    }, []);



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
                            <p className="comment-date">{timeFormat(created_at)}</p>

                        </div>
                    </div>
                    {/* left */}

                    <div className="comment-box--btns">
                        {!canReply &&
                            <button className="blog-comment__btn blog-content__btn btn-reply" onClick={() => setActiveComment({ id: comment.id, type: "replying" })}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={15} height={15}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                                </svg>

                                <p>پاسخ</p>
                            </button>
                        }
                        {canEdit &&
                            <button className="blog-comment__btn blog-content__btn btn-reply" onClick={() => setActiveComment({ id: comment.id, type: "editing" })}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                                    <g id="vuesax_outline_edit-2" data-name="vuesax/outline/edit-2" transform="translate(-684 -252)">
                                        <g id="edit-2">
                                            <path id="Vector" d="M2.288,18.094a2.291,2.291,0,0,1-1.59-.6,2.382,2.382,0,0,1-.68-2.03l.37-3.24a3.605,3.605,0,0,1,.87-1.86l8.21-8.69c2.05-2.17,4.19-2.23,6.36-.18s2.23,4.19.18,6.36L7.8,16.544a3.6,3.6,0,0,1-1.81.97l-3.22.55C2.6,18.074,2.448,18.094,2.288,18.094Zm10.39-16.61a3.055,3.055,0,0,0-2.12,1.2l-8.21,8.7a2.309,2.309,0,0,0-.47,1l-.37,3.24a.879.879,0,0,0,.22.77.9.9,0,0,0,.78.18l3.22-.55a2.234,2.234,0,0,0,.97-.52l8.21-8.69c1.24-1.32,1.69-2.54-.12-4.24A3.162,3.162,0,0,0,12.678,1.484Z" transform="translate(687.252 253.426)" fill="currentColor" />
                                            <path id="Vector-2" data-name="Vector" d="M6.188,6.648h-.07A6.859,6.859,0,0,1,.008.868a.762.762,0,0,1,.63-.86.762.762,0,0,1,.86.63,5.372,5.372,0,0,0,4.78,4.52.751.751,0,0,1,.67.82A.774.774,0,0,1,6.188,6.648Z" transform="translate(695.152 256.302)" fill="currentColor" />
                                            <path id="Vector-3" data-name="Vector" d="M18.75,1.5H.75A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0h18a.755.755,0,0,1,.75.75A.755.755,0,0,1,18.75,1.5Z" transform="translate(686.25 273.25)" fill="currentColor" />
                                            <path id="Vector-4" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(684 252)" fill="none" opacity="0" />
                                        </g>
                                    </g>
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
                        {canDelete &&
                            <button className="blog-content__btn  blog-like__btn" onClick={() => removeComment(id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width={17} height={17}>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>



                            </button>
                        }
                    </div>
                </div>
                <div>
                    <pre className="comment--txt__txt">
                        {body}
                    </pre>
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
                    handleSubmit={(text) => editComment(text, id)}

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
                                    editComment={editComment}
                                    removeComment={removeComment}

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