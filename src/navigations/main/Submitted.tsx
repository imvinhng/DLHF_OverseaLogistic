import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Route } from '../Route';

import SubmittedScreen from '../../screens/main/bottom-tab/Submitted';
import ShipmentDetailScreen from '../../screens/main/utils/ShipmentDetail';

const Stack = createStackNavigator();

function Submitted(): JSX.Element {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={Route.Main.BottomTab.Submitted.SUBMITTED_SCREEN}
                component={SubmittedScreen}
            />
            <Stack.Screen
                name={Route.Main.SHIPMENT_DETAIL_SCREEN}
                component={ShipmentDetailScreen}
            />
        </Stack.Navigator>
    )
}

export default Submitted;