import React from "react"
const useTranslatorCategory=(category)=>{

switch (category) {
    case "tech":
        return "فناوری"
        break;
    case "health":
        return "سلامت و زیبایی<"
        break;
    case "art":
        return "فرهنگ و هنر"
        break;
    case "life-style":
        return "سبک زندگی"
        break;
    case "game":
        return "بازی و سرگرمی"
        break;

}
}

export default useTranslatorCategory