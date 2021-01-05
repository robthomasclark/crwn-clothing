import { createSelector } from "reselect";
import { ShopItem } from "../../types/collection";

import { CartState, MasterState } from "../../types/states";

const selectCart = (state: MasterState) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart: CartState) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart: CartState) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems: ShopItem[]) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartItemsTotal = createSelector(
  [selectCartItems],
  (cartItems: ShopItem[]) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + (cartItem.quantity*cartItem.price),
      0
    )
);
