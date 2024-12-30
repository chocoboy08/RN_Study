import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import AuthNavigation from './AuthNavigator';

export type RootStackParamList = {
  Home: undefined;
  Auth: undefined;
};

function RootNavigator() {
  const Stack = createStackNavigator<RootStackParamList>();
  const isLoggedIn = false;
  return (
    <Stack.Navigator
      initialRouteName={isLoggedIn ? 'Home' : 'Auth'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Auth" component={AuthNavigation} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
