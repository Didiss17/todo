import { ADD_CAR, CAR_COUNTER, DELETE_CAR,FETCH_ALL_CARS ,GET_DATA} from "../actions/type";
const initialState = {
  cars: [],
  counter: 0,
};

const addcarreducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload],
      };

      break;
    case CAR_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };

      break;
    case DELETE_CAR:
      return {
        ...state,
        cars: state.cars.filter((item) => item.key != action.payload),
      };
      break;
      case FETCH_ALL_CARS:
      return {
        ...state,
        cars: action.payload,
      };
      break;
      case GET_DATA:
      return {
        ...state,
        cars: [...state.cars, action.payload],
      };
    default:
      return state;
      break;
  };
  
      
};

export default addcarreducer;
