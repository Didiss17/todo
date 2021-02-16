import { ADD_CAR, CAR_COUNTER, DELETE_CAR } from "../actions/type";
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
    default:
      return state;
      break;
  }
};
export default addcarreducer;
