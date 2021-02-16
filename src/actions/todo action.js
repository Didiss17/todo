import { ADD_ITEM_CONTACT, ADD_ITEM_HOME ,INC_COUNTER,DELETE_ITEM} from './type'


export const addTaskHome =(data)=>dispatch=>{
    dispatch({
        type:ADD_ITEM_HOME,
        payload:data
    }
    )
}
export const addTaskContact =(data)=>dispatch=>{
    dispatch({
        type:ADD_ITEM_CONTACT,
        payload:data
    }
    )
}
export const Counter =()=>dispatch=>{
    dispatch({
        type:INC_COUNTER,
       
    }
    )
}

export const Delete =(data)=>dispatch=>{
    dispatch({
        type:DELETE_ITEM,
        payload:data

       
    }
    )
}