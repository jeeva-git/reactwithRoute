import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ScoringAction = (props) => {
    return (
        <View style={styles.roundView}>
            <Text style={styles.actionText}>{props.action}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    roundView: {
        backgroundColor: '#7B16B9',
        margin:10,
        height:30,
        width:30,
        borderRadius:15,
    },
    actionText : {
        textAlign:'center',
        color: 'white',
        fontSize: 14,
        justifyContent:"center",
        fontWeight:'bold',
        marginTop:6,
    },
});
export default ScoringAction;