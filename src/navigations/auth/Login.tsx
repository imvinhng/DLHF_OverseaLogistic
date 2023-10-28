import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import LoginScreen from '../../screens/auth/login/Login';
import OTPLoginScreen from '../../screens/auth/login/Login_OTP';
import ForgetPasswordScreen from '../../screens/auth/login/Login_ForgetPassword';

function Login(): JSX.Element {
    return (
        <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
            />
            <Stack.Screen
                name="OTPLoginScreen"
                component={OTPLoginScreen}
            />
            <Stack.Screen
                name='ForgetPasswordScreen'
                component={ForgetPasswordScreen}
            />
        </Stack.Navigator>
    )
}


export default Login; 