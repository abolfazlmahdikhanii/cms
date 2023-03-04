import React from "react";
import Wrapper from "../../hoc/Wrapper";
import "./Slider.css";
import bgSLider from "../../assets/bg-slider.jpg";
import profile from "../../assets/profile.svg";

const Slider = (props) => {

    return (
        <Wrapper>
            <div className="slider">

                {/* img */}
                <div className="slider-img">
                    <img src={bgSLider} alt="" className="slider-img__img" />
                </div>
                {/* info */}
                <div className="slider-info">
                    <h4 className="slider-info__title">گارمین از اولین ساعت‌های هوشمند مجهز به نمایشگر AMOLED خود رونمایی کرد</h4>
                    <p className="slider-info__dis">
                        اصلی‌ترین تفاوت یادگیری ماشینی و یادگیری عمیق به توانایی، میزان پیچیدگی، سرعت عمل، سطح عملکرد و کاربردهای هر دو فناوری مربوط می‌شود.
                    </p>
                    <div className="slider-info--detail">
                        
                            <p className="slider-info__txt-auhor"> احمدرضا فرهبد</p>
                        
                        

                            <p className="slider-info__date">17 ساعت قبل</p>
                       
                    </div>
                </div>


            </div>
        </Wrapper>
    );

};

export default Slider;