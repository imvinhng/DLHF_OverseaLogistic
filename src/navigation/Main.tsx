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


const Tab = createBottomTabNavigator();

function Main(): JSX.Element {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size, color }) => {
                    let iconName = '';
                    size = focused ? 25 : 20;
                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Shipment') {
                        iconName = 'truck';
                    } else if (route.name === 'Photo') {
                        iconName = 'camera-retro';
                    } else if (route.name === 'Claim') {
                        iconName = 'warning';
                    } else if (route.name === 'Other') {
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
                name="Home"
                component={HomeTab}
            />
            <Tab.Screen
                name="Shipment"
                component={ShipmentTab}
            />
            <Tab.Screen
                name="Photo"
                component={PhotoTab}
            />

            <Tab.Screen
                name="Claim"
                component={ClaimTab}
            />
            <Tab.Screen
                name="Other"
                component={OtherTab}
            />
        </Tab.Navigator>)
}

export default Main; 