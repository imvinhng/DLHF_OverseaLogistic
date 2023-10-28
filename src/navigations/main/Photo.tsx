import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PhotoScreen from '../../screens/main/bottom-tab/Photo';

const Stack = createStackNavigator();

function Photo(): JSX.Element {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='PhotoScreen'
                component={PhotoScreen}
            />
        </Stack.Navigator>
    )
}

export default Photo;