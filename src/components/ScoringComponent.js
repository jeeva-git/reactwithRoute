import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch,useSelector } from "react-redux";
import { enterScoreAction } from "../Actions/MatchInfoActions";


const ScoringComponent = (props) => {
    const data = useSelector((state) => state.matchInfoStore);
    const dispatch = useDispatch();
    const [ballId, setBallId] = React.useState(0);
    return (
        <TouchableOpacity style={styles.roundView} onPress={() => {
            const id = ballId;
            setBallId(id+1);
            //get index
            const arrayScores = data["scoreDetails"];
            const index= arrayScores.length-1;
            const tempScore = arrayScores.length>0 ? arrayScores[index].totalScore + props.details.score : props.details.score;

            dispatch(enterScoreAction({
                "batsmanName": props.details.batsmanName,
                "batsmanScore": props.details.batsmanScore,
                "score": props.details.score,
                "ball": ballId,
                "bowler": props.details.bowler,
                "runsByWide": props.details.runsByWide,
                "runsByNoBall": props.details.runsByNoBall,
                "runsByByes": props.details.runsByByes, 
                "totalScore":tempScore
            }))
        }
        }>
            <Text style={styles.actionText}>{props.action}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    roundView: {
        backgroundColor: '#7B16B9',
        margin: 10,
        height: 30,
        width: 30,
        borderRadius: 15,
    },
    actionText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 14,
        justifyContent: "center",
        fontWeight: 'bold',
        marginTop: 6,
    },
});
export default ScoringComponent;