import {View, Text, Button} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../navigators/RootNavigator';

type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({navigation}: HomeScreenProps) => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
