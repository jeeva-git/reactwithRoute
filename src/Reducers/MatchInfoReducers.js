import { MATCH_INFO_LOGGED } from "../constants";

const matchInfoLoggedReducer = (state=[],action) => {
   console.log("Inside matchInfoLoggedReducer state", state);
    // console.log("Inside matchInfoLoggedReducer action", action.payload);
    switch(action.type) {
        case MATCH_INFO_LOGGED:
          return [...state],action.payload;
          default:
            return state;
      }
}
export default matchInfoLoggedReducer;