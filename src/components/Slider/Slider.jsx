import React from "react";
import Wrapper from "../../hoc/Wrapper";
import "./Slider.css";
import bgSLider from "../../assets/bg-slider.jpg";
import profile from "../../assets/profile.svg";
import useFilterImage from "../../hooks/useFilterImage";
import useFilterPargraph from "../../hooks/useFilterParagraph";
import useRelativeTime from "../../hooks/useRelativeTime";

const Slider = ({blog}) => {

    const filterImage=useFilterImage
    const filterParagraph=useFilterPargraph
    const relativeTime=useRelativeTime

    return (
        <Wrapper>
            <div className="slider">

                {/* img */}
                <div className="slider-img">
                    <img src={filterImage(blog?.post_content)} alt="" className="slider-img__img" />
                </div>
                {/* info */}
                <div className="slider-info">
                    <h4 className="slider-info__title">{blog?.post_title}</h4>
                    <div className="slider-info__dis" dangerouslySetInnerHTML={{__html:filterParagraph(blog?.post_content)}} >
                       
                    </div>
                    <div className="slider-info--detail">
                        
                            <p className="slider-info__txt-auhor">{blog?.post_author?.firstName} {blog?.post_author?.lastName}</p>
                        
                        

                            <p className="slider-info__date">{relativeTime(blog?.post_date)}</p>
                       
                    </div>
                </div>


            </div>
        </Wrapper>
    );

};

export default Slider;