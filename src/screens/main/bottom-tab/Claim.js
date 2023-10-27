import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import GlobalStyle from '../../../assets/styles/GlobalStyle';

function Claim(props) {
    return (
        <SafeAreaView style={styles.home}>
            <Text style={GlobalStyle.screen_title}>Claim</Text>
        </SafeAreaView>
    );
}

export default Claim;

const styles = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})