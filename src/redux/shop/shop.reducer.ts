import { ShopActionTypes } from "../../types/actions";

const INITIAL_STATE = {
  collections: null,
};

interface Action {
  type: string;
  payload: any;
}

const shopReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS: {
      return {
        ...state,
        collections: action.payload,
      };
    }
    default:
      return state;
  }
};

export default shopReducer;
