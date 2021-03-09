import React from 'react';
import {View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Homepage from '../Screens/Homepage/Homepage';
import navigationStrings from './navigationStrings';
import Cart from '../Screens/Cart/Cart';
import Wishlist from '../Screens/Wishlist/Wishlist';
import Stores from '../Screens/Stores/Stores';
import Account from '../Screens/Account/Account';

Wishlist
Stores
Account




const Tab = createMaterialBottomTabNavigator();

export default function BottomTabNavigator() {
    return (

<Tab.Navigator
      initialRouteName={navigationStrings.HOMEPAGE}
        activeColor='#ff3f6c'
      barStyle={{
          backgroundColor:'white'
      }}
    >
      <Tab.Screen
        name={navigationStrings.HOMEPAGE}
        component={Homepage}
        options={{
          tabBarLabel: 'Homepage',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" color="black" size={25} />
          ),
        }}
      />
       <Tab.Screen
        name={navigationStrings.CART}
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" color="black" size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarLabel: 'Wishlist',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" color="black" size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color="black" size={25} />
          ),
        }}
      />
    </Tab.Navigator>


);
}