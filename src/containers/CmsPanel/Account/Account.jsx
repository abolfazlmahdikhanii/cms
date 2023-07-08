import React, { useState, useEffect } from "react";


import { toast } from 'react-toastify';
import './Account.css';
import { MdVerifiedUser } from "react-icons/md";

import { supabase } from "../../../superbase.jsx";
import Avatar from "../../../components/Avatar/Avatar.jsx";
import UserContextProvider from "../../../context/User.jsx";
import Loader from "../../../components/Ui/Loader/Loader.jsx";
import Box from "../../../components/Ui/Box/Box";
import usePublicProfile from "../../../hooks/usePublicProfile";

const Account = ({ session }) => {
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [avatar_url, setAvatarUrl] = useState(null);
    const [bio, setBio] = useState("");
    const [gender, setGender] = useState("");
    const [profession, setProfession] = useState("");
    const [errorFirstName, setErrorFirstName] = useState(false);
    const [errorlastName, setErrorLastName] = useState(false);
    const [errorUserName, setErrorUserName] = useState(false);
    const [errorBio, setErrorBio] = useState(false);

    const publicProfile=usePublicProfile


    const toastOption={
        position: "bottom-right",
        autoClose:1000,
         hideProgressBar: true,
         theme:"colored",
         style:{fontFamily:"shabnam,sans-serif"}
    }

    useEffect(() => {
        getProfile();
    }, [session]);



    const getProfile = async () => {
        try {
            setLoading(true);
            const { user } = session;

            let { data, error, status } = await supabase
                .from("profiles")
                .select(`username,firstName,lastName,avatar_url,gender,bio,profession`)
                .eq('id', user.id)
                .single();
            if (error  && status !== 406 ) {
                throw error;
            }
            if (data) {

                setUsername(data?.username);
                setFirstName(data?.firstName);
                setLastName(data?.lastName);
                setAvatarUrl(data?.avatar_url);
                setGender(data?.gender);
                setProfession(data?.profession);
                setBio(data?.bio);
            }
        }
        catch (error) {
       
            toast.error("خطا در نمایش اطلاعات", toastOption);
        }
        finally {
            setLoading(false);
        }
    };

    const updateProfile = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const { user } = session;
            const updates = {
                id: user.id,
                username,
                firstName: firstName,
                lastName: lastName,
                gender: gender,
                profession: profession,
                bio: bio,
                avatar_url,
                updated_at: new Date(),
            };
            let { error } = await supabase.from("profiles").upsert(updates);
            if (error) throw error;
            toast.success("ویرایش حساب کاربری با موفقیت انجام شد",toastOption)

        }
        catch (error) {
            toast.error("ویرایش حساب کاربری با مشکل مواجه شده است",toastOption)

        }
        finally {
            setLoading(false);

        }
    };


    const validInputHandler = (e, errType) => {



        if (e.target.value === "") {
            errType(true);

        }
        else {
            errType(false);
        }
    };
    const validInputPersianHandler = (e, errType) => {
        const persianRegex = /^[\u0600-\u06FF\s]+$/;
        if (!e.target.value.match(persianRegex)) {
            errType(true);
        }
        else errType(false);
    };
    return (

        <Box>


            <Loader show={loading} />

            <UserContextProvider userName={username} firstName={firstName} lastName={lastName} avatar={avatar_url}>


                <form onSubmit={updateProfile} className="form-widget">
                    <Avatar
                        url={publicProfile(avatar_url)}
                        onUpload={(url) => {
                            setAvatarUrl(url);
                            updateProfile({ username, firstName, lastName, avatar_url: url, bio, gender, birthDay });
                        }}
                    />
                    <div className="account-container">
                        <div className="col-grid">
                            <div>
                                <div className="form-control">
                                    <p className="form-control__txt">نام</p>
                                    <input
                                        className="form-control__input"
                                        type="text"
                                        value={firstName || ''}
                                        onChange={(e) => {
                                            validInputHandler(e, setErrorFirstName);
                                            validInputPersianHandler(e, setErrorFirstName);
                                            setFirstName(e.target.value.trim());
                                        }}
                                    />
                                </div>
                                <p className={`form-err ${errorFirstName ? 'active-input' : ''}`}>فیلد مورد نظر را تکمیل کنید</p>
                            </div>
                            <div>
                                <div className="form-control">
                                    <p className="form-control__txt">نام خانوادگی</p>
                                    <input
                                        className="form-control__input"
                                        type="text"
                                        value={lastName || ''}
                                        onChange={(e) => {
                                            validInputHandler(e, setErrorLastName);
                                            validInputPersianHandler(e, setErrorLastName);
                                            setLastName(e.target.value.trim());
                                        }}
                                    />
                                </div>
                                <p className={`form-err ${errorlastName ? 'active-input' : ''}`}>فیلد مورد نظر را تکمیل کنید</p>
                            </div>
                        </div>

                        <div className="col-grid--2">
                            <div>
                                <div className="form-control form-control--email">
                                    <div className="form-control__row">
                                        <p className="form-control__txt">ایمیل</p>
                                        <p
                                            className="form-control__input"

                                        >{session.user.email.trim()}</p>
                                    </div>
                                    <MdVerifiedUser color="#16a34a" />
                                </div>

                            </div>
                            <div>
                                <div className="form-control">
                                    <p className="form-control__txt">نام کاربری</p>

                                    <div className="form-control__row form-control__row--2">
                                        <p className="form-control__row-txt">http://digiblog.ir/@</p>
                                        <input
                                            className="form-control__input"
                                            type="text"
                                            value={username || ''}
                                            onChange={(e) => {
                                                validInputHandler(e, setErrorUserName);

                                                setUsername(e.target.value.trim());
                                            }}
                                        />
                                    </div>
                                </div>
                                <p className={`form-err ${errorUserName ? 'active-input' : ''}`}>فیلد مورد نظر را تکمیل کنید</p>
                            </div>
                        </div>


                        <h4 className="account-subtitle__txt">اطلاعات فردی</h4>
                        <div className="col-grid--3">
                            <div>
                                <div className="form-control">
                                    <p className="form-control__txt">جنسیت</p>
                                    <select
                                        className=" from-control__select form-control__input"
                                        type="text"
                                        value={gender || ''}
                                        onChange={(e) => {


                                            setGender(e.target.value);
                                        }}
                                    >
                                        <option > انتخاب نمایید</option>
                                        <option value="man">مرد</option>
                                        <option value="woman">زن</option>



                                    </select>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={24} height={24}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                                
                            </div>
                            <div>
                                <div className="form-control">
                                    <p className="form-control__txt">تخصص</p>
                                    <input
                                        className="form-control__input"
                                        type="text"
                                        value={profession || ''}
                                        onChange={(e) => setProfession(e.target.value.trim()) }
                                    />
                                </div>
                            </div>


                        </div>
                        <div>
                            <div className="form-control">
                                <p className="form-control__txt">توضیحات پروفایل</p>
                                <textarea
                                    className="form-control__input form-control__txt-area"
                                    type="text"
                                    value={bio || ''}
                                    onChange={(e) => {
                                        validInputHandler(e, setErrorBio);

                                        setBio(e.target.value);
                                    }}
                                ></textarea>
                            </div>
                            <p className={`form-err ${errorBio ? 'active-input' : ''}`}>فیلد مورد نظر را تکمیل کنید</p>
                        </div>
                    </div>
                    <div>
                        <button className="btn-item btn-action" disabled={loading}>
                            بروزرسانی پروفایل
                        </button>
                    </div>

                </form>
            </UserContextProvider>



        </Box>
    );
};

export default Account;