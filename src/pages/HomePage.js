import React from "react";
import { StyleSheet, TextInput, View, Button, Text } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { matchInfoLoggedAction } from "../Actions/MatchInfoActions";

const HomePage = ({ navigation }) => {

    const dispatch = useDispatch();


    const [teamA, setTeamA] = React.useState("");
    const [teamB, setTeamB] = React.useState("");
    const [overs, setOvers] = React.useState("");
    const [TossWin, setTossWin] = React.useState("");
    const [battingFirst, setBattingFirst] = React.useState("");
    const [facingBatsman, setFacingBatsman] = React.useState("");
    const [runner, setRunner] = React.useState("");
    return (

        <View style={styles.container}>
            <View style={styles.headerView}><Text style={styles.dashboardOver}>Team Details</Text></View>
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
            <View style={styles.headerView}><Text style={styles.dashboardOver}>Match Details</Text></View>
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
            <View style={styles.headerView}><Text style={styles.dashboardOver}>Batting details</Text></View>
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
                dispatch(matchInfoLoggedAction({
                    'teamA': teamA,
                    'teamB': teamB,
                    'overs': overs,
                    'tossWin': TossWin,
                    'battingFirst': battingFirst,
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
    dashboardOver: {
        textAlign: 'center',
        color: 'white',
        fontSize: 14,
    },
    headerView: {
        height: 20,
        backgroundColor: '#7B16B9',
        margintop: 10,
    },
});
export default HomePage;