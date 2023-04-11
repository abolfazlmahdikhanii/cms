import React,{useState} from "react";
import "./Category.css"
import Box from "../Ui/Box/Box";
import CategoryItem from "./CategoryItem";
import lastNews from "../../assets/last-news.svg"
import tech from "../../assets/tech.svg"
import health from "../../assets/health.svg"
import art from "../../assets/art.svg"
import lifeStyle from "../../assets/life-style.svg"
import game from "../../assets/game.svg"
const Category=({category,setCategory})=>{

    const [categorItem,setCategoryItem]=useState([
        {
            id:crypto.randomUUID(),
            title:"آخرین مطالب",
            value:"last-news",
            icon:lastNews,
            bgItem:"#7aa0f9",
            bgIcon:"#6f96f0"
        },
        {
            id:crypto.randomUUID(),
            title:"فناوری",
            value:"tech",
            icon:tech,
            bgItem:"#e8685d",
            bgIcon:"#f2776d"
        },
        {
            id:crypto.randomUUID(),
            title:"سلامت و زیبایی",
            value:"health",
            icon:health,
            bgItem:"#f4a151",
            bgIcon:"#f9ac62"
        },
        {
            id:crypto.randomUUID(),
            title:"فرهنگ و هنر",
            value:"art",
            icon:art,
            bgItem:"#b46ceb",
            bgIcon:"#c276fb"
        },
        {
            id:crypto.randomUUID(),
            title:"سبک زندگی",
            value:"life-style",
            icon:lifeStyle,
            bgItem:"#1fbc8b",
            bgIcon:"#2cc897"
        },
        {
            id:crypto.randomUUID(),
            title:"بازی و سرگرمی",
            value:"game",
            icon:game,
            bgItem:"#6c78eb",
            bgIcon:"#7a86f6"
        },
    ])
    return(
        <div className="category">
            <Box type="category">
            
              <section className="category-container">
              {
                categorItem.map((item)=>{
                 return(
                    <CategoryItem
                    key={item.id}
                    category={category}
                    setCategory={setCategory}
                     {...item}
                    />
                 )
                })
              }
              </section>
            </Box>
        </div>
    )
}

export default Category