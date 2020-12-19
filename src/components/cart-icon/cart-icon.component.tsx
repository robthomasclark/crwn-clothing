import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import "./cart-icon.styles.scss";

const CartIcon = (props: {hidden: any}) => {
  return (
    <div className="cart-icon" onClick={props.hidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return (
    {hidden: () => dispatch(toggleCartHidden())}
  )
}

export default connect(null, mapDispatchToProps)(CartIcon);
