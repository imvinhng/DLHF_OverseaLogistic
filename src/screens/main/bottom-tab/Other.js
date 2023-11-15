import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import GlobalStyle from '../../../assets/styles/GlobalStyle';
import { LongButton } from '../../../components/CustomButton';
import { red, white } from '../../../assets/styles/Colors';
import { useNavigation } from '@react-navigation/native';
import { Route } from '../../../navigations/Route';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../../services/redux/actions';

function Other(props) {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={styles.home}>
            <Text style={GlobalStyle.screen_title}>Other</Text>
            <LongButton
                includeText
                text="Log out"
                buttonColor={white}
                buttonStyle={styles.logoutBtn}
                textStyle={styles.logoutText}
                onPress={() => {
                    dispatch(loginAction({ phone_number: '', name: '', password: '' }))
                    navigation.navigate(Route.AUTH_TAB, { screen: Route.Auth.LOGIN_TAB })
                }}
            />
        </SafeAreaView>
    );
}

export default Other;

const FONT_SIZE = 20;

const styles = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoutBtn: {
        padding: 10,
        paddingHorizontal: 30,
        margin: 10,
        ...GlobalStyle.box_shadow,
    },
    logoutText: {
        fontSize: FONT_SIZE,
        fontFamily: 'PlayfairDisplay-Regular',
    }
})