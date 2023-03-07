import React from "react";
import "./Search.css";

const Search = (props) => {

    return (
        <div className="form-control--search">
            <div className="form-control--search__icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={18} height={18}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>

            </div>
            <input type="text" className="form-control__input" placeholder="جستجو" />
        </div>
    );
};

export default Search;