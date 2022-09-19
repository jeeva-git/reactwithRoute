import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { enterScoreAction } from "../Actions/MatchInfoActions";


const ScoringComponent = (props) => {
    const dispatch = useDispatch();
    const [ballId, setBallId] = React.useState(0);
 
    return (
        <TouchableOpacity style={styles.roundView} onPress={() => {
            console.log("ScoringComponent details",props.details.batsmanName);
            const id = ballId;
            console.log("id", id);
            setBallId(id+1);
            console.log("after id", ballId);
            dispatch(enterScoreAction({
                "id" : {
                "batsmanName": props.details.batsmanName,
                "batsmanScore": props.details.batsmanScore,
                "score": props.details.score,
                "ball": props.details.ball,
                "bowler": props.details.bowler,
                "runsByWide": props.details.runsByWide,
                "runsByNoBall": props.details.runsByNoBall,
                "runsByByes": props.details.runsByByes, 
                }
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