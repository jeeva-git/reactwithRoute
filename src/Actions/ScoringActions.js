import { SCORE_ENTERED } from "../constants";

export function enterScore(props) {
   console.log("Inside Scoring Actions");
   console.log("Inside Scoring Actions props",props);
    return {
        type: SCORE_ENTERED,
        payload: {
           "batsmanName":props.batsmanName,
           "score":props.score,
        }
     }
}