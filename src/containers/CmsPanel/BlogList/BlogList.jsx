import React from "react";
import './BlogList.css';
import Box from "../../../components/Ui/Box/Box";


const BlogList = () => {
    return (
        <div>
            <Box>
                <div className="blog-list--row">
                    <div className="blog-list--info">
                        <h2 className="blog-list__title">لامبورگینی رولتو 2024 معرفی شد؛ جایگزینی هیبریدی برای اونتادور افسانه‌ای</h2>
                        <p className="blog-list__dis">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
                        <p>اخرین تغییر : امروز</p>
                    </div>
                </div>
            </Box>
        </div>
    );
};
export default BlogList;