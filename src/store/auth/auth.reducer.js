import {LOGIN, LOGIN_LOADING}  from "./auth.action"
import {getToken, getUser} from '../../config/auth'



const INITIAL_STATE = {
    token: getToken() || "",
    profile: getUser() || {},
    loading:false
}


const reducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN :
            console.log('chegou no reducer')
            console.log(action)
            const { token, user } = action.data
            state.token = token
            state.profile = user
            state.loading = false
            return state
        case LOGIN_LOADING :
            state.loading = action.loading;
            return state;
              
        
        default:
            return state
    }
    // return state
}

export default reducer