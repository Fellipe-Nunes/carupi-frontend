
import {deleteBranches, getBranchList, patchBranches, postBranches} from '../../services/admin'

export const getBranches= () => {
    return async (dispatch) => {
        
        const response = await getBranchList()

        dispatch({
            type:"GET_BRANCH_LIST",
            data:response.data,
        })
    }
}
export const branchSave = (props) => {
    console.log(props)
    return async (dispatch) => {
        if (props._id) {
            await patchBranches(props._id, props)
            dispatch({ type: "EDIT_BRANCH" })
        } 
        else {
            const { data } = await postBranches(props)
            dispatch({ type: "SAVE_BRANCH", data })
        }
    }
}
export const branchRemove = async (props) => {
            
            await deleteBranches(props._id)

}