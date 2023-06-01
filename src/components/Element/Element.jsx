import React from "react";

const Element = ({tag,children}) => {
    let Tag=tag
  return(
    <Tag>{children}</Tag>
  );
};

export default Element;
