import { SCORE_ENTERED } from "../constants";

const enterScoreReducer = (state=[],action) => {
    console.log("Inside Scoring Reducers state", state);
    console.log("Inside Scoring Reducers action", action.payload);
    console.log("Inside Scoring Reducers action type", action.type);

    switch(action.type) {
        case SCORE_ENTERED:
          return [...state, action.payload];
          default:
            return state;
      }
}
export default enterScoreReducer;