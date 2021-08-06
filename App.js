import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import GlobalFont from 'react-native-global-font';
import FoundationConfig from './FoundationConfig';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import {View, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
FoundationConfig();

const App = () => {
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 1000);
    let fontName = 'Poppins-Regular';
    GlobalFont.applyGlobal(fontName);
  }, []);
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};
export default App;
