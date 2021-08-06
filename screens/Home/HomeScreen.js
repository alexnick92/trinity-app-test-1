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

import FontAwesome from 'react-native-vector-icons/FontAwesome';
const userIcon = <FontAwesome name="user-circle" size={50} color="orange" />;

import FeatherIcon from 'react-native-vector-icons/Feather';
const searchIcon = <FeatherIcon name="search" size={32} color="orange" />;
const addIcon = <FeatherIcon name="plus" size={32} color="orange" />;

const customData = [
  {
    "id": "5c8a80f52dfee238898d64cf",
    "firstName": "Phoebe",
    "lastName": "Monroe",
    "email": "phoebemonroe@furnafix.com",
    "phone": "(903) 553-3410"
  },
  {
    "id": "5c8a80f575270ddb54a18f86",
    "firstName": "Lidia",
    "lastName": "Wilkins",
    "email": "lidiawilkins@furnafix.com",
    "phone": "(997) 482-3866"
  },
  {
    "id": "5c8a80f57a27f272ab4272f9",
    "firstName": "Gertrude",
    "lastName": "Mccormick",
    "email": "gertrudemccormick@furnafix.com",
  },
  {
    "id": "5c8a80f5e2ad4c1edc5cc5d9",
    "firstName": "Maxine",
    "lastName": "Brady",
    "email": "maxinebrady@furnafix.com",
    "phone": "(919) 469-2468"
  },
  {
    "id": "5c8a80f5437a24a66ac7e0c5",
    "firstName": "Willie",
    "lastName": "Gonzalez",
    "phone": "(892) 456-3603"
  },
  {
    "id": "5c8a80f5a7d3d251ba82df41",
    "firstName": "Oliver",
    "lastName": "Floyd",
    "email": "oliverfloyd@furnafix.com",
    "phone": "(953) 421-2772"
  },
  {
    "id": "5c8a80f5d3c01af26b266b13",
    "firstName": "Elliott",
    "lastName": "Fry",
    "email": "elliottfry@furnafix.com",
    "phone": "(869) 557-2814"
  },
  {
    "id": "5c8a80f597cdf9c2fc4f8466",
    "firstName": "Hancock",
    "lastName": "Foreman"
  },
  {
    "id": "5c8a80f537cded38d718ecf5",
    "firstName": "Hood",
    "lastName": "Kline",
    "email": "hoodkline@furnafix.com",
    "phone": "(997) 596-2026"
  },
  {
    "id": "5c8a80f531ed87bee8d951d6",
    "firstName": "Adams",
    "lastName": "Phelps",
    "email": "adamsphelps@furnafix.com",
    "phone": "(847) 570-2622"
  },
  {
    "id": "5c8a80f537a8602ee2be6b6d",
    "firstName": "Ramos",
    "lastName": "Nieves",
    "email": "ramosnieves@furnafix.com",
    "phone": "(808) 550-3692"
  },
  {
    "id": "5c8a80f57ba5cd82a37a039c",
    "firstName": "White",
    "lastName": "Marsh",
    "email": "whitemarsh@furnafix.com",
    "phone": "(943) 403-2609"
  },
  {
    "id": "5c8a80f5d502bbf9f69e8b6d",
    "firstName": "Concepcion",
    "lastName": "Crane",
    "email": "concepcioncrane@furnafix.com",
    "phone": "(992) 499-2570"
  },
  {
    "id": "5c8a80f5000661cb7e325e17",
    "firstName": "Rhonda",
    "lastName": "Mckinney",
    "email": "rhondamckinney@furnafix.com",
    "phone": "(887) 477-3521"
  },
  {
    "id": "5c8a80f59283e24a4e526335",
    "firstName": "Hilda",
    "lastName": "Holder",
  },
  {
    "id": "5c8a80f52aec26a5edc4e17c",
    "firstName": "Burks",
    "lastName": "Aguilar",
    "email": "burksaguilar@furnafix.com",
    "phone": "(847) 431-2033"
  },
  {
    "id": "5c8a80f5b3a1e477360db964",
    "firstName": "Lorene",
    "lastName": "Stewart",
    "email": "lorenestewart@furnafix.com",
    "phone": "(895) 440-2387"
  },
  {
    "id": "5c8a80f57dab375acf5030c1",
    "firstName": "Susana",
    "lastName": "Short",
    "email": "susanashort@furnafix.com",
    "phone": "(831) 501-3483"
  },
  {
    "id": "5c8a80f523e488dd917a6e45",
    "firstName": "Lawson",
    "lastName": "French",
    "email": "lawsonfrench@furnafix.com",
    "phone": "(860) 430-3555"
  },
  {
    "id": "5c8a80f5e3d1f2f2967c4621",
    "firstName": "Paula",
    "lastName": "Turner",
    "email": "paulaturner@furnafix.com",
    "phone": "(873) 553-3808"
  }
];


const HomeScreen = ({navigation}) => {
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
        }}>
                 <TouchableOpacity
          flex
          right
          style={{}}>
          {searchIcon}
        </TouchableOpacity>

        <View flex center>
          <Text  style={styles.Header}>Contacts</Text>
        </View>

        <TouchableOpacity

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

       <View  paddingH-15>
              {customData.map((customData, index) => {
                return [
                  <View key={index}>
                    <View row spread
                      style={{
                        paddingRight: 32,
                        borderBottomWidth: 0.25,
                            borderColor: 'grey'
                      }}>
                        <View marginV-10
                          style={{
                            marginHorizontal: 10,
                            flex: 0.3,
                            resizeMode: 'contain',
                            
                          }}>
                          {userIcon}
                        </View>
                      <View flex row centerV style={{}}>
                      <Text  text60R>
                        {customData.firstName}
                      </Text>
                      <Text marginL-10 marginV-10 text60R>
                        {customData.lastName}
                      </Text>
                      </View>
                    </View>
                  </View>,
                ];
              })}
            </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
