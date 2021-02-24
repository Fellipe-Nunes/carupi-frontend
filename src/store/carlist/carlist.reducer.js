const INITIAL_STATE = {
        all:[]
}

const reducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_CAR_LIST":
            state.all = action.data
            return state
    
        default:
            return state
    }
    // return state
}

export default reducer