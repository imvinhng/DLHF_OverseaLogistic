import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginTab from './auth/Login';
import RegisterTab from './auth/Register';
import { Route } from './Route';

const Stack = createStackNavigator();

function Auth(): JSX.Element {
    return (
        <Stack.Navigator initialRouteName={Route.Auth.LOGIN_TAB} screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={Route.Auth.LOGIN_TAB}
                component={LoginTab}
            />
            <Stack.Screen
                name={Route.Auth.REGISTER_TAB}
                component={RegisterTab}
            />

        </Stack.Navigator>
    )
}


export default Auth; 