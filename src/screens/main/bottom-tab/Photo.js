import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import GlobalStyle from '../../../assets/styles/GlobalStyle';

function Photo(props) {
    return (
        <SafeAreaView style={styles.home}>
            <Text style={GlobalStyle.screen_title}>Photo</Text>
        </SafeAreaView>
    );
}

export default Photo;

const styles = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})