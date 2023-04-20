import React, { useState, useEffect, useRef } from "react";
import "./Search.css";
import SerachModal from "../SearchModal/SerachModal";
import { supabase } from "../../../superbase";

const Search = () => {
    const [clickInput, setClickInput] = useState(false);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [findBlog, setFindBlog] = useState(null);
    const input = useRef();

    useEffect(() => {
        const timer = setTimeout(() => {
            searchInputHandler();
        }, 500);

        return () => {
            clearInterval(timer);
            setFindBlog(null)
        };
    }, [search,input]);

    const searchInputHandler = async () => {
        if (search !== input.current.value) return false
            try {
             
                setLoading(true);

              
                const { data, error } = await supabase.from("blogs")
                    .select("id,post_title,post_content,post_type,post_author(username)")
                    .textSearch("post_title", `${search}`);

                if (error) throw error;

                setFindBlog(data);



            } catch (err) {
                setLoading(false);
                console.log(err);

            }
            finally {
                setLoading(false);
                
            }
        

    };


    return (
        <div className="search-wrapper" >
            <div className={`form-control--search ${clickInput ? 'form-control--search__active' : ""}`} onClick={() => setClickInput(true)}  >
                <div className="form-control--search__row">
                    <div className="form-control--search__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={18} height={18}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                    </div>
                    <input type="text" autoFocus className="form-control__input" placeholder="جستجو"
                        value={search || ""}
                        ref={input}
                        disabled={!clickInput}
                        onChange={(e) => setSearch(e.target.value)}

                    />
                </div>

                <div className="form-control--search__remove"
                    style={{ display: !clickInput ? "none" : "" }}
                    onClick={() => setSearch("")}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" width={24} height={24}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>


            </div>
            <SerachModal show={clickInput} close={() => {
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