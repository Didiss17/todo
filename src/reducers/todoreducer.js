import { ADD_ITEM_CONTACT, ADD_ITEM_HOME,INC_COUNTER,DELETE_ITEM} from '../actions/type'


const initialState = {
   tasks :[],
   counter:0,
};

  const todoReducer=(state = initialState,action)=>{
    switch(action.type){      
        case ADD_ITEM_HOME:
            return {
                ...state,
                tasks:[...state.tasks,action.payload]
            }
            
        break;

        case ADD_ITEM_CONTACT:
            
        break;
        case INC_COUNTER:
            return {
                ...state,
                counter:state.counter+1
            }
            break;
            case DELETE_ITEM:
                return {
                    ...state,
                    tasks:state.tasks.filter(item=>item.key!=action.payload)
                }
                break;
        default:
            return state;
            break;

    }


}

export default todoReducer;