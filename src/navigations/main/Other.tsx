import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Route } from '../Route';

import OtherScreen from '../../screens/main/bottom-tab/Other';

const Stack = createStackNavigator();

function Other(): JSX.Element {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={Route.Main.BottomTab.Other.OTHER_SCREEN}
                component={OtherScreen}
            />
        </Stack.Navigator>
    )
}

export default Other;