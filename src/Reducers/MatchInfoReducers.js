import { MATCH_INFO_LOGGED,SCORE_ENTERED } from "../constants";

const matchInfoLoggedReducer = (state = {}, action) => {
  console.log("************ Inside matchInfoLoggedReducer state ************ ", state);
  switch (action.type) {
    case MATCH_INFO_LOGGED:
      return {
        ...state,
        matchInfo:action.payload,
        scoreDetails:[]
      };
    case SCORE_ENTERED:
      return {
        ...state,
        scoreDetails:[...state.scoreDetails, 
        action.payload]
      };
    default:
      return state;
  }
}
export default matchInfoLoggedReducer;