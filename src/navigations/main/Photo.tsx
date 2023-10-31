import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Route } from '../Route';

import PhotoScreen from '../../screens/main/bottom-tab/Photo';

const Stack = createStackNavigator();

function Photo(): JSX.Element {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={Route.Main.BottomTab.Photo.PHOTO_SCREEN}
                component={PhotoScreen}
            />
        </Stack.Navigator>
    )
}

export default Photo;