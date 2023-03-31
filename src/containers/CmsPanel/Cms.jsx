import React, { useState, useEffect, useCallback } from "react";
import './Cms.css';
import Wrapper from "../../hoc/Wrapper.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";
import Header from "../../components/Header/Header.jsx";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import CreateBlog from "./CreateBlog/CreateBlog";
import Loader from "../../components/Ui/Loader/Loader";
import { supabase } from "../../superbase";
import Account from "./Account/Account";
import BlogList from "./BlogList/BlogList";
import Favorites from "./Favorites/Favorites";


const Cms = ({ session }) => {
    const [userData, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userName, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [avatarUrl, setAvatarUrl] = useState(null);

    const [date,setDate]=useState(null)
    useEffect(()=>{


        showUserName();
        const now=new Date();
        const formatDate=new Intl.DateTimeFormat("fa",{
            day: "numeric",
            year: "numeric",
            month: "long",
            weekday: "long",

        }).format(now)
        setDate(formatDate)
   
   

   
        
        

    }, []);

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
            {
                loading ?
                    (<Loader show={loading} />)

                    : (<div className="cms">
                        <Navigation />

                        <section className="center-panel">
                            <Header  fullName={`${firstName} ${lastName}`}>
                                <p className="header-right__title  header-right__txt">
                                    {userName||session?.user?.email} عزیز; خوش آمدی. 👋
                                </p>
                                <i className="header-right__border"></i>
                                <p className="header-right__date header-right__txt">
                                    {date}
                                </p>
                            </Header>


                            <main className="main-panel">
                                <Routes>
                                    <Route path="/" element={<Dashboard />} />
                                    <Route path="account" element={<Account key={session.user.id} session={session} />} />
                                    <Route path="create-blog" element={<CreateBlog user={session} userName={userName} fullName={firstName + lastName} />} />
                                    <Route path="blog-list" element={<BlogList session={session}/>} />
                                    <Route path="favorites" element={<Favorites session={session}/>} />
                                </Routes>
                            </main>
                        </section>

                    </div>)
            }
        </Wrapper>
    );
};
export default Cms;