import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import PlayingBatsman from "./PlayingBatsman";
import ScoringComponent from "./ScoringComponent";
import { useSelector } from "react-redux";

const ScoringComponentView = () => {
    const data = useSelector((state) => state.matchInfoStore);

    const arrayScores = data["scoreDetails"];
    const index = arrayScores.length - 1;
    const [batsmanOne, setBatsmanOne] = React.useState("Batsman1");
    const [batsmanTwo, setBatsmanTwo] = React.useState("Batsman2");

    const batsmanSwitched = arrayScores[index].batsmanSwitch;
    
    return(
        <>
        <View style={styles.scoreActionView}>
        <ScoringComponent action={0} details={{
            "onStrikeBatsmanName": batsmanOne,
            "offStrikeBatsmanName": batsmanTwo,
            "batsmanScore": 0,
            "score": 0,
            "bowler": "Bowler1",
            "batsmanSwitch": false,
        }} />
        <ScoringComponent action={1} details={{
            "onStrikeBatsmanName": batsmanTwo,
            "offStrikeBatsmanName":batsmanOne,
            "onStrikeBatsmanScore": arrayScores[index].onStrikeBatsmanScore? arrayScores[index].onStrikeBatsmanScore+1:1,
            "offStrikeBatsmanScore": arrayScores[index].offStrikeBatsmanScore ? arrayScores[index].offStrikeBatsmanScore:0,
            "batsmanScore": 1,
            "score": 1,
            "bowler": "Bowler1",
            "batsmanSwitch": true,
        }} />
        <ScoringComponent action={2} details={{
            "batsmanScore": 2,
            "score": 2,
            "bowler": "Bowler1",
            "batsmanSwitch": false,
        }} />
        <ScoringComponent action={3} details={{
            "batsmanScore": 3,
            "score": 3,
            "bowler": "Bowler1",
            "batsmanSwitch": true,
        }} />
        <ScoringComponent action={4} details={{
            "batsmanScore": 4,
            "score": 4,
            "bowler": "Bowler1",
            "batsmanSwitch": false,
        }} />
        <ScoringComponent action={5} details={{
            "batsmanScore": 5,
            "score": 5,
            "bowler": "Bowler1",
            "batsmanSwitch": true,
        }} />
        <ScoringComponent action={6} details={{
            "batsmanScore": 6,
            "score": 6,
            "bowler": "Bowler1",
            "batsmanSwitch": false,
        }} />
    </View>
    <View style={styles.scoreActionView}>
        <ScoringComponent action={"Wd"} details={{
            "batsmanScore": 0,
            "score": 1,
            "bowler": "Bowler1",
        }} />
        <ScoringComponent action={"Nb"} details={{
            "batsmanScore": 0,
            "score": 1,
            "bowler": "Bowler1",
        }} />
        <ScoringComponent action={"B"} details={{
            "batsmanScore": 0,
            "score": 1,
            "bowler": "Bowler1",
        }} />
        <ScoringComponent action={"Wk"} details={{
            "batsmanScore": 0,
            "score": 0,
            "bowler": "Bowler1",
        }} />
    </View></>
    );
}

const DashboardScore = ({ navigation }) => {
    const data = useSelector((state) => state.matchInfoStore);

    const arrayScores = data["scoreDetails"];
    const index = arrayScores.length - 1;
    const [batsmanOne, setBatsmanOne] = React.useState("Batsman1");
    const [batsmanTwo, setBatsmanTwo] = React.useState("Batsman2");

    const batsmanSwitched = arrayScores[index].batsmanSwitch;

    var oversBowledRounded = Math.floor(data["matchInfo"].ballsBowled / 6);
    var balls = data["matchInfo"].ballsBowled % 6;
    
    if (arrayScores.length >= 0) {
        // console.log("arrayScores[index]",arrayScores[index].ball);
        oversBowledRounded = Math.floor(arrayScores[index] ? arrayScores[index].ball / 6 : 0);
        balls = arrayScores[index] ? arrayScores[index].ball % 6 : 0;
    }

    navigation.setOptions(
        {
            title: data["matchInfo"].teamA + " Vs " + data["matchInfo"].teamB,
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#7B16B9'
            }
        },
    )

    return (
        <View>
            <View style={styles.dashboardScoreCard}>
                <Text style={styles.dashboardScoreTeamName}>{data["matchInfo"].battingFirst}</Text>
                <Text style={styles.dashboardScore}>{arrayScores[index] ? arrayScores[index].totalScore : 0} - {arrayScores[index] ? arrayScores[index].totalWickets : 0}</Text>
                <Text style={styles.dashboardOver}>Current Over {oversBowledRounded}.{balls}</Text>
                <View style={styles.bottomlegend}>
                    <Text style={styles.dashboardTotalOver}>Total Overs {data["matchInfo"].overs}</Text>
                    <Text style={styles.dashboardTarget}>Target ({data["matchInfo"].target})</Text>
                    <Text style={styles.dashboardTarget}>Toss win by {data["matchInfo"].tossWin}</Text>
                </View>
            </View>

            <View style={styles.dashboardPlayers}>
                <PlayingBatsman tag={1} name={setBatsmanOne}/>
                <PlayingBatsman tag={2} name={setBatsmanTwo} />
            </View>

            <View style={styles.headerView}><Text style={styles.dashboardOver}>Actions</Text></View>
            <ScoringComponentView/>
            <View style={styles.headerView}><Text style={styles.dashboardOver}>Bowling</Text></View>
            <View style={styles.scoreActionView}>
                <Text style={[styles.blueTxtBold, styles.width40]}>Bowler</Text>
                <Text style={[styles.blueTxtBold, styles.width20, styles.txtCenter]}>O</Text>
                <Text style={[styles.blueTxtBold, styles.width20, styles.txtCenter]}>R</Text>
                <Text style={[styles.blueTxtBold, styles.width20, styles.txtCenter]}>Ex</Text>
                <Text style={[styles.blueTxtBold, styles.width20, styles.txtCenter]}>Wk</Text>
            </View>
            <View style={styles.scoreActionView}>
                <Text style={[styles.blueTxt, styles.width40]}>Jeeva</Text>
                <Text style={[styles.blueTxt, styles.width20, styles.txtCenter]}>0</Text>
                <Text style={[styles.blueTxt, styles.width20, styles.txtCenter]}>0</Text>
                <Text style={[styles.blueTxt, styles.width20, styles.txtCenter]}>0</Text>
                <Text style={[styles.blueTxt, styles.width20, styles.txtCenter]}>0</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    dashboardScoreCard: {
        backgroundColor: '#7B16B9',
        paddingTop: 20,
        margin: 10,
        borderRadius: 10,
        height: 200,
    },
    dashboardBatsman: {
        backgroundColor: '#7B16B9',
        margin: 10,
        borderRadius: 10,
        height: 100,
    },
    dashboardScore: {
        textAlign: 'center',
        color: 'white',
        fontSize: 32,
        margin: 10,
        fontWeight: 'bold',
    },
    blueTxt: {
        color: '#7B16B9',
        fontSize: 16,
    },
    blueTxtBold: {
        color: '#7B16B9',
        fontSize: 16,
        fontWeight: "bold",
    },
    width40: {
        width: 160,
    },
    width20: {
        width: 50,
    },
    txtCenter: {
        textAlign: "center",
    },
    dashboardScoreTeamName: {
        textAlign: 'center',
        color: 'white',
        fontSize: 38,
        fontWeight: 'bold',
    },
    dashboardOver: {
        textAlign: 'center',
        color: 'white',
        fontSize: 14,
    },
    dashboardTotalOver: {
        textAlign: 'left',
        color: 'white',
        fontSize: 14,
    },
    dashboardTarget: {
        textAlign: 'left',
        color: 'white',
        fontSize: 14,
    },
    bottomlegend: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // alignItems:'stretch',
        marginTop: 25,
    },
    dashboardPlayers: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'stretch',
    },
    headerView: {
        height: 20,
        backgroundColor: '#7B16B9',
    },
    scoreActionView: {
        flexDirection: "row",
        justifyContent: "center"
    },
    playername: {
        textAlign: 'left',
        color: '#7B16B9',
        fontSize: 12,
        margin: 10,
        fontWeight: "bold"
    },
    playerScore: {
        textAlign: 'center',
        color: '#7B16B9',
        fontSize: 12,
        margin: 10,
        fontWeight: "bold"
    },
});

export default DashboardScore;