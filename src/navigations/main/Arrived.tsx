import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Route } from '../Route';

import ArrivedScreen from '../../screens/main/bottom-tab/Arrived';
import ShipmentDetailScreen from '../../screens/main/utils/ShipmentDetail';

const Stack = createStackNavigator();

function Arrived(): JSX.Element {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={Route.Main.BottomTab.Arrived.ARRIVED_SCREEN}
                component={ArrivedScreen}
            />
            <Stack.Screen
                name={Route.Main.SHIPMENT_DETAIL_SCREEN}
                component={ShipmentDetailScreen}
            />
        </Stack.Navigator>
    )
}

export default Arrived;