import { ADD_CAR,CAR_COUNTER,DELETE_CAR} from './type'


export const addcar=(data)=>dispatch=>{
    dispatch({
        type:ADD_CAR,
        payload:data
    }
    )
}
export const carcounter=()=>dispatch=>{
    dispatch({
        type:CAR_COUNTER,
       
    }
    )
}
export const deleteCar=(data)=>dispatch=>{
    dispatch({
        type:DELETE_CAR,
        payload:data
       
    }
    )
}