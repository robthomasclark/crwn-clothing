import { CartActionTypes } from "../../types/actions";
import { ShopItem } from "../../types/collection";
import { addItemToCart, removeItemFromCart, clearItemFromCart } from "./cart.utils";
import { CartState } from "../../types/states";

interface Action {
  type: string;
  payload: ShopItem;
}

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state: CartState = INITIAL_STATE, action: Action) => {
  //console.log("calling cartReducer")
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN: {
      //console.log('toggling')
      state = {
        ...state,
        hidden: !state.hidden,
      };
      return state;
    }
    case CartActionTypes.ADD_ITEM: {
      state = {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
      return state;
    }
    case CartActionTypes.REMOVE_ITEM: {
      state = {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
      return state;
    }
    case CartActionTypes.CLEAR_ITEM_FROM_CART: {
      state = {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, action.payload),
      };
      return state;
    }
    default:
      return state;
  }
};

export default cartReducer;
