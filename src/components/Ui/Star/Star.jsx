import React, { useState } from "react";
import "./Star.css";

const Star = ({ star, setStar }) => {
    const [starHover, setStarHover] = useState(0);
 

    return (

        <div className="stars">
            {
                [...new Array(5)].map((item, index) => {
                    return (
                        <span key={index} className={star > index ? "star--active" : ""} onClick={() => setStar(index + 1)}
                        >
                            <svg
                                onMouseOver={() => setStarHover(index +1)}
                                onMouseOut={() => setStarHover(0 )}
                                style={{ fill: starHover > index ?"#f59e0b":""}}
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" width={22} height={22}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                            </svg>
                        </span>
                    );
                })
            }





        </div>


    );
};

export default Star;