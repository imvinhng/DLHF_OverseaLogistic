import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Route } from '../Route';

import InProgressScreen from '../../screens/main/bottom-tab/InProgress';
import ShipmentDetailScreen from '../../screens/main/utils/ShipmentDetail';

const Stack = createStackNavigator();

function InProgress(): JSX.Element {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={Route.Main.BottomTab.InProgress.INPROGRESS_SCREEN}
                component={InProgressScreen}
            />
            <Stack.Screen
                name={Route.Main.SHIPMENT_DETAIL_SCREEN}
                component={ShipmentDetailScreen}
            />
        </Stack.Navigator>
    )
}

export default InProgress;