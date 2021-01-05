import React from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps} from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors"
import { MasterState } from "../../types/states";

import "./cart-dropdown.styles.scss";
import { ShopItem } from "../../types/collection";

type RouterProps = {
  title: string;
};

interface Props extends RouteComponentProps<RouterProps>{
  cartItems: ShopItem[];
}

const CartDropdown = (props: Props) => {
  const {cartItems} = props;
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length ?
          cartItems.map((cartItem) => (<CartItem key={cartItem.id} item={cartItem} />))
          :
          <span className="empty-message">Your cart is empty</span>

        }
      </div>
      <CustomButton onClick={() => props.history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state: MasterState) => {
  return { cartItems: selectCartItems(state) };
};

export default withRouter(connect(mapStateToProps)(CartDropdown));
