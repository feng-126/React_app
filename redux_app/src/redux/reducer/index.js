import countReducer from "./count_reducer";
import personReducer from './person_reducer';
import { combineReducers } from "redux"

export default combineReducers({
    countReducer,
    personReducer
})