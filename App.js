import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DashboardScore from './src/components/DashboardScore';
import Login from './src/components/Login';
import HomePage from './src/pages/HomePage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Dashboard' component={DashboardScore} />
        <Stack.Screen name='Home' component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;