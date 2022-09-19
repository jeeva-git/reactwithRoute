import { MATCH_INFO_LOGGED, SCORE_ENTERED } from "../constants";

export function matchInfoLoggedAction(props) {
    console.log("Inside matchInfoLoggedAction props", props.teamA);
    return {
        type: MATCH_INFO_LOGGED,
        payload: {
            'teamA': props.teamA,
            'teamB': props.teamB,
            'overs': props.overs,
            'battingFirst': props.battingFirst,
            'tossWin': props.tossWin,
            'totalScore': props.totalScore,
            'extras': props.extras,
            'wickets': props.wickets,
            'target': props.target,
            'ballsBowled': props.ballsBowled,
        }
    }
}
export function enterScoreAction(props) {
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
            "totalScore":props.totalScore
        }
    }
}