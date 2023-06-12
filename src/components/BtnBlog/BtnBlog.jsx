import React from "react";

const BtnBlog = ({title,children,click,onChange,disable}) => {
  return (
    <button className="btn-item" onClick={() => {
      click(title)
      onChange()
    }}

    >
     {children}
    </button>
  );
};

export default BtnBlog;
