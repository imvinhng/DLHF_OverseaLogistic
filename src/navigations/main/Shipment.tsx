import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Route } from '../Route';

import ShipmentScreen from '../../screens/main/bottom-tab/Shipment';

const Stack = createStackNavigator();

function Shipment(): JSX.Element {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={Route.Main.BottomTab.Shipment.SHIPMENT_SCREEN}
                component={ShipmentScreen}
            />
        </Stack.Navigator>
    )
}

export default Shipment;