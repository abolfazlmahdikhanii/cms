import React, { useState } from "react";
import "./Auth.css";

import Loader from "../../components/Ui/Loader/Loader.jsx";


import { supabase } from "../../superbase.jsx";
import FormLogin from "../../components/FormLogin/FormLogin";
import FormOtp from "../../components/FormOtp/FormOtp";
import { useNavigate } from "react-router-dom";




  
const Auth = ({nhost}) => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    
    const [token, setToken] = useState("");
    const [err, setError] = useState("");

    const [page, setPage] = useState(false);
   
    const navigate = useNavigate();





    const submitLoginHandler = (e) => {
        e.preventDefault();
        sendMailVarification()
      
      
    };
    const sendMailVarification = async () => {
        try {
            setLoading(true)
           
         const {data,error} =await supabase.auth.signInWithOtp({email})
          

             if(error) throw error
            changePageHandler();
            console.log(data);

        }
        catch (error) {
            alert(error);

        }
        finally {
            setLoading(false);
        }
    };
    const submitOtpHandler =async (e) => {
        e.preventDefault();
     
        try {
            setLoading(true)
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
             

            const {data,error}=await supabase.auth.verifyOtp({
                email,token:newToken,type:"magiclink"
            })
           


      if(error) throw error  
      
      navigate('/panel');







        }
        catch (error) {
           
            console.log(error.message);


        }
        finally {
            setLoading(false);
        }
    


    };
    const changePageHandler = () => {
        setPage(true);

    };

    // const varifyOtp = async (token) => {
       
    // };


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



                        <h1 className="auth-header">دیجی بلاگ</h1>
                        {!page ?
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