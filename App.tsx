import {NavigationContainer} from '@react-navigation/native';
import 'react-native';
import {SafeAreaView, View} from 'react-native';
import RootNavigator from './src/navigators/RootNavigator';

function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
        <RootNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
