import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Route } from '../Route';

import DraftScreen from '../../screens/main/bottom-tab/Draft';
import ShipmentDetailScreen from '../../screens/main/utils/ShipmentDetail';

const Stack = createStackNavigator();

function Draft(): JSX.Element {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={Route.Main.BottomTab.Draft.DRAFT_SCREEN}
                component={DraftScreen}
            />
            <Stack.Screen
                name={Route.Main.SHIPMENT_DETAIL_SCREEN}
                component={ShipmentDetailScreen}
            />
        </Stack.Navigator>
    )
}

export default Draft;

