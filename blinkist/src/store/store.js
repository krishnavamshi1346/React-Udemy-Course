import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import booksReducer from "./reducer";

const rootReducer = combineReducers({ books: booksReducer });
export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);
