const INITIAL_STATE = {
    all:[]
}

const reducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_USER_LIST":
            console.log('chegou no reducer user')
            console.log(action)
            state.all = action.data
            return state
    
        default:
            return state
    }
}

export default reducer