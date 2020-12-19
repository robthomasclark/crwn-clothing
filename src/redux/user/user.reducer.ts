import { UserActionTypes } from "../../types/actions";

interface State {
  currentUser: null;
}

interface Action {
  type: string;
  payload: any;
}

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state: State = INITIAL_STATE, action: Action) => {
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
