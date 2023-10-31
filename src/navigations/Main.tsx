import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTab from './BottomTab';
import NewOrder from '../screens/main/utils/NewOrder';
import { Route } from './Route';


const Stack = createStackNavigator();

function Main(): JSX.Element {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={Route.Main.BOTTOM_TAB}
                component={BottomTab}
            />
            <Stack.Screen
                name={Route.Main.NEW_ORDER_SCREEN}
                component={NewOrder}
            />
        </Stack.Navigator>
    )
}

export default Main; 