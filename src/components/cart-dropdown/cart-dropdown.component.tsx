import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors"
import { MasterState } from "../../types/states";

import "./cart-dropdown.styles.scss";
import { ShopItem } from "../../types/collection";

interface Props {
  cartItems: ShopItem[];
}

const CartDropdown = (props: Props) => {
  const {cartItems} = props;
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.map((cartItem) => (<CartItem key={cartItem.id} item={cartItem} />))
        }
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state: MasterState) => {
  return { cartItems: selectCartItems(state) };
};

export default connect(mapStateToProps)(CartDropdown);
