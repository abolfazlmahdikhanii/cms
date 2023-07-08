import React, { useState } from "react";
import "./Auth.css";

import Loader from "../../components/Ui/Loader/Loader.jsx";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { supabase } from "../../superbase.jsx";
import FormLogin from "../../components/FormLogin/FormLogin";
import FormOtp from "../../components/FormOtp/FormOtp";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";





const Auth = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");

    const [token, setToken] = useState("");
    const [err, setError] = useState("");

    const [page, setPage] = useState(false);

    const navigate = useNavigate();
    const toastOption = {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: true,
        theme: "colored",
        style: { fontFamily: "shabnam,sans-serif" }
    };




    const submitLoginHandler = (e) => {
        e.preventDefault();
        sendMailVarification();


    };
    const sendMailVarification = async () => {
        try {
            setLoading(true);

            const { data, error } = await supabase.auth.signInWithOtp({ email });
    
            


            if (error) throw error;
            changePageHandler();
      

        }
        catch (error) {
            setLoading(false);
            toast.error("ایمیل خود را به درستی وارد نمایید یا دقایقی دیگر مجدد اقدام کنید", toastOption);


        }
        finally {
            setLoading(false);
        }
    };

    const submitOtpHandler = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const formData = [];
            const inputs = [e.target.elements];
            const newInputs = [...inputs[0]];
            newInputs.pop();
            for (const item of newInputs) {

                formData.push(item.value);
            }
            const newToken = formData.join('');

            setToken(newToken);
            setLoading(true);


 
const { data, error } = await supabase.auth.verifyOtp({
            email, token: newToken,type:"magiclink"
        });

            if (error) throw error;

            navigate('/panel');

        }
        catch (error) {

            toast.error("کد یکبار مصرف اشتباه میباشد یا منقضی شده است ", toastOption);



        }
        finally {
            setLoading(false);
        }



    };
    const changePageHandler = () => {
        setPage(true);

    };



    const setEmailHandler = (e) => {
        setEmail(e.target.value);
    };

    const emailValidHandler = (e) => {
        e.target.value === "" ? setError(true) : setError(false);
    };
    return (
        <div className="auth">


            <div className="auth-box">
                {loading ? <Loader show={loading} /> :
                    <div className="auth-form" >



                        <Link to="/" className="auth-header">
                            <img src={logo} alt="logo" className="" />
                        </Link>                        {!page ?
                            <FormLogin
                                submitLogin={submitLoginHandler}
                                error={err}
                                email={email}

                                emailValidHandler={emailValidHandler}
                                setEmailHandler={setEmailHandler}

                            />
                            : <FormOtp
                                email={email}
                                submitOtp={submitOtpHandler}
                                resendOtp={sendMailVarification} />}

                    </div>
                }

            </div>

        </div>
    );
};

export default Auth;