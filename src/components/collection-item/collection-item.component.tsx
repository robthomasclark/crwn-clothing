import React from "react";

import { ShopItem } from "../../types/collection";
import "./collection-item.styles.scss";

const CollectionItem = (props: ShopItem) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${props.imageUrl})`,
      }}
    />
    <div className="collection-footer">
      <span className="name">{props.name}</span>
      <span className="price">{props.price}</span>
    </div>
  </div>
);

export default CollectionItem;
