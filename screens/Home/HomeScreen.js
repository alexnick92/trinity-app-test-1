import React from 'react';
import {
  Image,
  ScrollView,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

import {Card, Button, View, Text} from 'react-native-ui-lib';

const HomeScreen = ({navigation}) => {


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
   
      <ScrollView style={{backgroundColor: '#ffffff', paddingTop: 10}}>
       <Text>Screen 1</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
