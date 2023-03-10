import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { HomeScreen , DetailScreen} from '../screens';


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Details" component={DetailScreen} options={{headerShown:false}} />
    </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})