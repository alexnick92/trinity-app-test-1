import React, {useState} from 'react';
import {Image, ScrollView, SafeAreaView, Dimensions, Modal} from 'react-native';
import {Card, Button, View, Text, TouchableOpacity} from 'react-native-ui-lib';

import styles from './styles'

import FontAwesome from 'react-native-vector-icons/FontAwesome';
const userIcon = <FontAwesome name="user-circle" size={100} color="orange" />;


const EditContactsScreen = ({navigation}) => {

  function renderHeader() {
    return (
      <View
        row
        paddingH-24
        paddingV-14
        center
        style={{
          backgroundColor: 'white',
          shadowColor: '#000000',
          shadowOffset: {width: 0, height: 6},
          shadowOpacity: 0.09,
          borderBottomWidth: 0.25,
          borderColor: 'grey'
        }}
        >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          flex
          row
          spread
          style={{}}>
          <Text orange30>Cancel</Text>
          <Text orange30 >Save</Text>
        </TouchableOpacity>
      </View>
    );
  }

  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
          {renderHeader()}
      <ScrollView style={{backgroundColor: '#ffffff', paddingTop: 10}}>

       <View flex center >
       {userIcon} 
       </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditContactsScreen;
