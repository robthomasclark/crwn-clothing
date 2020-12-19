import { CartActionTypes } from "../../types/actions";
import { ShopItem } from "../../types/collection";

export const toggleCartHidden = () => {
  return { type: CartActionTypes.TOGGLE_CART_HIDDEN };
};

export const addItem = (item: ShopItem) => {
  return { type: CartActionTypes.ADD_ITEM, payload: item };
};
