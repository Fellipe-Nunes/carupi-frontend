
import {getCars, patchCars, postCars, deleteCars } from '../../services/admin'



export const getCarList = () => {
    return async (dispatch) => {
        
        const response = await getCars()

        dispatch({
            type:"GET_CAR_LIST",
            data:response.data,
        })
    }
}
export const saveCar = (props, config) => {
    console.log(props)
    return async () => {
        if (props.get("_id")) {
            await patchCars(props.get("_id"), props, config)
           
        } 
        else {
            
            await postCars(props, config)
        }
    }
}
export const removeCar = async (props) => {
    await deleteCars(props._id)
}
