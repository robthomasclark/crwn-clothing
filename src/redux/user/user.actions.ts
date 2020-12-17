export const setCurrentUser = (user: {currentUser: any}) => {
    return {
        type: "SET_CURRENT_USER",
        payload: user
    }
}