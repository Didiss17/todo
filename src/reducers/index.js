import { combineReducers } from 'redux';
import  todoReducer from './todoReducer'
import  addcarreducer from './addcarreducer'
export  const rootReducer = combineReducers({
    todoReducer, addcarreducer
})