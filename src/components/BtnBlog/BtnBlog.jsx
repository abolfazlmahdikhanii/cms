import React from "react";

const BtnBlog = ({title,children,click}) => {
  return (
    <div className="btn-item" onClick={() => click(title)}>
     {children}
    </div>
  );
};

export default BtnBlog;
