import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Route } from '../Route';

import CompletedScreen from '../../screens/main/bottom-tab/Completed';
import ShipmentDetailScreen from '../../screens/main/utils/ShipmentDetail';

const Stack = createStackNavigator();

function Completed(): JSX.Element {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={Route.Main.BottomTab.Completed.COMPLETED_SCREEN}
                component={CompletedScreen}
            />
            <Stack.Screen
                name={Route.Main.SHIPMENT_DETAIL_SCREEN}
                component={ShipmentDetailScreen}
            />
        </Stack.Navigator>
    )
}

export default Completed;