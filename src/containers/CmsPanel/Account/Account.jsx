import React, { useState, useEffect } from "react";
import './Account.css';
import { MdVerifiedUser } from "react-icons/md";
import { supabase } from "../../../superbase.jsx";
import Avatar from "../../../components/Avatar/Avatar.jsx";
import UserContextProvider from "../../../context/User.jsx";
import Loader from "../../../components/Ui/Loader/Loader.jsx";
import Box from "../../../components/Ui/Box/Box";

const Account = ({ session }) => {
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [avatar_url, setAvatarUrl] = useState(null);
    const [error, setError] = useState(false);


    useEffect(() => {
        getProfile();
    }, [session]);



    const getProfile = async () => {
        try {
            setLoading(true);
            const { user } = session;

            let { data, error, status } = await supabase
                .from("profiles")
                .select(`username,firstName,lastName,avatar_url`)
                .eq('id', user.id)
                .single();
            if (error && status !== 406) {
                throw error;
            }
            if (data) {
                
                setUsername(data.username);
                setFirstName(data.firstName);
                setLastName(data.lastName);
                setAvatarUrl(data.avatar_url);
            }
        }
        catch (error) {
            alert(error.message);
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
                firstName: firstName ,
                lastName:lastName,
                avatar_url,
                updated_at: new Date(),
            };
            let { error } = await supabase.from("profiles").upsert(updates);
            if (error) throw error;
        }
        catch (error) {
            alert(error.message);
        }
        finally {
            setLoading(false);

        }
    };


    const validInputHandler = (e) => {



        if (e.target.value === "") {
            setError(true);

        }
        else {
            setError(false);
        }
    };
    const validInputPersianHandler=(e)=>{
        const persianRegex=/^[\u0600-\u06FF\s]+$/
        if(!e.target.value.match(persianRegex)){
            setError(true)
        }
        else setError(false)
    }
    return (

        <Box>

            {loading ? (
                <Loader show={loading} />
            ) : (
                <UserContextProvider userName={username} firstName={firstName} lastName={lastName} avatar={avatar_url}>


                    <form onSubmit={updateProfile} className="form-widget">
                        <Avatar
                            url={avatar_url}
                            onUpload={(url) => {
                                setAvatarUrl(url);
                                updateProfile({ username, firstName, lastName, avatar_url: url });
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
                                            validInputHandler(e);
                                            validInputPersianHandler(e);
                                            setFirstName(e.target.value);
                                        }}
                                    />
                                </div>
                                <p className={`form-err ${error ? 'active-input' : ''}`}>فیلد مورد نظر را تکمیل کنید</p>
                            </div>
                            <div>
                                <div className="form-control">
                                    <p className="form-control__txt">نام خانوادگی</p>
                                    <input
                                        className="form-control__input"
                                        type="text"
                                        value={lastName || ''}
                                        onChange={(e) => {
                                            validInputHandler(e);
                                            validInputPersianHandler(e);
                                            setLastName(e.target.value);
                                        }}
                                    />
                                </div>
                                <p className={`form-err ${error ? 'active-input' : ''}`}>فیلد مورد نظر را تکمیل کنید</p>
                            </div>
                        </div>

                        <div>
                            <div className="form-control form-control--email">
                                <div className="form-control__row">
                                    <p className="form-control__txt">ایمیل</p>
                                    <p
                                        className="form-control__input"

                                    >{session.user.email}</p>
                                </div>
                                <MdVerifiedUser color="#16a34a" />
                            </div>

                        </div>
                        <div>
                            <div className="form-control">
                                <p className="form-control__txt">نام کاربری</p>
                                <input
                                    className="form-control__input"
                                    type="text"
                                    value={username || ''}
                                    onChange={(e) => {
                                        validInputHandler(e);
                                        
                                        setUsername(e.target.value);
                                    }}
                                />
                            </div>
                            <p className={`form-err ${error ? 'active-input' : ''}`}>فیلد مورد نظر را تکمیل کنید</p>
                        </div>

                        </div>
                        <div>
                            <button className="btn-item btn-action" disabled={loading}>
                                بروزرسانی پروفایل
                            </button>
                        </div>
                    </form>
                </UserContextProvider>
            )}


        </Box>
    );
};

export default Account;