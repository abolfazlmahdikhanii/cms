import React from "react";
import "./Search.css";
import { SerachModal } from "../SearchModal/SerachModal";

const Search = ({disable,setClickInput,search,searchHandler}) => {

    return (
        <div className="search-wrapper">
        <div className={`form-control--search ${disable?'form-control--search__active':""}`} onClick={()=>setClickInput(true)}  onBlur={()=>setClickInput(false)}>
            <div className="form-control--search__icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={18} height={18}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>

            </div>
            <input type="text" className="form-control__input" placeholder="جستجو"
             value={search}
            disabled={!disable} />

  
        </div>
        <SerachModal show={disable}/>
        </div>
    );
};

export default Search;