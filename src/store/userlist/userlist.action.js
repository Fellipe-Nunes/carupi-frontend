
import {getUsers} from '../../services/admin'

export const getUsersList = () => {
    return async (dispatch) => {
        
        const response = await getUsers()

        dispatch({
            type:"GET_USER_LIST",
            data:response.data,
        })
    }
}
