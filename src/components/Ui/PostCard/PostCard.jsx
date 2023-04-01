import React from "react";
import "./PostCard.css";


const PostCard = (props) => {
    let icon = null;
    if (props?.type === "fav") {
        icon = <svg width="23" height="23" fill="#E81C4D" viewBox="0 0 13 11" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.95035 1.229C4.81955 1.229 5.61243 1.66166 6.21284 2.15457C6.81326 1.66166 7.60614 1.229 8.47534 1.229C10.3497 1.229 11.8691 2.62275 11.8691 4.34192C11.8691 7.80824 7.92382 9.82702 6.62321 10.3984C6.36123 10.5134 6.06445 10.5134 5.80248 10.3984C4.50187 9.827 0.556602 7.80816 0.556602 4.34184C0.556602 2.62267 2.07603 1.229 3.95035 1.229Z" stroke="#E81C4D" strokeWidth="0.761705"></path>
        </svg>;
    }

    else {
        icon = <svg xmlns="http://www.w3.org/2000/svg" fill="#0673fc" width="23" height="23" viewBox="0 0 24 24">
        <g id="vuesax_outline_archive" data-name="vuesax/outline/archive" transform="translate(-172 -190)">
          <g id="archive">
            <path id="Vector" d="M3.5,1.985a8.878,8.878,0,0,1-3.01-.53.749.749,0,0,1-.45-.96.764.764,0,0,1,.97-.45A7.373,7.373,0,0,0,6,.045a.75.75,0,1,1,.51,1.41A8.878,8.878,0,0,1,3.5,1.985Z" transform="translate(180.495 198.295)" fill="#0673fc"/>
            <path id="Vector-2" data-name="Vector" d="M16.5,21.5a3.271,3.271,0,0,1-1.61-.46l-4.88-2.71a1.438,1.438,0,0,0-1.15,0L3.98,21.04a2.748,2.748,0,0,1-2.77.15A2.754,2.754,0,0,1,0,18.7V4.61A4.618,4.618,0,0,1,4.61,0h9.65a4.618,4.618,0,0,1,4.61,4.61V18.7a2.754,2.754,0,0,1-1.21,2.49A2.242,2.242,0,0,1,16.5,21.5ZM9.43,16.71a2.658,2.658,0,0,1,1.3.31l4.88,2.71a1.323,1.323,0,0,0,1.28.17,1.343,1.343,0,0,0,.47-1.2V4.61A3.12,3.12,0,0,0,14.25,1.5H4.61A3.12,3.12,0,0,0,1.5,4.61V18.7a1.331,1.331,0,0,0,.47,1.2,1.351,1.351,0,0,0,1.28-.17l4.88-2.71A2.658,2.658,0,0,1,9.43,16.71Z" transform="translate(174.57 191.25)" fill="#0673fc"/>
            <path id="Vector-3" data-name="Vector" d="M16.5,21.5a3.271,3.271,0,0,1-1.61-.46l-4.88-2.71a1.438,1.438,0,0,0-1.15,0L3.98,21.04a2.748,2.748,0,0,1-2.77.15A2.754,2.754,0,0,1,0,18.7V4.61A4.618,4.618,0,0,1,4.61,0h9.65a4.618,4.618,0,0,1,4.61,4.61V18.7a2.754,2.754,0,0,1-1.21,2.49A2.242,2.242,0,0,1,16.5,21.5ZM9.43,16.71a2.658,2.658,0,0,1,1.3.31l4.88,2.71a1.323,1.323,0,0,0,1.28.17,1.343,1.343,0,0,0,.47-1.2V4.61A3.12,3.12,0,0,0,14.25,1.5H4.61A3.12,3.12,0,0,0,1.5,4.61V18.7a1.331,1.331,0,0,0,.47,1.2,1.351,1.351,0,0,0,1.28-.17l4.88-2.71A2.658,2.658,0,0,1,9.43,16.71Z" transform="translate(174.57 191.25)" fill="#0673fc"/>
            <path id="Vector-4" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(172 190)" fill="#0673fc" opacity=".3"/>
          </g>
        </g>
      </svg>
      
    }
    return (
        <div className="post-card">
            <div className="post-card--img">
                <div className="post-card--img__img" dangerouslySetInnerHTML={{__html:props?.img}}></div>
                <div className="post-card--btn" onClick={props.click}>
                    {icon}
                </div>
            </div>
            <div className="post-card--dis">
                <h3 className="post-card--dis__title">{props?.title}</h3>
                <div className="post-card--author">
                    <div className="detail-author--profile">
                        <img src="../../../src/assets/profile.svg" alt="profile-icon" className="detail-author--profile__img" />
                        <p className="detail-author--profile__txt">{props?.firstName} {props?.lastName} </p>
                    </div>
                    <div className="blog-content--category__category">
                        <p className="blog-content--category__category-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><g id="vuesax_outline_folder-open" data-name="vuesax/outline/folder-open" transform="translate(-492 -188)"><g id="folder-open"><path id="Vector" d="M16.726,12.5H4.146c-3.4,0-3.58-1.87-3.73-3.38l-.4-5.01a3.792,3.792,0,0,1,.81-2.72A3.74,3.74,0,0,1,3.746,0h13.38A3.736,3.736,0,0,1,20,1.34l.17.23a3.687,3.687,0,0,1,.69,2.55l-.4,4.99C20.306,10.63,20.126,12.5,16.726,12.5ZM3.746,1.5a2.226,2.226,0,0,0-1.73.82l-.07.07a2.247,2.247,0,0,0-.43,1.59l.4,5.01c.14,1.46.2,2.01,2.23,2.01h12.58c2.04,0,2.09-.55,2.23-2.02l.4-5.01a2.18,2.18,0,0,0-.5-1.64l-.1-.12a2.227,2.227,0,0,0-1.64-.71Z" transform="translate(493.564 198.25)" fill="currentColor"></path><path id="Vector-2" data-name="Vector" d="M17.75,10.94a.755.755,0,0,1-.75-.75V8.4c0-2.98-.52-3.5-3.5-3.5H10.95A2.05,2.05,0,0,1,9,3.93L7.71,2.22A1.324,1.324,0,0,0,6.27,1.5H5c-2.98,0-3.5.52-3.5,3.5v5.15a.755.755,0,0,1-.75.75A.755.755,0,0,1,0,10.15V5C0,1.17,1.17,0,5,0H6.28A2.723,2.723,0,0,1,8.92,1.32l1.28,1.7c.27.36.29.38.76.38h2.55c3.83,0,5,1.17,5,5v1.79A.771.771,0,0,1,17.75,10.94Z" transform="translate(494.75 189.28)" fill="currentColor"></path><path id="Vector-3" data-name="Vector" d="M5.89,1.5H.75A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0H5.89a.75.75,0,0,1,0,1.5Z" transform="translate(500.68 204.25)" fill="currentColor"></path><path id="Vector-4" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(492 188)" fill="none" opacity="0"></path>
                            </g>
                            </g>
                            </svg>
                        </p>
                        <p>{props.category}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};
export default PostCard;