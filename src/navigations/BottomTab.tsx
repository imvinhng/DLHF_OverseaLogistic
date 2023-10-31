import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { lightorange, white } from '../assets/styles/Colors';

import HomeTab from './main/Home';
import ShipmentTab from './main/Shipment';
import PhotoTab from './main/Photo';
import ClaimTab from './main/Claim';
import OtherTab from './main/Other';
import { Route } from './Route';


const Tab = createBottomTabNavigator();

function BottomTab(): JSX.Element {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size, color }) => {
                    let iconName = '';
                    size = focused ? 25 : 20;
                    if (route.name === Route.Main.BottomTab.HOME_TAB) {
                        iconName = 'home';
                    } else if (route.name === Route.Main.BottomTab.SHIPMENT_TAB) {
                        iconName = 'truck';
                    } else if (route.name === Route.Main.BottomTab.PHOTO_TAB) {
                        iconName = 'camera-retro';
                    } else if (route.name === Route.Main.BottomTab.CLAIM_TAB) {
                        iconName = 'warning';
                    } else if (route.name === Route.Main.BottomTab.OTHER_TAB) {
                        iconName = 'bars';
                    }
                    return (
                        iconName == 'truck' ?
                            <MaterialCommunityIcons name={iconName} size={size} color={color} /> :
                            <FontAwesome name={iconName} size={size} color={color} />
                    )
                },
                tabBarActiveTintColor: lightorange,
                tabBarInactiveTintColor: '#555',
                tabBarActiveBackgroundColor: white,
                tabBarInactiveBackgroundColor: white,
                tabBarShowLabel: true,
                fontSize: 18,
                headerShown: false,
            })}>
            <Tab.Screen
                name={Route.Main.BottomTab.HOME_TAB}
                component={HomeTab}
            />
            <Tab.Screen
                name={Route.Main.BottomTab.SHIPMENT_TAB}
                component={ShipmentTab}
            />
            <Tab.Screen
                name={Route.Main.BottomTab.PHOTO_TAB}
                component={PhotoTab}
            />

            <Tab.Screen
                name={Route.Main.BottomTab.CLAIM_TAB}
                component={ClaimTab}
            />
            <Tab.Screen
                name={Route.Main.BottomTab.OTHER_TAB}
                component={OtherTab}
            />
        </Tab.Navigator>
    )
}

export default BottomTab; 