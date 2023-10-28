import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ShipmentScreen from '../../screens/main/bottom-tab/Shipment';

const Stack = createStackNavigator();

function Shipment(): JSX.Element {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='ShipmentScreen'
                component={ShipmentScreen}
            />
        </Stack.Navigator>
    )
}

export default Shipment;