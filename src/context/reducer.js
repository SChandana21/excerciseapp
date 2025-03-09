export const actiontype = {
    SET_USER : "SET_USER"
}


const reducer = (state, action) => {
        console.log(action);

        switch(action.type) {
            case actiontype.SET_USER:
                return {
                    ...state,
                    user:action.user,
                };

                default:
                    return state;
        }
}

export default reducer;