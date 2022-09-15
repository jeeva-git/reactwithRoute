import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PlayingBatsman = (props) => {
    return (
        <View>
            <Text style={styles.playername}>{props.name}</Text>
            <Text style={styles.playerScore}>100</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    playername: {
        textAlign:'left',
        color: '#7B16B9',
        fontSize: 18,
        margin:10,
    },
    playerScore: {
        textAlign:'center',
        color: '#7B16B9',
        fontSize: 18,
        margin:10,
    },
});
export default PlayingBatsman;