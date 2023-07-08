import React, { useState, useEffect } from "react";
import './Avatar.css'
import { supabase } from "../../superbase.jsx";
import profileIcon from "../../../src/assets/profile.svg";
import usePublicProfile from "../../hooks/usePublicProfile";
const Avatar = ({ url, size, onUpload }) => {
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [uploading, setUploading] = useState(false);
   
  
    const uploadAvatar = async (event) => {
        event.preventDefault();
        try {
            setUploading(true);

            if (!event.target.files || event.target.files.length === 0) {
                throw new Error('You must select an image to upload.');
            }

            const file = event.target.files[0];
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random()}.${fileExt}`;
            const filePath = `${fileName}`;

            let { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file);

            if (uploadError) {
                throw uploadError;
            }

            onUpload(filePath);
        } catch (error) {
            alert(error.message);
        } finally {
            setUploading(false);
        }
    };
    return (
        <div style={{ width: size }} aria-live="polite" className="avatar-container">
            <img
                src={url ? url :profileIcon}
                alt={url ? 'Avatar' : 'No image'}
                className="avatar-img"
                style={{ height: size, width: size }}
            />
            {uploading ? (
                'درحال اپلود ...'
            ) : (
                <>
                    <label className="lbl-avatar" htmlFor="single">
                        <p className="lbl-avatar__svg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <g id="vuesax_outline_edit-2" data-name="vuesax/outline/edit-2" transform="translate(-684 -252)">
                                    <g id="edit-2">
                                        <path id="Vector" d="M2.288,18.094a2.291,2.291,0,0,1-1.59-.6,2.382,2.382,0,0,1-.68-2.03l.37-3.24a3.605,3.605,0,0,1,.87-1.86l8.21-8.69c2.05-2.17,4.19-2.23,6.36-.18s2.23,4.19.18,6.36L7.8,16.544a3.6,3.6,0,0,1-1.81.97l-3.22.55C2.6,18.074,2.448,18.094,2.288,18.094Zm10.39-16.61a3.055,3.055,0,0,0-2.12,1.2l-8.21,8.7a2.309,2.309,0,0,0-.47,1l-.37,3.24a.879.879,0,0,0,.22.77.9.9,0,0,0,.78.18l3.22-.55a2.234,2.234,0,0,0,.97-.52l8.21-8.69c1.24-1.32,1.69-2.54-.12-4.24A3.162,3.162,0,0,0,12.678,1.484Z" transform="translate(687.252 253.426)" fill="currentColor" />
                                        <path id="Vector-2" data-name="Vector" d="M6.188,6.648h-.07A6.859,6.859,0,0,1,.008.868a.762.762,0,0,1,.63-.86.762.762,0,0,1,.86.63,5.372,5.372,0,0,0,4.78,4.52.751.751,0,0,1,.67.82A.774.774,0,0,1,6.188,6.648Z" transform="translate(695.152 256.302)" fill="currentColor" />
                                        <path id="Vector-3" data-name="Vector" d="M18.75,1.5H.75A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0h18a.755.755,0,0,1,.75.75A.755.755,0,0,1,18.75,1.5Z" transform="translate(686.25 273.25)" fill="currentColor" />
                                        <path id="Vector-4" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(684 252)" fill="none" opacity="0" />
                                    </g>
                                </g>
                            </svg>
                        </p>
                        <p>ویرایش عکس پروفایل</p>
                    </label>
                    <div className="visually-hidden">
                        <input
                            type="file"
                            id="single"
                            accept="image/*"
                            onChange={uploadAvatar}
                            disabled={uploading}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default Avatar;