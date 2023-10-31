import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Route } from '../Route';

import HomeScreen from '../../screens/main/bottom-tab/Home';

const Stack = createStackNavigator();

function Home(): JSX.Element {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={Route.Main.BottomTab.Home.HOME_SCREEN}
                component={HomeScreen}
            />
        </Stack.Navigator>
    )
}

export default Home;

