import React,{Fragment} from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "../Navigation/TabRoutes";
import navigationStrings from "./navigationStrings";
import AuthStack from "./AuthStack";
// import { Account, Cart, Detail, Homepage, Stores, Wishlist } from "../Screens";
import MainStack from "./MainStack";


const Stack = createStackNavigator();
Stack.Screen;

export default function () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {AuthStack(Stack)}

         {MainStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
