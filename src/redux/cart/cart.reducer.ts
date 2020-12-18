import { CartActionTypes } from "../../types/actions";

interface State {
  hidden: boolean;
}

interface Action {
  type: number;
  payload: any;
}

const INITIAL_STATE = {
  hidden: true,
};

const cartReducer = (state: State = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN: {
      state = {
        ...state,
        hidden: !state.hidden,
      };
      break;
    }
    default:
      break;
  }
  return state;
};

export default cartReducer;
