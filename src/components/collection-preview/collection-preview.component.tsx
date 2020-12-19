import React from "react";

import { ShopItem } from "../../types/collection";
import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

interface Props {
  title: string;
  items: ShopItem[];
}

const CollectionPreview = (props: Props) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{props.title.toUpperCase()}</h1>
      <div className="preview">
        {props.items
          .filter((item, index) => index < 4)
          .map((item) => {
            return <CollectionItem key={item.id} item={item}></CollectionItem>
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
