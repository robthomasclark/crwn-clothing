import { UserActionTypes } from "../../types/actions";
import { UserState } from "../../types/states";

interface Action {
  type: string;
  payload: any;
}

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state: UserState = INITIAL_STATE, action: Action) => {
  //console.log("calling userReducer");
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER: {
      state = { ...state, currentUser: action.payload };
      return state;
    }
    default:
      return state;
  }
};

export default userReducer;
