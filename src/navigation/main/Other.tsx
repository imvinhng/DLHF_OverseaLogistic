import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OtherScreen from '../../screens/main/bottom-tab/Other';

const Stack = createStackNavigator();

function Other(): JSX.Element {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='OtherScreen'
                component={OtherScreen}
            />
        </Stack.Navigator>
    )
}

export default Other;