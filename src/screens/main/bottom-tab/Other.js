import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import GlobalStyle from '../../../assets/styles/GlobalStyle';

function Other(props) {
    return (
        <SafeAreaView style={styles.home}>
            <Text style={GlobalStyle.screen_title}>Other</Text>
        </SafeAreaView>
    );
}

export default Other;

const styles = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})