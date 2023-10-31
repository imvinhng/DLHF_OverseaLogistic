import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import LoginScreen from '../../screens/auth/login/Login';
import OTPLoginScreen from '../../screens/auth/login/Login_OTP';
import ForgetPasswordScreen from '../../screens/auth/login/Login_ForgetPassword';
import { Route } from '../Route';

function Login(): JSX.Element {
    return (
        <Stack.Navigator initialRouteName={Route.Auth.Login.LOGIN_SCREEN} screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={Route.Auth.Login.LOGIN_SCREEN}
                component={LoginScreen}
            />
            <Stack.Screen
                name={Route.Auth.Login.OTP_SCREEN}
                component={OTPLoginScreen}
            />
            <Stack.Screen
                name={Route.Auth.Login.FORGET_PASSWORD_SCREEN}
                component={ForgetPasswordScreen}
            />
        </Stack.Navigator>
    )
}


export default Login; 