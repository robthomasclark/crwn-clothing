import React from "react";

import { Item } from "../../types/item";
import "./menu-item.styles.scss";

const MenuItem = (props: { item: Item }) => {
  return (
    <div className={`${props.item.size} menu-item`}>
      <div className="background-image" style={{
        backgroundImage: `url(${props.item.imageUrl})`,
      }}></div>
      <div className="content">
        <h1 className="title">{props.item.title.toUpperCase()}</h1>
        <span className="subtitle">SHOW NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
