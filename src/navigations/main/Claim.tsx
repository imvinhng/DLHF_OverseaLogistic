import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Route } from '../Route';

import ClaimScreen from '../../screens/main/bottom-tab/Claim';

const Stack = createStackNavigator();

function Claim(): JSX.Element {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={Route.Main.BottomTab.Claim.CLAIM_SCREEN}
                component={ClaimScreen}
            />
        </Stack.Navigator>
    )
}

export default Claim;