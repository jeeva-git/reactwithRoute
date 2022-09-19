import { createStore, combineReducers } from "redux";
import matchInfoLoggedReducer from "./Reducers/MatchInfoReducers";

const rootReducer = combineReducers(
  {
    matchInfoStore: matchInfoLoggedReducer
  },
);

const configureStore = () => {
  return createStore(rootReducer)
}

export default configureStore;