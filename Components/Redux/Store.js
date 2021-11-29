import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger  from "redux-logger";
import RootReducer from "./RootReducer";
const Store=createStore(RootReducer,applyMiddleware(logger,thunk));
export default Store;
