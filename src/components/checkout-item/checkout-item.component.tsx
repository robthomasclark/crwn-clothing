import React from "react";

import { ShopItem } from "../../types/collection";

import "./checkout-item.styles.scss";

interface Props {
  item: ShopItem;
}

const CheckoutItem = (props: Props) => {
  const { imageUrl, price, name, quantity } = props.item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item"></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">${price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
