import { UserActionTypes } from "../../types/actions";

export const setCurrentUser = (user: {currentUser: any}) => {
    return {
        type: UserActionTypes.SET_CURRENT_USER,
        payload: user
    }
}