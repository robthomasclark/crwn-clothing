
interface State {
    currentUser: null 
}

interface Action {
    type: string;
    payload: any;
}

const INITIAL_STATE = {
    currentUser: null 
}


const userReducer  = (state: State = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case "SET_CURRENT_USER": {
            state = {...state, currentUser: action.payload}
            break;
        }
        default:
            break;
    }
    return state;
}

export default userReducer;