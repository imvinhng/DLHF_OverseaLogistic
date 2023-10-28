import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ClaimScreen from '../../screens/main/bottom-tab/Claim';

const Stack = createStackNavigator();

function Claim(): JSX.Element {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='ClaimScreen'
                component={ClaimScreen}
            />
        </Stack.Navigator>
    )
}

export default Claim;