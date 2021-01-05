import React from "react";
import { connect } from "react-redux";

import {
  addItem,
  clearItemFromCart,
  removeItem,
} from "../../redux/cart/cart.actions";

import { ShopItem } from "../../types/collection";

import "./checkout-item.styles.scss";

interface Props {
  item: ShopItem;
  clearItem?: any;
  addItem?: any;
  removeItem?: any;
}

const CheckoutItem = (props: Props) => {
  const { imageUrl, price, name, quantity } = props.item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item"></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => props.removeItem(props.item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => props.addItem(props.item)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div
        className="remove-button"
        onClick={() => props.clearItem(props.item)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    clearItem: (item: ShopItem) => dispatch(clearItemFromCart(item)),
    addItem: (item: ShopItem) => dispatch(addItem(item)),
    removeItem: (item: ShopItem) => dispatch(removeItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
