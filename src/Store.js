import { createStore, combineReducers } from "redux";
import enterScoreReducer from "./Reducers/ScoringReducers";

const rootReducer = combineReducers(
  {enterScoreStore:enterScoreReducer}
);

const configureStore = () => {
  return createStore(rootReducer)
}

export default configureStore;