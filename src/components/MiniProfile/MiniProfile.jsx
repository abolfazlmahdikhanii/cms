import React from "react";

import { Link } from "react-router-dom";
import "./MiniProfile.css";
import profileIcon from "../../assets/profile.svg";
import useSignOut from "../../hooks/useSignOut";
import { supabase } from "../../superbase";


const MiniProfile = (props) => {

  

    return (
        <div className={`mini-profile-box ${props.show ? 'show-profile' : ''}`}>
            <div className="profile-item">
                <Link className="mini-profile__account ">
                    <div>
                        <img src={profileIcon} alt="profile" className="mini-profile__img" />
                    </div>
                    <div className="mini-profile__account-info">
                        <p className="mini-profile__txt">{props?.fullName===null ? props.email : props.fullName}</p>
                        <p className="mini-profile__svg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mini-profile__svg-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>

                        </p>
                    </div>
                </Link>
            </div>
            <ul className="profile-list">
                <li className="profile-item">
                    <Link to="/panel/blog-list" className="profile-item__link">
                        <p className="mini-profile__svg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                                <g id="vuesax_outline_task-square" data-name="vuesax/outline/task-square" transform="translate(-492 -316)">
                                    <g id="task-square">
                                        <path id="Vector" d="M6,1.5H.75A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0H6A.75.75,0,0,1,6,1.5Z" transform="translate(503.62 324.12)" fill="currentColor" />
                                        <path id="Vector-2" data-name="Vector" d="M1.5,3.748a.742.742,0,0,1-.53-.22l-.75-.75a.75.75,0,0,1,1.06-1.06l.22.22L3.217.218a.75.75,0,0,1,1.06,1.06l-2.25,2.25A.749.749,0,0,1,1.5,3.748Z" transform="translate(497.622 322.633)" fill="currentColor" />
                                        <path id="Vector-3" data-name="Vector" d="M6,1.5H.75A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0H6A.75.75,0,0,1,6,1.5Z" transform="translate(503.62 331.12)" fill="currentColor" />
                                        <path id="Vector-4" data-name="Vector" d="M1.5,3.747a.742.742,0,0,1-.53-.22l-.75-.75a.75.75,0,0,1,1.06-1.06l.22.22L3.217.218a.75.75,0,0,1,1.06,1.06l-2.25,2.25A.749.749,0,0,1,1.5,3.747Z" transform="translate(497.622 329.633)" fill="currentColor" />
                                        <path id="Vector-5" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(492 316)" fill="none" opacity="0" />
                                        <path id="Vector-6" data-name="Vector" d="M13.75,21.5h-6C2.32,21.5,0,19.18,0,13.75v-6C0,2.32,2.32,0,7.75,0h6c5.43,0,7.75,2.32,7.75,7.75v6C21.5,19.18,19.18,21.5,13.75,21.5Zm-6-20C3.14,1.5,1.5,3.14,1.5,7.75v6C1.5,18.36,3.14,20,7.75,20h6C18.36,20,20,18.36,20,13.75v-6c0-4.61-1.64-6.25-6.25-6.25Z" transform="translate(493.25 317.25)" fill="currentColor" />
                                    </g>
                                </g>
                            </svg>

                        </p>
                        <p className="mini-profile__txt">
                            لیست پست ها
                        </p>
                    </Link>
                </li>
                <li className="profile-item">
                    <Link to="panel/favotites" className="profile-item__link">
                        <p className="mini-profile__svg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                                <g id="vuesax_outline_heart" data-name="vuesax/outline/heart" transform="translate(-236 -188)">
                                    <g id="heart">
                                        <path id="Vector" d="M10.75,19.3a2.589,2.589,0,0,1-.86-.13C6.07,17.86,0,13.21,0,6.34A6.329,6.329,0,0,1,6.31,0a6.214,6.214,0,0,1,4.44,1.84A6.214,6.214,0,0,1,15.19,0,6.336,6.336,0,0,1,21.5,6.34c0,6.88-6.07,11.52-9.89,12.83A2.589,2.589,0,0,1,10.75,19.3ZM6.31,1.5A4.831,4.831,0,0,0,1.5,6.34c0,6.83,6.57,10.63,8.88,11.42a1.585,1.585,0,0,0,.75,0c2.3-.79,8.88-4.58,8.88-11.42A4.831,4.831,0,0,0,15.2,1.5a4.751,4.751,0,0,0-3.84,1.94.774.774,0,0,1-1.2,0A4.77,4.77,0,0,0,6.31,1.5Z" transform="translate(237.25 190.35)" fill="currentColor" />
                                        <path id="Vector-2" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(236 188)" fill="none" opacity="0" />
                                    </g>
                                </g>
                            </svg>


                        </p>
                        <p className="mini-profile__txt">
                            مورد علاقه ها
                        </p>
                    </Link>
                </li>
                <li className="profile-item">
                    <div className="profile-item__link">
                        <p className="mini-profile__svg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                                <g id="star" transform="translate(-108 -188)">
                                    <path id="Vector" d="M16.41,21.35a4.124,4.124,0,0,1-2.06-.67l-2.99-1.77a1.423,1.423,0,0,0-1.21,0l-3,1.77c-1.77,1.05-2.81.63-3.28.29s-1.18-1.21-.71-3.21l.71-3.07a1.411,1.411,0,0,0-.32-1.11L1.07,11.1A2.715,2.715,0,0,1,.1,8.28,2.747,2.747,0,0,1,2.53,6.55l3.19-.53a1.43,1.43,0,0,0,.86-.64L8.35,1.85C9.15.24,10.2,0,10.75,0s1.6.24,2.4,1.85l1.76,3.52a1.48,1.48,0,0,0,.87.64l3.19.53A2.717,2.717,0,0,1,21.4,8.27a2.757,2.757,0,0,1-.97,2.82l-2.48,2.49a1.439,1.439,0,0,0-.32,1.11l.71,3.07c.46,2-.25,2.87-.71,3.21A2.046,2.046,0,0,1,16.41,21.35Zm-5.66-4.08a2.737,2.737,0,0,1,1.37.35l2.99,1.77c.87.52,1.42.52,1.63.37s.36-.68.14-1.66l-.71-3.07a2.925,2.925,0,0,1,.72-2.51l2.48-2.48c.49-.49.71-.97.61-1.3s-.57-.6-1.25-.71L15.54,7.5a2.931,2.931,0,0,1-1.96-1.45L11.82,2.53c-.32-.64-.72-1.02-1.07-1.02S10,1.89,9.69,2.53L7.92,6.05A2.931,2.931,0,0,1,5.96,7.5l-3.18.53c-.68.11-1.14.38-1.25.71s.12.82.61,1.3l2.48,2.48a2.917,2.917,0,0,1,.72,2.51L4.63,18.1c-.23.99-.07,1.51.14,1.66s.75.14,1.63-.37l2.99-1.77A2.673,2.673,0,0,1,10.75,17.27Z" transform="translate(109.25 189.32)" fill="currentColor" />
                                    <path id="Vector-2" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(108 188)" fill="none" opacity="0" />
                                </g>
                            </svg>


                        </p>
                        <p className="mini-profile__txt">
                            امتیازات
                        </p>
                    </div>
                </li>
                <li className="profile-item">
                    <Link to="panel/saved-post" className="profile-item__link">
                        <p className="mini-profile__svg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                                <g id="vuesax_outline_save-2" data-name="vuesax/outline/save-2" transform="translate(-556 -190)">
                                    <g id="save-2">
                                        <path id="Vector" d="M2.06,17.63a1.959,1.959,0,0,1-1.01-.27A2.361,2.361,0,0,1,0,15.22V3.86A3.862,3.862,0,0,1,3.86,0h7.78A3.862,3.862,0,0,1,15.5,3.86V15.22a2.372,2.372,0,0,1-1.05,2.14,2.377,2.377,0,0,1-2.38-.12L8.14,15.05a.963.963,0,0,0-.78,0L3.43,17.24A2.8,2.8,0,0,1,2.06,17.63ZM3.87,1.51A2.364,2.364,0,0,0,1.51,3.87V15.23a.973.973,0,0,0,.31.84.991.991,0,0,0,.89-.14l3.93-2.19a2.521,2.521,0,0,1,2.24,0l3.93,2.19a.989.989,0,0,0,.89.14.973.973,0,0,0,.31-.84V3.87a2.364,2.364,0,0,0-2.36-2.36Z" transform="translate(557.24 195.12)" fill="currentColor" />
                                        <path id="Vector-2" data-name="Vector" d="M13.44,17.61a2.93,2.93,0,0,1-1.37-.38L8.14,15.04a1.078,1.078,0,0,0-.79,0L3.43,17.23a2.378,2.378,0,0,1-2.38.12A2.355,2.355,0,0,1,0,15.22V3.86A3.862,3.862,0,0,1,3.86,0h7.78A3.862,3.862,0,0,1,15.5,3.86V15.22a2.355,2.355,0,0,1-1.05,2.13A2.025,2.025,0,0,1,13.44,17.61ZM7.75,13.46a2.347,2.347,0,0,1,1.12.27l3.93,2.19a.952.952,0,0,0,.89.13.973.973,0,0,0,.31-.84V3.85a2.364,2.364,0,0,0-2.36-2.36H3.86A2.364,2.364,0,0,0,1.5,3.85V15.21a.973.973,0,0,0,.31.84.991.991,0,0,0,.89-.14l3.93-2.19A2.432,2.432,0,0,1,7.75,13.46Z" transform="translate(557.25 195.14)" fill="currentColor" />
                                        <path id="Vector-3" data-name="Vector" d="M13.44,17.61a2.93,2.93,0,0,1-1.37-.38L8.38,15.17A.732.732,0,0,1,8,14.52V7.74A2.364,2.364,0,0,0,5.64,5.38H.75A.755.755,0,0,1,0,4.63V3.86A3.862,3.862,0,0,1,3.86,0h7.78A3.862,3.862,0,0,1,15.5,3.86V15.22a2.355,2.355,0,0,1-1.05,2.13A2.025,2.025,0,0,1,13.44,17.61ZM9.5,14.07l3.3,1.85a.95.95,0,0,0,.89.13.958.958,0,0,0,.31-.84V3.85a2.364,2.364,0,0,0-2.36-2.36H3.86A2.364,2.364,0,0,0,1.5,3.85v.02H5.64A3.862,3.862,0,0,1,9.5,7.73v6.34Z" transform="translate(563.25 191.26)" fill="currentColor" />
                                        <path id="Vector-4" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(556 190)" fill="none" opacity="0" />
                                    </g>
                                </g>
                            </svg>


                        </p>
                        <p className="mini-profile__txt">
                            پست های ذخیره شده
                        </p>
                    </Link>
                </li>
                <li className="profile-item">
                    <div className="profile-item__link" onClick={()=>supabase.auth.signOut()}>
                        <p className="mini-profile__svg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                                <g id="vuesax_outline_task-square" data-name="vuesax/outline/task-square" transform="translate(-492 -316)">
                                    <g id="task-square">
                                        <path id="Vector" d="M6,1.5H.75A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0H6A.75.75,0,0,1,6,1.5Z" transform="translate(503.62 324.12)" fill="currentColor" />
                                        <path id="Vector-2" data-name="Vector" d="M1.5,3.748a.742.742,0,0,1-.53-.22l-.75-.75a.75.75,0,0,1,1.06-1.06l.22.22L3.217.218a.75.75,0,0,1,1.06,1.06l-2.25,2.25A.749.749,0,0,1,1.5,3.748Z" transform="translate(497.622 322.633)" fill="currentColor" />
                                        <path id="Vector-3" data-name="Vector" d="M6,1.5H.75A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0H6A.75.75,0,0,1,6,1.5Z" transform="translate(503.62 331.12)" fill="currentColor" />
                                        <path id="Vector-4" data-name="Vector" d="M1.5,3.747a.742.742,0,0,1-.53-.22l-.75-.75a.75.75,0,0,1,1.06-1.06l.22.22L3.217.218a.75.75,0,0,1,1.06,1.06l-2.25,2.25A.749.749,0,0,1,1.5,3.747Z" transform="translate(497.622 329.633)" fill="currentColor" />
                                        <path id="Vector-5" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(492 316)" fill="none" opacity="0" />
                                        <path id="Vector-6" data-name="Vector" d="M13.75,21.5h-6C2.32,21.5,0,19.18,0,13.75v-6C0,2.32,2.32,0,7.75,0h6c5.43,0,7.75,2.32,7.75,7.75v6C21.5,19.18,19.18,21.5,13.75,21.5Zm-6-20C3.14,1.5,1.5,3.14,1.5,7.75v6C1.5,18.36,3.14,20,7.75,20h6C18.36,20,20,18.36,20,13.75v-6c0-4.61-1.64-6.25-6.25-6.25Z" transform="translate(493.25 317.25)" fill="currentColor" />
                                    </g>
                                </g>
                            </svg>

                        </p>
                        <p className="mini-profile__txt">
                            خروج از حساب کاربری
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    );
};
export default MiniProfile;