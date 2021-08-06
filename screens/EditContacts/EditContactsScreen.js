import React, {useState} from 'react';
import {Image, ScrollView, SafeAreaView, Dimensions, Modal} from 'react-native';
import {Card, Button, View, Text, TouchableOpacity} from 'react-native-ui-lib';

import styles from './styles'

import AntDesign from 'react-native-vector-icons/AntDesign';
const plusIcon = <AntDesign name="pluscircleo" size={25} color="black" />;


const EditContactsScreen = (props) => {
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
   
      <ScrollView style={{backgroundColor: '#ffffff', paddingTop: 10}}>
       <Text>Screen 2</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditContactsScreen;
