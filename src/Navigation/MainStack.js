import React, { Fragment } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Account, Cart, Detail, Homepage, Stores, Wishlist} from "../Screens";
import navigationStrings from "./navigationStrings";
import BottomTabNavigator from "./TabRoutes";
import Checkout from "../Screens/Checkout/Checkout";
function MainStack(Stack) {

    return (
        <Fragment>
            <Stack.Screen
          options={{ headerShown: false }}
          name={navigationStrings.HOMEPAGE}
          component={BottomTabNavigator}
        /> 
        <Stack.Screen
                component={Detail}
                options={{
                    headerShown: false
                }}
                name={navigationStrings.DETAIL}

            />
            <Stack.Screen
                component={Stores}
                options={{
                    headerShown: false
                }}
                name={navigationStrings.STORES}

            />
            <Stack.Screen
                component={Cart}
                options={{
                    headerShown: false
                }}
                name={navigationStrings.CART}

            />
            <Stack.Screen
                component={Wishlist}
                options={{
                    headerShown: false
                }}
                name={navigationStrings.WISHLIST}

            />
            <Stack.Screen
                component={Account}
                options={{
                    headerShown: false
                }}
                name={navigationStrings.ACCOUNT}

            />
            <Stack.Screen
                component={Checkout}
                options={{
                    headerShown: false
                }}
                name={navigationStrings.CHECKOUT}

            />
            
        </Fragment>
    )


}


export default MainStack;