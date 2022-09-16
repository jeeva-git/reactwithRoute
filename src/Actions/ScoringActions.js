import { SCORE_ENTERED } from "../constants";

export function enterScoreAction(props) {
   console.log("Inside Scoring Actions");
   console.log("Inside Scoring Actions props", props);
   return {
      type: SCORE_ENTERED,
      payload: {
            "batsmanName": props.batsmanName,
            "batsmanScore": props.batsmanScore,
            "score": props.score,
            "ball": props.ball,
            "bowler": props.bowler,
            "runsByWide": props.runsByWide,
            "runsByNoBall": props.runsByNoBall,
            "runsByByes": props.runsByByes,
      }
   }
}