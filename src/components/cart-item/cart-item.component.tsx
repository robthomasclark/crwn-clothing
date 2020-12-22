import React from "react";

import { ShopItem } from "../../types/collection";

import "./cart-item.styles.scss";

interface Props {
    item: ShopItem;
}

const CartItem = (props: Props) => {
    const {imageUrl, price, name, quantity } = props.item;
return (
    <div className="cart-item">
        <img src={imageUrl} alt="item"></img>
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">{quantity} X ${price}</span>
        </div>
    </div>
)
};

export default CartItem
