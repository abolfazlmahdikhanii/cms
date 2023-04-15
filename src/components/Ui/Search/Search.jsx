import React from "react";
import "./Search.css";
import SerachModal from "../SearchModal/SerachModal";

const Search = ({ disable, setClickInput, search, searchHandler, findBlog, setFindBlog, setSearch,loading }) => {

    return (
        <div className="search-wrapper" >
            <div className={`form-control--search ${disable ? 'form-control--search__active' : ""}`} onClick={() => setClickInput(true)}  >
                <div className="form-control--search__row">
                    <div className="form-control--search__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={18} height={18}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                    </div>
                    <input type="text" autoFocus className="form-control__input" placeholder="جستجو"
                        value={search||""}
                        disabled={!disable}
                        onChange={(e) => searchHandler(e)}

                    />
                </div>

                <div className="form-control--search__remove" 
                style={{ display: !disable ? "none" : "" }}
                 onClick={()=>setSearch("")}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" width={24} height={24}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>


            </div>
            <SerachModal show={disable} close={() => {
                setClickInput(false);
                setSearch("");
                setFindBlog(null);


            }}
                findBlog={findBlog}
                loading={loading}
            />
        </div>
    );
};

export default Search;