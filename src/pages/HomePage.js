import React from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { enterScore } from "../Actions/ScoringActions";

const HomePage = ({ navigation }) => {

    const dispatch = useDispatch();

    
    const [teamA, setTeamA] = React.useState("");
    const [teamB, setTeamB] = React.useState("");
    const [overs, setOvers] = React.useState("");
    const [TossWin, setTossWin] = React.useState("");
    const [battingFirst, setBattingFirst] = React.useState("");
    const [facingBatsman, setFacingBatsman] = React.useState("");
    const [runner, setRunner] = React.useState("");
    const data2= {
        'teamA': teamA,
        'teamB': teamB,
        'overs': overs,
        'battingFirst': battingFirst,
        'facingBatsman': facingBatsman,
        'runner': runner,
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setTeamA}
                value={teamA}
                placeholder="Enter Team A Name"
            />
            <TextInput
                style={styles.input}
                onChangeText={setTeamB}
                value={teamB}
                placeholder="Enter Team B Name"
            />
            <TextInput
                style={styles.input}
                onChangeText={setOvers}
                value={overs}
                placeholder="Enter no of overs"
            />
            <TextInput
                style={styles.input}
                onChangeText={setTossWin}
                value={TossWin}
                placeholder="Toss win by"
            />
            <TextInput
                style={styles.input}
                onChangeText={setBattingFirst}
                value={battingFirst}
                placeholder="Enter Batting First team "
            />
            <TextInput
                style={styles.input}
                onChangeText={setFacingBatsman}
                value={facingBatsman}
                placeholder="Enter On-srike batsman name "
            />
            <TextInput
                style={styles.input}
                onChangeText={setRunner}
                value={runner}
                placeholder="Enter Off-strike batsman name "
            />
            <Button title="Start" onPress={() => {
                dispatch(enterScore({
                    "batsmanName":"Player A",
                    "score":10,
                 }))
                navigation.navigate('Dashboard')
            }}>

            </Button>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    input: {
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
        padding: 10,
        borderBottomColor: '#7B16B9',
        color: '#7B16B9',
        fontWeight: 'bold'
    },
});
export default HomePage;