import React, { isValidElement } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { enterScoreAction } from "../Actions/MatchInfoActions";
import Prompt from "react-native-prompt-crossplatform";

const ScoringComponent = (props) => {
    const data = useSelector((state) => state.matchInfoStore);
    const dispatch = useDispatch();
    const [extras, setExtras] = React.useState(0);
    const [isVisible, setIsVisible] = React.useState(false);

    //get index
    const arrayScores = data["scoreDetails"];
    const index = arrayScores.length - 1;
    //calculate score
    const tempScore = arrayScores.length > 0 ? arrayScores[index].totalScore + props.details.score : props.details.score;
    //calculate no of balls
    let previousBall = arrayScores[index].ball;

    //calculate wickets
    let totalWickets = arrayScores[index].totalWickets;
    function fnDispatch (islegal,action) {
        dispatch(enterScoreAction({
            "batsmanName": props.details.batsmanName,
            "batsmanScore": props.details.batsmanScore,
            "score":  parseInt(props.details.score)+parseInt(extras),
            "ball": previousBall,
            "bowler": props.details.bowler,
            "runsByWide": props.action == "Wd" ?  parseInt(props.details.score)+parseInt(extras):0,
            "runsByNoBall": props.action == "Nb" ? parseInt(props.details.score)+parseInt(extras):0,
            "runsByByes": props.action == "B" ? parseInt(props.details.score)+parseInt(extras):0,
            "totalScore": parseInt(tempScore)+parseInt(extras),
            "isLegaDelivery":islegal,
            "totalWickets": props.action == "Wk"? totalWickets+1:totalWickets,
            "isWicket":props.action == "Wk"? true : false
        }));
    }

    return (
        <><Prompt
            title="Enter total extras"
            placeholder="Runs"
            isVisible={isVisible}
            inputPlaceholder="placeholder"
            defaultValue = "0"
            onChangeText={(text) => {
                setExtras(text);
            } }
            onCancel={() => {
                setIsVisible(false);
            } }
            onSubmit={() => {
                setIsVisible(false);
                fnDispatch(false,props.action);
            } } />
            <TouchableOpacity style={styles.roundView} onPress={() => {
                //count valid ball only
                if (props.action != "Wd" &&
                    props.action != "Nb" &&
                    props.action != "B" &&
                    props.action != "Wk") {
                    previousBall = previousBall + 1;
                    fnDispatch(true,props.action);
                }
                else if(props.action === "Wk") {
                    console.log("************ Inside WK ************ ", props.action);
                    previousBall = previousBall + 1;
                    setIsVisible(false);
                    fnDispatch(true,props.action);
                }
                else {
                    setIsVisible(true,props.action);
                }
            } }>
                <Text style={styles.actionText}>{props.action}</Text>
            </TouchableOpacity></>
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