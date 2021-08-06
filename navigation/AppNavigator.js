import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {
  Home,
  Edit,
} from '../screens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const baseHeaderOptions = {
  headerShown: false,
};

const homeStack = () => {
  return (
    <Stack.Navigator screenOptions={baseHeaderOptions}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};



const warrantyStack = () => {
  return (
    <Stack.Navigator screenOptions={baseHeaderOptions}>
      <Stack.Screen name="Warranty" component={Edit} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Warranty"
      tabBarOptions={{
        activeTintColor: '#029BDB',
        style: {
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="Contacts"
        component={homeStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Edit Contacts"
        component={warrantyStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="devices" size={size} color={color} />
          ),
        }}
      />
       
    </Tab.Navigator>
  );
};

export default AppNavigator;
