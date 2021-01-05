import React from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { MasterState } from "../../types/states";
import { ShopItem } from "../../types/collection";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.styles.scss";

type RouterProps = {
  title: string;
};

interface Props extends RouteComponentProps<RouterProps> {
  cartItems: ShopItem[];
  dispatch: any;
}

const CartDropdown = (props: Props) => {
  const { cartItems, dispatch } = props;
  //console.log(props)
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          //toggleCartHidden();
          props.history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state: MasterState) => {
  return { cartItems: selectCartItems(state) };
};

export default withRouter(connect(mapStateToProps)(CartDropdown));
