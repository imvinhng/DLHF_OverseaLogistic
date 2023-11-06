import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import RegisterScreen from '../../screens/auth/register/Register';
import { Route } from '../Route';
// import RegisterAddressScreen from '../../screens/auth/register/Register_Address';
import RegisterCompleteScreen from '../../screens/auth/register/Register_Complete';
// import RegisterPasswordSetScreen from '../../screens/auth/register/Register_PasswordSet';
// import RegisterPersonalInfoScreen from '../../screens/auth/register/Register_PersonalInfo';
import RegiterOTPScreen from '../../screens/auth/register/Register_OTP';

const Stack = createStackNavigator();

function Register(): JSX.Element {
    return (
        <Stack.Navigator
            initialRouteName={Route.Auth.Register.REGISTER_SCREEN}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name={Route.Auth.Register.REGISTER_SCREEN}
                component={RegisterScreen}
            />
            <Stack.Screen
                name={Route.Auth.Register.OTP_SCREEN}
                component={RegiterOTPScreen}
            />
            {/*<Stack.Screen
                name="RegisterPasswordSetScreen"
                component={RegisterPasswordSetScreen}
            />
            <Stack.Screen
                name="RegisterPersonalInfoScreen"
                component={RegisterPersonalInfoScreen}
            />
            <Stack.Screen
                name="RegisterAddressScreen"
                component={RegisterAddressScreen}
            />*/}
            <Stack.Screen
                name={Route.Auth.Register.COMPLETE_SCREEN}
                component={RegisterCompleteScreen}
            />
        </Stack.Navigator>
    )
}


export default Register; 