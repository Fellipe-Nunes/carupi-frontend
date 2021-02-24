import {getUserList} from '../../services/admin'
import { EDIT_USER } from "./user.action"



const INITIAL_STATE = {
    users: getUserList() || []
}


const reducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case EDIT_USER :
            return state
        
        default:
            return state
    }
    
}

export default reducer