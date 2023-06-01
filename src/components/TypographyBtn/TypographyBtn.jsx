import React from "react";

const TypographyBtn = ({ show, changeHeading, close }) => {
    const headings = ["h1", "h2", "h3", "h4", "h5", "h6"];
  

    return (
        <div className={`drop-down--typo ${show ? 'show-drowp-down--2' : ''}`}>
            <ul className="drowp-down-status__list--2">
                {
                    headings.map((item, i) => {
                        let Tag = item;
                        return (

                            <li key={i} className="profile-item drowp-down__txt--2" onClick={() => {
                                changeHeading(item);
                                close();
                            }}>
                                <Tag>{item} </Tag>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default TypographyBtn;
