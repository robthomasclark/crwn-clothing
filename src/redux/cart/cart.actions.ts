import { CartActionTypes } from "../../types/actions";
import { ShopItem } from "../../types/collection";

export const toggleCartHidden = () => {
  return { type: CartActionTypes.TOGGLE_CART_HIDDEN };
};

export const addItem = (item: ShopItem) => {
  return { type: CartActionTypes.ADD_ITEM, payload: item };
};

export const removeItem = (item: ShopItem) => {
  return { type: CartActionTypes.REMOVE_ITEM, payload: item };
};

export const clearItemFromCart = (item: ShopItem) => {
  return { type: CartActionTypes.CLEAR_ITEM_FROM_CART, payload: item };
};
