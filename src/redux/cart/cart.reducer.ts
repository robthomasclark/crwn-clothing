import { CartActionTypes } from "../../types/actions";
import { ShopItem } from "../../types/collection";
import { addItemToCart } from "./cart.utils";

interface State {
  hidden: boolean;
  cartItems: ShopItem[];
}

interface Action {
  type: string;
  payload: ShopItem;
}

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state: State = INITIAL_STATE, action: Action) => {
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
            cartItems: addItemToCart(state.cartItems, action.payload)
        }
        return state;
    }
    default:
      return state;
  }
};

export default cartReducer;
