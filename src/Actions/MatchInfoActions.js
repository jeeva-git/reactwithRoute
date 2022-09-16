import { MATCH_INFO_LOGGED } from "../constants";

export function matchInfoLoggedAction(props) {
   console.log("Inside matchInfoLoggedAction");
   console.log("Inside matchInfoLoggedAction props",props["matchInfo"].teamA);
    return {
        type: MATCH_INFO_LOGGED,
        payload: {
            "matchInfo":{
            'teamA': props["matchInfo"].teamA,
            'teamB': props["matchInfo"].teamB,
            'overs': props["matchInfo"].overs,
            'battingFirst': props["matchInfo"].battingFirst,
            'tossWin': props["matchInfo"].tossWin,
            'totalScore': props["matchInfo"].totalScore,
            'extras':props["matchInfo"].extras,
            'wickets':props["matchInfo"].wickets,
            'target':props["matchInfo"].target,
            'ballsBowled':props["matchInfo"].ballsBowled,
            }
        }
     }
}