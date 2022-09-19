import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import PlayingBatsman from "./PlayingBatsman";
import ScoringComponent from "./ScoringComponent";
import { useSelector } from "react-redux";
import { color } from "react-native-reanimated";

const DashboardScore = ({ navigation }) => {

    const data = useSelector((state) => state.matchInfoStore);
    const oversBowledRounded = Math.floor(data["matchInfo"].ballsBowled / 6);
    const balls = data["matchInfo"].ballsBowled % 6;
    const arrayScores = data["scoreDetails"];
    const index= arrayScores.length-1;
    
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
                <Text style={styles.dashboardScore}>{arrayScores[index] ? arrayScores[index].totalScore:0} - {data["matchInfo"].wickets}</Text>
                <Text style={styles.dashboardOver}>Current Over {oversBowledRounded}.{balls}</Text>
                <View style={styles.bottomlegend}>
                    <Text style={styles.dashboardTotalOver}>Total Overs {data["matchInfo"].overs}</Text>
                    <Text style={styles.dashboardTarget}>Target ({data["matchInfo"].target})</Text>
                    <Text style={styles.dashboardTarget}>Toss win by {data["matchInfo"].tossWin}</Text>
                </View> 
            </View>

            <View style={styles.dashboardPlayers}>
                <PlayingBatsman name={"Francis"} />
                <PlayingBatsman name={"Suriya"} />
            </View>

            <View style={styles.headerView}><Text style={styles.dashboardOver}>Actions</Text></View>
            <View style={styles.scoreActionView}>
                <ScoringComponent action={0} details={{
                    "batsmanName": "Batsman A",
                    "batsmanScore": 0,
                    "score": 0,
                    "bowler": "Bowler1",
                    "runsByWide": 0,
                    "runsByNoBall": 0,
                    "runsByByes": 0,
                }} />
                <ScoringComponent action={1} details={{
                    "batsmanName": "Batsman A",
                    "batsmanScore": 1,
                    "score": 1,
                    "bowler": "Bowler1",
                    "runsByWide": 0,
                    "runsByNoBall": 0,
                    "runsByByes": 0,
                }} />
                <ScoringComponent action={2} details={{
                    "batsmanName": "Batsman A",
                    "batsmanScore": 2,
                    "score": 2,
                    "bowler": "Bowler1",
                    "runsByWide": 0,
                    "runsByNoBall": 0,
                    "runsByByes": 0,
                }} />
                <ScoringComponent action={3} details={{
                    "batsmanName": "Batsman A",
                    "batsmanScore": 3,
                    "score": 3,
                    "bowler": "Bowler1",
                    "runsByWide": 0,
                    "runsByNoBall": 0,
                    "runsByByes": 0,
                }} />
                <ScoringComponent action={4} details={{
                    "batsmanName": "Batsman A",
                    "batsmanScore": 4,
                    "score": 4,
                    "bowler": "Bowler1",
                    "runsByWide": 0,
                    "runsByNoBall": 0,
                    "runsByByes": 0,
                }} />
                <ScoringComponent action={5} details={{
                    "batsmanName": "Batsman A",
                    "batsmanScore": 5,
                    "score": 5,
                    "bowler": "Bowler1",
                    "runsByWide": 0,
                    "runsByNoBall": 0,
                    "runsByByes": 0,
                }} />
                <ScoringComponent action={6} details={{
                    "batsmanName": "Batsman A",
                    "batsmanScore": 6,
                    "score": 6,
                    "bowler": "Bowler1",
                    "runsByWide": 0,
                    "runsByNoBall": 0,
                    "runsByByes": 0,
                }} />
            </View>
            <View style={styles.scoreActionView}>
                <ScoringComponent action={"Wd"} details={{
                    "batsmanName": "Batsman A",
                    "batsmanScore": 0,
                    "score": 1,
                    "bowler": "Bowler1",
                    "runsByWide": 1,
                    "runsByNoBall": 0,
                    "runsByByes": 0,
                }} />
                <ScoringComponent action={"Nb"} details={{
                    "batsmanName": "Batsman A",
                    "batsmanScore": 0,
                    "score": 1,
                    "bowler": "Bowler1",
                    "runsByWide": 0,
                    "runsByNoBall": 1,
                    "runsByByes": 0,
                }} />
                <ScoringComponent action={"B"} details={{
                    "batsmanName": "Batsman A",
                    "batsmanScore": 0,
                    "score": 1,
                    "bowler": "Bowler1",
                    "runsByWide": 0,
                    "runsByNoBall": 0,
                    "runsByByes": 1,
                }} />
                <ScoringComponent action={"Wk"} details={{
                    "batsmanName": "Batsman A",
                    "batsmanScore": 0,
                    "score": 0,
                    "bowler": "Bowler1",
                    "runsByWide": 0,
                    "runsByNoBall": 0,
                    "runsByByes": 0,
                }} />
            </View>
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
                <Text style={[styles.blueTxt, styles.width20, styles.txtCenter]}>1.1</Text>
                <Text style={[styles.blueTxt, styles.width20, styles.txtCenter]}>11</Text>
                <Text style={[styles.blueTxt, styles.width20, styles.txtCenter]}>10</Text>
                <Text style={[styles.blueTxt, styles.width20, styles.txtCenter]}>1</Text>
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
    Bowling: {

    }
});

export default DashboardScore;