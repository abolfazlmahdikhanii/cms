import React, { useState, useEffect ,useCallback} from "react";
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


const Cms = ({session}) => {
    const [userData, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userName, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [avatarUrl, setAvatarUrl] = useState(null);


    useEffect(() => {


        showUserName();

  
    }, []);

    const showUserName = useCallback(async() => {
      

            try {
    

                const { user } = session;
    
      setLoading(false)
    
                let { data, error, status } = await supabase
                    .from("profiles")
                    .select(`username,firstName,lastName,avatar_url`)
                    .eq('id', user.id)
                    .single();
                
    
                if (error && status !== 406) {
                    throw error;
                }
                if (data) {
                    setUserName(data.username);
                    setFirstName(data.firstName);
                    setLastName(data.lastName);
                    setAvatarUrl(data.avatar_url);
                }
            }
            catch(error){
                setLoading(true)
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
                            <Header user={userName} fullName={firstName + lastName}/>


                            <main className="main-panel">
                                <Routes>
                                    <Route path="/" element={<Dashboard />} />
                                    <Route path="account" element={<Account key={session.user.id} session={session} />} />
                                    <Route path="create-blog" element={<CreateBlog user={session} userName={userName} fullName={firstName + lastName} />} />
                                </Routes>
                            </main>
                        </section>

                    </div>)
            }
        </Wrapper>
    );
};
export default Cms;