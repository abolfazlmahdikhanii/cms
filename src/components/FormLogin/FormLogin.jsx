import React, { useState } from "react";
import './FormLogin.css'


const FormLogin = (props) => {

    
    return (
        <>
            <p className="auth-title">ورود | ثبت نام</p>
            <form className="auth-form__form" onSubmit={props.submitLogin}>
                <div className="auth-control">
                    <label htmlFor="email" className="auth-lbl">لطفا ایمیل خود را وارد کنید</label>
                    <input
                        id="email"
                        className="form-control__input--2 inputField"
                        type="email"
                        value={props.email}
                        onChange={(e) => {
                            props.emailValidHandler(e);
                            props.setEmailHandler(e);
                        }}
                    />
                    <p className={`form-err ${props.error ? 'active-input' : ''}`}>لطفا این قسمت را به درستی تکمیل کنید</p>
                </div>


                <button className="btn-item btn-action" >
                    ورود
                </button>
            </form>
        </>
    );
};

export default FormLogin;