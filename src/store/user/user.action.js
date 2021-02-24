import { deleteUser, patchUser, postUser } from "../../services/admin";

export const SAVE_USER = "SAVE_USER"
export const DELETE_USER = "DELETE_USER"
export const EDIT_USER = "EDIT_USER"


export const userSave = (props) => {
    console.log(props)
    return async (dispatch) => {
        if (props._id) {
            await patchUser(props._id, props)
            dispatch({ type: EDIT_USER })
        } 
        else {
            const { data } = await postUser(props)
            dispatch({ type: SAVE_USER, data })
        }
    }
}
export const userRemove = async (props) => {
            await deleteUser(props._id)

}
