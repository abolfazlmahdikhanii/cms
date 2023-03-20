import React, { useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";

import "./FormOtp.css";


const renderTime = () => React.Fragment;
const FormOtp = (props) => {
    const [otp, setOtp] = useState("");
    const renderButton = (buttonProps) => {
        return (
            <p {...buttonProps} >
                {buttonProps.remainingTime !== 0 ? ` ${buttonProps.remainingTime} ثانیه مانده برای دریافت کد مجدد` : <button className="btn-resend" >دریافت کد مجدد</button>}
            </p>
        );
    };
    return (
        <>
            <p className="auth-title">کد تایید را وارد کنید</p>
            <div className="otp-container">
                <p className="auth-lbl">کد تایید برای ایمیل {props.email} ارسال شد</p>
                <form className="auth-form__form--2" onSubmit={(e) => props.submitOtp(e)}>



                    <OTPInput
                        value={otp}
                        onChange={setOtp}
                        autoFocus OTPLength={6}
                        otpType="number"
                        className="otp"

                        inputClassName="form-control__input--2 input-otp inputField" />

                    <ResendOTP
                        className="resend-time"
                        renderButton={renderButton}
                        renderTime={renderTime}
                        onResendClick={(e)=>props.resendOtp(e)}  />





                    <button className="btn-item btn-action" >
                        تایید
                    </button>
                </form>
            </div>
        </>
    );
};

export default FormOtp;
