import React, { useState, useEffect, useCallback } from "react";
import { ToastContainer } from 'react-toastify';
import './Cms.css';
import Wrapper from "../../hoc/Wrapper.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";
import Header from "../../components/Header/Header.jsx";
import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import CreateBlog from "./CreateBlog/CreateBlog";
import Loader from "../../components/Ui/Loader/Loader";
import { supabase } from "../../superbase";
import Account from "./Account/Account";
import BlogList from "./BlogList/BlogList";
import Favorites from "./Favorites/Favorites";
import Saves from "./Saves/Saves";
import Alert from "../../components/Ui/Alert/Alert";


const Cms = ({ session }) => {
    const [userData, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userName, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [showAlert, setShowAlert] = useState(false);


    const [date, setDate] = useState(null);




    useEffect(() => {


        showUserName();
        checkUser();

        const now = new Date();
        const formatDate = new Intl.DateTimeFormat("fa", {
            day: "numeric",
            year: "numeric",
            month: "long",
            weekday: "long",

        }).format(now);
        setDate(formatDate);







    }, [userName, firstName, lastName]);

    const checkUser = () => {
        if (!userName || !firstName || !lastName) {
            setShowAlert(true);


        }
        else {

            setShowAlert(false);
        }

    };

    const showUserName = useCallback(async () => {


        try {


            const { user } = session;

            setLoading(false);

            let { data, error, status } = await supabase
                .from("profiles")
                .select(`username,firstName,lastName,avatar_url`)
                .eq('id', user?.id)
                .single();


            if (error && status !== 406) {
                throw error;
            }
            if (data) {


                setUserName(data?.username);
                setFirstName(data?.firstName);
                setLastName(data?.lastName);
                setAvatarUrl(data?.avatar_url);
            }
        }
        catch (error) {
            setLoading(true);
            console.log(error);

        }

    }, []);

    const getSession = async () => {
        try {
            const { data, error } = await supabase.auth.getUser();
            setUser(data.user);


            if (error) throw error;

        } catch (error) {
            console.log(error.message);

        }
    };


    return (
        <Wrapper>

            <Loader show={loading} />


            <div className="cms">
                <Navigation />

                <section className="center-panel">
                    <Header fullName={`${firstName} ${lastName}`}>
                    <div className="header--row">
                    <p className="header-right__title  header-right__txt">
                            {userName || session?.user?.email} عزیز; خوش آمدی. 👋
                        </p>
                        <i className="header-right__border"></i>
                        <p className="header-right__date header-right__txt">
                            {date}
                        </p>
                    </div>
                    </Header>


                    <main className="main-panel">

                        <Alert show={showAlert}>
                            <div className="alert-icon alert-icon--fill-info">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <g id="vuesax_bold_frame" data-name="vuesax/bold/frame" transform="translate(-108 -252)">
                                        <g id="frame">
                                            <path id="Vector" d="M4.75,0a4.746,4.746,0,0,0-.12,9.49.807.807,0,0,1,.22,0h.07A4.746,4.746,0,0,0,4.75,0Z" transform="translate(115.25 254)" fill="#fff" />
                                            <path id="Vector-2" data-name="Vector" d="M12.12,1.395a9.929,9.929,0,0,0-10.15,0A3.947,3.947,0,0,0,0,4.625a3.914,3.914,0,0,0,1.96,3.21,9.239,9.239,0,0,0,5.08,1.41,9.239,9.239,0,0,0,5.08-1.41,3.945,3.945,0,0,0,1.96-3.23A3.937,3.937,0,0,0,12.12,1.395Z" transform="translate(112.96 264.755)" fill="#fff" />
                                            <path id="Vector-3" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(132 276) rotate(180)" fill="none" opacity="0" />
                                        </g>
                                    </g>
                                </svg>

                            </div>
                            <p>اطلاعات کاربری خود را تکمیل نمایید <Link to="/panel/account">حساب کاربری</Link></p>
                        </Alert>

                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="account" element={<Account key={session.user.id} session={session} />} />
                            <Route path="create-blog" element={<CreateBlog user={session} userName={userName} fullName={firstName + lastName} />} />
                            <Route path="edit/:id" element={<CreateBlog user={session} userName={userName} fullName={firstName + lastName} />} />
                            <Route path="blog-list/*" element={<BlogList session={session} />} />
                            <Route path="favorites" element={<Favorites session={session} />} />
                            <Route path="saved-post" element={<Saves session={session} />} />
                        </Routes>
                    </main>
                </section>

            </div>
            <ToastContainer rtl={true} />
        </Wrapper>
    );
};
export default Cms;