import { ADD_CAR,CAR_COUNTER,DELETE_CAR,FETCH_ALL_CARS,GET_DATA} from './type'


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
    export const fetchCars=(data)=>dispatch=>{
        dispatch({
            type:FETCH_ALL_CARS,
            payload:data
           
        }
        )}
        export const  getData =(data)=>dispatch=>{
            dispatch({
                type:GET_DATA,
                payload:data
               
            }
            )
}

