import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { MasterState } from "../../types/states";
import "./cart-icon.styles.scss";

const CartIcon = (props: {hidden: any; itemCount: number}) => {
  return (
    <div className="cart-icon" onClick={props.hidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{props.itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return (
    {hidden: () => dispatch(toggleCartHidden())}
  )
}

const mapStateToProps = (state: MasterState) => ({
  itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
