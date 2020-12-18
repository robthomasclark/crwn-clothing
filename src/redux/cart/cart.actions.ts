import { CartActionTypes } from "../../types/actions";

export const toggleCartHidden = () => {
  return { type: CartActionTypes.TOGGLE_CART_HIDDEN };
};
