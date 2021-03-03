import React, { Fragment } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Detail, Homepage,Login,Signup} from "../Screens";
import navigationStrings from "./navigationStrings";



function AuthStack(Stack) {

    return (
        <Fragment>
            <Stack.Screen
                component={Login}
                options={{
                    headerShown: false
                }}
                name={navigationStrings.LOGIN}

            />
            <Stack.Screen
                component={Signup}
                options={{
                    headerShown: false
                }}
                name={navigationStrings.SIGNUP}

            />
            
        </Fragment>
    )


}


export default AuthStack