import React from "react";

import { ShopItem } from "../../types/collection";
import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

interface Props {
  title: string;
  items: ShopItem[];
  all?: number;
}

const CollectionPreview = (props: Props) => {
  let length = 4;
  if (props.all) length = props.items.length;
  console.log("length:", length)
  console.log("props:", props)
  return (
    <div className="collection-preview">
      <h1 className="title">{props.title.toUpperCase()}</h1>
      <div className="preview">
        {props.items
          .filter((item, index) => index < length)
          .map((item) => {
            return <CollectionItem key={item.id} item={item}></CollectionItem>;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
