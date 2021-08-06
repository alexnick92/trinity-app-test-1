import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {
  Home,
  Warranty,
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
      <Stack.Screen name="Warranty" component={Warranty} />
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
        name="Screen 1"
        component={homeStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Screen 2"
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
