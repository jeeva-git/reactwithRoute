import { createStore, combineReducers } from "redux";
import enterScoreReducer from "./Reducers/ScoringReducers";
import matchInfoLoggedReducer from "./Reducers/MatchInfoReducers";

const rootReducer = combineReducers(
  {
    enterScoreStore: enterScoreReducer,
    matchInfoStore: matchInfoLoggedReducer
  },
);

const configureStore = () => {
  return createStore(rootReducer)
}

export default configureStore;