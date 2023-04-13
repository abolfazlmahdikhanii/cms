import React from "react";

const ItemList = ({img,title}) => {
  return (
    <div className="aside-item">
    <div className="aside-item--img">
        <img src="../../../src/assets/bg-slider.jpg" alt="" className="aside-item--img__img" />
    </div>
    <div className="aside-item--title">
        <h3 className="aside-item--title__title">        
          {title}
        </h3>
    </div>
</div>
  );
};

export default ItemList;
