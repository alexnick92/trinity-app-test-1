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

import FeatherIcon from 'react-native-vector-icons/Feather';
const searchIcon = <FeatherIcon name="search" size={32} color="orange" />;
const addIcon = <FeatherIcon name="plus" size={32} color="orange" />;


const HomeScreen = ({navigation}) => {
  function renderHeader() {
    return (
      <View
        row
        paddingH-24
        paddingV-24
        center
        style={{
          height: 100,
          backgroundColor: 'white',
          shadowColor: '#000000',
          shadowOffset: {width: 0, height: 6},
          shadowOpacity: 0.09,
          borderBottomWidth: 0.25,
          borderColor: 'grey'
        }}>
                 <TouchableOpacity
          onPress={() => navigation.navigate('Shop', {screen: 'Cart'})}
          flex
          right
          style={{}}>
          {searchIcon}
        </TouchableOpacity>

        <View flex center>
          <Text  style={styles.Header}>Contacts</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Shop', {screen: 'Cart'})}
          flex
          left
          style={{}}>
          {addIcon}
        </TouchableOpacity>

       
      </View>
      
      
    );
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      {renderHeader()}
      <ScrollView style={{backgroundColor: '#ffffff', paddingTop: 10}}>
       <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
