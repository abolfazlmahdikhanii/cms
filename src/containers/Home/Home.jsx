import React from "react";
import "./Home.css";
import Blogs from "../../components/Blogs/Blogs";
import Category from "../../components/Category/Category";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import Wrapper from "../../hoc/Wrapper";
import Aside from "../../components/Aside/Aside";


const Home = () => {
    return (
        <Wrapper>
            <Header />

            <Slider />
            <Category />

            {/* main */}
            <section className="main-container">
                <main className="blog-list">
                    <div className="blog-list--title">
                        <div className="blog-list--title__icon">
                            <svg width="37" height="34" viewBox="0 0 37 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="24" r="10" fill="currentColor"></circle>
                                <circle cx="30" cy="13" r="7" fill="currentColor" fill-opacity="0.4"></circle>
                                <circle cx="15" cy="4" r="4" fill="currentColor" fill-opacity="0.7"></circle>
                            </svg>
                        </div>
                        <div>
                            <h3 className="blog-list--title__txt">آخرین مطالب</h3>
                        </div>
                    </div>
                    <Blogs />
                </main>

                <aside className="blog-aside">
                    <Aside type="viewst"/>
                    <Aside type="controversial"/>
                </aside>
            </section>

        </Wrapper>
    );
};

export default Home;