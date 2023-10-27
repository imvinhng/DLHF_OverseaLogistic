import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import GlobalStyle from '../../../assets/styles/GlobalStyle';

function Home(props) {
    return (
        <SafeAreaView style={styles.home}>
            <Text style={GlobalStyle.screen_title}>Home</Text>
        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        ...GlobalStyle.screen_title,
    }
})