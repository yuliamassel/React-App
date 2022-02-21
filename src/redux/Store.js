import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducers from "./reducer";

let store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk, logger)),
  
);
export default store;
