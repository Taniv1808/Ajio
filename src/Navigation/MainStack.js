import React, { Fragment } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Account, Cart, Detail, Homepage, Stores, Wishlist} from "../Screens";
import navigationStrings from "./navigationStrings";
function MainStack(Stack) {

    return (
        <Fragment>
            <Stack.Screen
          options={{ headerShown: false }}
          name={navigationStrings.HOMEPAGE}
          component={Homepage}
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
            
        </Fragment>
    )


}


export default MainStack;