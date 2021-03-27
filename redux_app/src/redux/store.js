import { createStore,applyMiddleware} from "redux";
import reducers from "./reducer/index";
import thunk from "redux-thunk";
import logger from 'redux-logger'
export default createStore(reducers,applyMiddleware(thunk,logger));