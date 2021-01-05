import React from "react";
import { connect } from "react-redux";

import CheckoutItem from "../../components/checkout-item/checkout-item.component"

import { MasterState } from "../../types/states";
import { selectCartItems, selectCartItemsTotal } from "../../redux/cart/cart.selectors";
import { ShopItem } from "../../types/collection";

import "./checkout.styles.scss";

interface Props {
    cartItems: ShopItem[];
    cartTotal: number;
}

const CheckoutPage = (props: Props) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {
          props.cartItems.map((cartItem: ShopItem) => {
              return (
                  <CheckoutItem key={cartItem.id} item={cartItem}></CheckoutItem>
              )
          })
      }
      <div className="total">
          <span>TOTAL: ${props.cartTotal}</span>
      </div>
    </div>
  );
};

const mapStatetoProps = (state: MasterState) => {
  return {
    cartItems: selectCartItems(state),
    cartTotal: selectCartItemsTotal(state)
  };
};

export default connect(mapStatetoProps)(CheckoutPage);
