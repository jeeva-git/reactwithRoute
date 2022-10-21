import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Prompt from "react-native-prompt-crossplatform";
import { useSelector } from "react-redux";


const PlayingBatsman = (props) => {
    const [onStrikeBatsman, setOnStrikeBatsman] = React.useState("");
    const [offStrikeBatsman, setOffStrikeBatsman] = React.useState("");
    const [isVisible, setIsVisible] = React.useState(false);

    const data = useSelector((state) => state.matchInfoStore);
    const arrayScores = data["scoreDetails"];
    const index = arrayScores.length - 1;

    return (
        <><Prompt
            title={"Enter new batsman"}
            placeholder="Batsman name"
            isVisible={isVisible}
            inputPlaceholder="placeholder"
            defaultValue=""
            onChangeText={(text) => {
                if (props.tag == 1) {
                    setOnStrikeBatsman(text);
                }
                else {
                    setOffStrikeBatsman(text)
                }
            }}
            onCancel={() => {
                setIsVisible(false);
            }}
            onSubmit={() => {
                setIsVisible(false);
                const v = props.tag == 2 ? props.name(offStrikeBatsman) : props.name(onStrikeBatsman)
                console.log("props.tag", onStrikeBatsman, "   ---- ", offStrikeBatsman);
            }} />
            <View>
                <TouchableOpacity style={styles.playername} onPress={() => {
                    setIsVisible(true);
                }}>
                    <Text>{props.tag == 1 ? onStrikeBatsman : offStrikeBatsman}</Text>
                </TouchableOpacity>
                <Text style={styles.playerScore}>
                    {props.tag == 1 ?
                        arrayScores[index].onStrikeBatsmanScore :
                        arrayScores[index].offStrikeBatsmanScore}
                </Text>
            </View></>
    );
}
const styles = StyleSheet.create({
    playername: {
        textAlign: 'left',
        color: '#7B16B9',
        fontSize: 12,
        margin: 10,
        fontWeight: "bold",
    },
    playerScore: {
        textAlign: 'center',
        color: '#7B16B9',
        fontSize: 12,
        margin: 10,
        fontWeight: "bold"
    },
});
export default PlayingBatsman;