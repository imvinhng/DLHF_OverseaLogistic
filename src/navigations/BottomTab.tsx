import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import { lightorange, white } from '../assets/styles/Colors';

import DraftTab from './main/Draft';
import SubmittedTab from './main/Submitted';
import InProgressTab from './main/InProgress';
import ArrivedTab from './main/Arrived';
import CompletedTab from './main/Completed';
import { Route } from './Route';


const Tab = createBottomTabNavigator();

function BottomTab(): JSX.Element {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size, color }) => {
                    let iconObj = null;
                    size = focused ? 25 : 20;
                    if (route.name === Route.Main.BottomTab.DRAFT_TAB) {
                        iconObj = <Ionicons name={'time-outline'} size={size} color={color} />
                    } else if (route.name === Route.Main.BottomTab.SUBMITTED_TAB) {
                        iconObj = <MaterialCommunityIcons name={'navigation-variant-outline'} size={size} color={color} />
                    } else if (route.name === Route.Main.BottomTab.INPROGRESS_TAB) {
                        iconObj = <Feather name='truck' size={size} color={color} />
                    } else if (route.name === Route.Main.BottomTab.ARRIVED_TAB) {
                        iconObj = <Feather name='anchor' size={size} color={color} />
                    } else if (route.name === Route.Main.BottomTab.COMPLETED_TAB) {
                        iconObj = <Feather name='check' size={size} color={color} />
                    }

                    return iconObj;
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
                name={Route.Main.BottomTab.DRAFT_TAB}
                component={DraftTab}
            />
            <Tab.Screen
                name={Route.Main.BottomTab.SUBMITTED_TAB}
                component={SubmittedTab}
            />
            <Tab.Screen
                name={Route.Main.BottomTab.INPROGRESS_TAB}
                component={InProgressTab}
            />

            <Tab.Screen
                name={Route.Main.BottomTab.ARRIVED_TAB}
                component={ArrivedTab}
            />
            <Tab.Screen
                name={Route.Main.BottomTab.COMPLETED_TAB}
                component={CompletedTab}
            />
        </Tab.Navigator>
    )
}

export default BottomTab; 