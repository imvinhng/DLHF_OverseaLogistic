import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, ScrollView, Dimensions, TextInput } from 'react-native';
import { RoundButton_Image, LoginButton, PromotionButton, NotificationButton, RadioHeaderCustom } from './CustomButton';
import { useNavigation } from '@react-navigation/native';
import { lightorange, tan } from '../assets/styles/Colors';
import GlobalStyle from '../assets/styles/GlobalStyle';




export const HomeBody = (props) => {

    return (

        <View style={styles.home}>

            <View style={styles.body}>
                {/* Insert FlatList */}
            </View>
        </View>
    )
}



const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');
const imageWidth = screenWidth - 20;

