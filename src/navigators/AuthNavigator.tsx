import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export default function AuthNavigation() {
  const AuthStack = createStackNavigator<AuthStackParamList>();
  return (
    <AuthStack.Navigator screenOptions={{headerShadowVisible: false}}>
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerTitle: '로그인'}}
      />
      <AuthStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{headerTitle: '회원가입'}}
      />
    </AuthStack.Navigator>
  );
}
