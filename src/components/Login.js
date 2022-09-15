import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";


const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button title="Login" onPress = {() => {navigation.navigate('Home')}}></Button>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
},
});
export default Login;
