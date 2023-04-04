import React from "react";
import "./NavItem.css";
import { NavLink } from "react-router-dom";


const NavItem = () => {

    return (
        <ul>
            <li className="nav">
                <NavLink to="/panel" end className="nav-item" activeclassname="active">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g id="vuesax_bulk_category" data-name="vuesax/bulk/category" transform="translate(-108 -188)">
                            <g id="category">
                                <path id="Vector" d="M5.24,0H3.34A2.979,2.979,0,0,0,0,3.33v1.9A2.976,2.976,0,0,0,3.33,8.56h1.9A2.976,2.976,0,0,0,8.56,5.23V3.33A2.965,2.965,0,0,0,5.24,0Z" transform="translate(110 190)" fill="currentColor" />
                                <path id="Vector-2" data-name="Vector" d="M5.23,0H3.33A2.976,2.976,0,0,0,0,3.33v1.9A2.976,2.976,0,0,0,3.33,8.56h1.9A2.976,2.976,0,0,0,8.56,5.23V3.33A2.976,2.976,0,0,0,5.23,0Z" transform="translate(121.44 190)" fill="currentColor" opacity="0.4" />
                                <path id="Vector-3" data-name="Vector" d="M5.23,0H3.33A2.976,2.976,0,0,0,0,3.33v1.9A2.976,2.976,0,0,0,3.33,8.56h1.9A2.976,2.976,0,0,0,8.56,5.23V3.33A2.976,2.976,0,0,0,5.23,0Z" transform="translate(121.44 201.43)" fill="currentColor" />
                                <path id="Vector-4" data-name="Vector" d="M5.24,0H3.34A2.979,2.979,0,0,0,0,3.33v1.9A2.979,2.979,0,0,0,3.33,8.57h1.9A2.976,2.976,0,0,0,8.56,5.24V3.34A2.968,2.968,0,0,0,5.24,0Z" transform="translate(110 201.43)" fill="currentColor" opacity="0.4" />
                                <path id="Vector-5" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(108 188)" fill="none" opacity="0" />
                            </g>
                        </g>
                    </svg>
                    <p className="nav-item__txt">داشبورد</p>
                </NavLink>
            </li>
            <li className="nav">
                <NavLink to="/panel/create-blog" end className="nav-item" activeclassname="active" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g id="vuesax_bulk_note-favorite" data-name="vuesax/bulk/note-favorite" transform="translate(-108 -380)">
                            <g id="note-favorite">
                                <path id="Vector" d="M0,0H24V24H0Z" transform="translate(108 380)" fill="none" opacity="0" />
                                <g id="Group">
                                    <path id="Vector-2" data-name="Vector" d="M.75,4.5A.755.755,0,0,1,0,3.75v-3A.755.755,0,0,1,.75,0,.755.755,0,0,1,1.5.75v3A.755.755,0,0,1,.75,4.5Z" transform="translate(114.25 381.25)" fill="currentColor" />
                                </g>
                                <g id="Group-2" data-name="Group">
                                    <path id="Vector-3" data-name="Vector" d="M.75,4.5A.755.755,0,0,1,0,3.75v-3A.755.755,0,0,1,.75,0,.755.755,0,0,1,1.5.75v3A.755.755,0,0,1,.75,4.5Z" transform="translate(122.25 381.25)" fill="currentColor" />
                                </g>
                                <path id="Vector-4" data-name="Vector" d="M18,5v8.5c0,3-1.5,5-5,5H5c-3.5,0-5-2-5-5V5C0,2,1.5,0,5,0h8C16.5,0,18,2,18,5Z" transform="translate(110 383.5)" fill="currentColor" opacity="0.4" />
                                <g id="Group-3" data-name="Group">
                                    <path id="Vector-5" data-name="Vector" d="M6.75,1.5h-6A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0h6A.755.755,0,0,1,7.5.75.755.755,0,0,1,6.75,1.5Z" transform="translate(114.25 390.25)" fill="currentColor" />
                                </g>
                                <g id="Group-4" data-name="Group">
                                    <path id="Vector-6" data-name="Vector" d="M3.75,1.5h-3A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0h3A.755.755,0,0,1,4.5.75.755.755,0,0,1,3.75,1.5Z" transform="translate(114.25 395.25)" fill="currentColor" />
                                </g>
                                <path id="Vector-7" data-name="Vector" d="M8.5,1.13a5.228,5.228,0,0,0-6.53.03A5.211,5.211,0,0,0,.76,7.95,5.265,5.265,0,0,0,2.18,9.5,5.2,5.2,0,0,0,8.7,9.19,4.64,4.64,0,0,0,9.74,7.95a5.176,5.176,0,0,0,.76-2.7A5.23,5.23,0,0,0,8.5,1.13ZM5.25,7.75a2.5,2.5,0,0,0-2.5-2.5,2.5,2.5,0,0,0,2.5-2.5,2.5,2.5,0,0,0,2.5,2.5A2.5,2.5,0,0,0,5.25,7.75Z" transform="translate(120.5 392.5)" fill="#292d32" />
                            </g>
                        </g>
                    </svg>
                    <p className="nav-item__txt">ایجاد بلاگ</p>
                </NavLink>

            </li>
            <li className="nav">

                <NavLink to="/panel/blog-list/"  className="nav-item" activeclassname="active" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <g id="vuesax_bulk_task-square" data-name="vuesax/bulk/task-square" transform="translate(-494 -317.97)">
                            <g id="task-square">
                                <path id="Vector" d="M14.19,0H5.81C2.17,0,0,2.17,0,5.81v8.38C0,17.83,2.17,20,5.81,20h8.38C17.83,20,20,17.83,20,14.19V5.81C20,2.17,17.83,0,14.19,0Z" transform="translate(494 317.97)" fill="currentColor" opacity="0.4" />
                                <path id="Vector-2" data-name="Vector" d="M6.75.75A.749.749,0,0,1,6,1.5H.75A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0H6A.749.749,0,0,1,6.75.75Z" transform="translate(503.56 324.09)" fill="currentColor" />
                                <path id="Vector-3" data-name="Vector" d="M4.285,1.277l-2.25,2.25a.742.742,0,0,1-.53.22.725.725,0,0,1-.53-.22l-.75-.75a.737.737,0,0,1,0-1.06.754.754,0,0,1,1.06,0l.22.22L3.225.218a.75.75,0,1,1,1.06,1.06Z" transform="translate(497.685 322.592)" fill="currentColor" />
                                <path id="Vector-4" data-name="Vector" d="M6.75.75A.749.749,0,0,1,6,1.5H.75A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0H6A.749.749,0,0,1,6.75.75Z" transform="translate(503.56 331.09)" fill="currentColor" />
                                <path id="Vector-5" data-name="Vector" d="M4.285,1.277l-2.25,2.25a.742.742,0,0,1-.53.22.725.725,0,0,1-.53-.22l-.75-.75a.737.737,0,0,1,0-1.06.754.754,0,0,1,1.06,0l.22.22L3.225.218a.75.75,0,1,1,1.06,1.06Z" transform="translate(497.685 329.592)" fill="currentColor" />
                            </g>
                        </g>
                    </svg>

                    <p className="nav-item__txt">لیست بلاگ</p>
                </NavLink>
            </li>

            <li className="nav">

                <NavLink to="/panel/favorites" end className="nav-item" activeclassname="active">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                        <g id="vuesax_bulk_lovely" data-name="vuesax/bulk/lovely" transform="translate(-748 -252)">
                            <g id="lovely">
                                <path id="Vector" d="M0,0H24V24H0Z" transform="translate(748 252)" fill="none" opacity="0" />
                                <path id="Vector-2" data-name="Vector" d="M17.86,4.99c0,.15,0,.3-.01.44a4.527,4.527,0,0,0-4.53.86,4.43,4.43,0,0,0-2.98-1.14A4.477,4.477,0,0,0,5.88,9.64a8.7,8.7,0,0,0,2.78,6.24,1.058,1.058,0,0,1-.28-.06C5.79,14.93,0,11.25,0,4.99a4.958,4.958,0,0,1,8.93-3,4.958,4.958,0,0,1,8.93,3Z" transform="translate(750 255.1)" fill="currentColor" opacity="0.4" />
                                <path id="Vector-3" data-name="Vector" d="M8.58,0A3.31,3.31,0,0,0,5.94,1.32,3.3,3.3,0,0,0,0,3.32,6.148,6.148,0,0,0,.31,5.28a8.951,8.951,0,0,0,5.26,5.23,1.33,1.33,0,0,0,.74,0,8.951,8.951,0,0,0,5.26-5.23,6.24,6.24,0,0,0,.31-1.96A3.308,3.308,0,0,0,8.58,0Z" transform="translate(757.42 261.59)" fill="currentColor" />
                            </g>
                        </g>
                    </svg>



                    <p className="nav-item__txt">مورد علاقه ها</p>
                </NavLink>

            </li>
            <li className="nav">

                <NavLink to="/panel/saved-post" end className="nav-item" activeclassname="active">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                        <g id="vuesax_bulk_save-2" data-name="vuesax/bulk/save-2" transform="translate(-556 -190)">
                            <g id="save-2">
                                <path id="Vector" d="M0,0H24V24H0Z" transform="translate(556 190)" fill="none" opacity="0" />
                                <path id="Vector-2" data-name="Vector" d="M10.89,0H3.11A3.12,3.12,0,0,0,0,3.11V14.47c0,1.45,1.04,2.07,2.31,1.36l3.93-2.19a1.738,1.738,0,0,1,1.51,0l3.93,2.19c1.27.71,2.31.09,2.31-1.36V3.11A3.1,3.1,0,0,0,10.89,0Z" transform="translate(558 195.88)" fill="currentColor" opacity="0.4" />
                                <path id="Vector-3" data-name="Vector" d="M14,3.11V14.47c0,1.45-1.04,2.06-2.31,1.36L8,13.77V6.99A3.12,3.12,0,0,0,4.89,3.88H0V3.11A3.12,3.12,0,0,1,3.11,0h7.78A3.12,3.12,0,0,1,14,3.11Z" transform="translate(564 192)" fill="currentColor" />
                            </g>
                        </g>
                    </svg>




                    <p className="nav-item__txt">ذخیره شده ها</p>
                </NavLink>

            </li>
            <li className="nav">

                <NavLink to="/panel/account" end className="nav-item" activeclassname="active">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <g id="vuesax_bulk_profile" data-name="vuesax/bulk/profile" transform="translate(-108 -252)">
                            <g id="profile">
                                <path id="Vector" d="M4.75,0a4.746,4.746,0,0,0-.12,9.49.807.807,0,0,1,.22,0h.07A4.746,4.746,0,0,0,4.75,0Z" transform="translate(115.25 254)" fill="currentColor" opacity="0.4" />
                                <path id="Vector-2" data-name="Vector" d="M12.12,1.395a9.929,9.929,0,0,0-10.15,0A3.947,3.947,0,0,0,0,4.625a3.914,3.914,0,0,0,1.96,3.21,9.239,9.239,0,0,0,5.08,1.41,9.239,9.239,0,0,0,5.08-1.41,3.945,3.945,0,0,0,1.96-3.23A3.937,3.937,0,0,0,12.12,1.395Z" transform="translate(112.96 264.755)" fill="currentColor" />
                                <path id="Vector-3" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(108 252)" fill="none" opacity="0" />
                            </g>
                        </g>
                    </svg>


                    <p className="nav-item__txt"> حساب کاربری </p>
                </NavLink>
            </li>
        </ul>

    );
};

export default NavItem;