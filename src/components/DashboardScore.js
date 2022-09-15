import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PlayingBatsman from "./PlayingBatsman";
import ScoringComponent from "./ScoringComponent";
import { useSelector } from "react-redux";

const DashboardScore = () => {
    const data = useSelector((state)=> state.enterScoreStore);
    console.log("DashboardScore data", data[0].score);
    return (
        <View>
            <View style={styles.dashboardScoreCard}>
                <Text style={styles.dashboardScoreTeamName}>test</Text>
                <Text style={styles.dashboardScore}>{data[0].score}-1</Text>
                <Text style={styles.dashboardOver}>Overs 10.1</Text>
                <View style={styles.bottomlegend}>
                    <Text style={styles.dashboardTotalOver}>Total Overs 20</Text>
                    <Text style={styles.dashboardTarget}>Target(201)</Text>
                </View>
            </View>

            <View style={styles.dashboardPlayers}>
                <PlayingBatsman name={"Francis"}/>
                <PlayingBatsman name={"Suriya"}/>
            </View>

            <View style={styles.headerView}><Text style={styles.dashboardOver}>Actions</Text></View>
            <View style={styles.scoreActionView}>
                <ScoringComponent action={0}/>
                <ScoringComponent action={1}/>
                <ScoringComponent action={2}/>
                <ScoringComponent action={3}/>
                <ScoringComponent action={4}/>
                <ScoringComponent action={5}/>
                <ScoringComponent action={6}/>
           </View>
           <View style={styles.scoreActionView}>
                <ScoringComponent action={"Wd"}/>
                <ScoringComponent action={"Nb"}/>
                <ScoringComponent action={"B"}/>
                <ScoringComponent action={"Wk"}/>
            </View>
            <View style={styles.headerView}><Text style={styles.dashboardOver}>Bowling</Text></View>
            <View style={styles.scoreActionView}>
                <Text style={[styles.blueTxtBold,styles.width40]}>Bowler</Text>
                <Text style={[styles.blueTxtBold,styles.width20,styles.txtCenter]}>O</Text>
                <Text style={[styles.blueTxtBold,styles.width20,styles.txtCenter]}>R</Text>
                <Text style={[styles.blueTxtBold,styles.width20,styles.txtCenter]}>Ex</Text>
                <Text style={[styles.blueTxtBold,styles.width20,styles.txtCenter]}>Wk</Text>
            </View>
            <View style={styles.scoreActionView}>
            <Text style={[styles.blueTxt,styles.width40]}>Jeeva</Text>
                <Text style={[styles.blueTxt,styles.width20,styles.txtCenter]}>1.1</Text>
                <Text style={[styles.blueTxt,styles.width20,styles.txtCenter]}>11</Text>
                <Text style={[styles.blueTxt,styles.width20,styles.txtCenter]}>10</Text>
                <Text style={[styles.blueTxt,styles.width20,styles.txtCenter]}>1</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    dashboardScoreCard: {
        backgroundColor: '#7B16B9',
        padding: 20,
        margin: 10,
        borderRadius: 10,
        height:200,
    },
    dashboardBatsman: {
        backgroundColor: '#7B16B9',
        margin: 10,
        borderRadius: 10,
        height:100,
    },
    dashboardScore: {
        textAlign:'center',
        color: 'white',
        fontSize: 32,
        margin:10,
        fontWeight:'bold',
    },
    blueTxt: {
        color: '#7B16B9',
        fontSize: 16,
    },
    blueTxtBold: {
        color: '#7B16B9',
        fontSize: 16,
        fontWeight:"bold",
    },
    width40: {
        width:160,
    },
    width20: {
        width:50,
    },
    txtCenter: {
        textAlign:"center",
    },
    dashboardScoreTeamName :{
        textAlign:'center',
        color: 'white',
        fontSize: 38,
        fontWeight:'bold',
    },
    dashboardOver : {
        textAlign:'center',
        color: 'white',
        fontSize: 14,
    },
    dashboardTotalOver : {
        textAlign:'left',
        color: 'white',
        fontSize: 14,
    },
    dashboardTarget : {
        textAlign:'right',
        color: 'white',
        fontSize: 14,
    },
    bottomlegend : {
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'stretch',
        margin:20,
        backgroundColor:'brown',
    },
    dashboardPlayers : {
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'stretch',
    },
    headerView : {
        height:20,
        backgroundColor: '#7B16B9',
    },
    scoreActionView :{
        flexDirection:"row",
        justifyContent:"center"
    },
    Bowling : {
        
    }
});

export default DashboardScore;