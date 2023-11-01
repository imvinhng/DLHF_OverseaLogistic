import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, TextInput, ScrollView, Dimensions, SafeAreaView, Alert } from 'react-native';
import { LoginButton } from '../../../components/CustomButton';
import { OTP_Login } from '../OTP';
import { useNavigation } from '@react-navigation/native';
import { CloseButton } from '../../../components/CustomButton';
import { black, darkgray, lightorange, red, white } from '../../../assets/styles/Colors';
import GlobalStyle from '../../../assets/styles/GlobalStyle';
import { USERS } from '../../../database/Credentials';
import { useSelector, useDispatch } from 'react-redux';
import { loginAction } from '../../../services/redux/actions';

const Login = (props) => {
    const dispatch = useDispatch();
    const { name } = useSelector(state => state.userReducer)

    const [loginBtnColor, setLoginBtnColor] = useState(red);

    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const passwordCheck = () => {
        const database = USERS;
        if (phoneNumber == '') {
            Alert.alert('You cannot leave phone number blank!')
        } else if (password == '') {
            Alert.alert('You cannot leave password blank!')
        }

        for (let i = 0; i < USERS.length; i++) {
            if (database[i].phone_number == phoneNumber && database[i].password == password) {
                navigation.navigate('Main', {
                    screen: 'Home', params: {
                        screen: 'HomeScreen', params: { loggedIn: true, phone_number: phoneNumber }
                    }
                })
                // Redux
                dispatch(loginAction({ phone_number: phoneNumber, name: database[i].name, password: database[i].password }))
            }
        }
    }

    return (
        <View style={styles.home}>
            <Image
                style={styles.image}
                source={require('../../../assets/images/background/9.jpg')}
            />
            <CloseButton buttonStyle={styles.close_btn} />
            <ScrollView style={styles.body}>
                <View style={{ alignItems: 'center', height: bodyHeight }}>
                    <Text style={styles.title}>Welcome!</Text>
                    <Text>Sign in to continue</Text>
                    <TextInput
                        style={styles.textInput}
                        keyboardType='number-pad'
                        placeholder={'Enter your phone number'}
                        onChangeText={(number) => setPhoneNumber(number)}
                    />
                    <TextInput
                        style={styles.textInput}
                        secureTextEntry
                        placeholder={'Enter password'}
                        onChangeText={(text) => setPassword(text)}
                        onSubmitEditing={passwordCheck}
                    />

                    <Text style={styles.fp_hyperlink} onPress={() => {
                        navigation.navigate('Login', { screen: 'ForgetPasswordScreen' })

                    }}> Forget password?</Text>
                    <View style={{ height: 30 }} />
                    <LoginButton
                        style={styles.login_btn}
                        backgroundColor={loginBtnColor}
                        textColor={white}
                        onPress={passwordCheck}
                    />

                    <View style={[styles.footer]}>
                        <Text style={styles.text_small}>New User?</Text>
                        <Text style={styles.text_hyperlink} onPress={() => navigation.navigate('Auth', { screen: 'Register' })}>Sign Up</Text>
                    </View>
                </View>
            </ScrollView>
        </View>

    );
}

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('screen');
const bodyHeight = ScreenHeight * 0.7;
const imageHeight = ScreenHeight * 0.4;

const styles = StyleSheet.create({
    home: {
        flex: 1,
    },
    body: {
        backgroundColor: '#fff',
        width: '100%',
        height: bodyHeight,
        borderRadius: 20,
        marginTop: -(ScreenHeight * 0.1),
    },
    textInput: {
        width: "90%",
        height: 60,
        marginTop: 20,
        borderWidth: 0.5,
        borderRadius: 6,
        borderColor: darkgray,
        fontSize: 18,
        padding: 15,
    },
    login_btn: {
        width: '90%',
    },
    image: {
        width: ScreenWidth,
        height: imageHeight,
    },
    title: {
        fontSize: 25,
        margin: 15,
        fontFamily: 'Oswald-Regular',
    },
    text_small: {
        fontSize: 15,
        fontWeight: '600',
    },
    text_hyperlink: {
        fontSize: 15,
        fontWeight: '600',
        margin: 5,
        color: red,
        // textDecorationLine: 'underline',
    },
    footer: {
        fontSize: 15,
        alignItems: 'center',
        position: 'absolute',
        // top: Platform.OS == 'ios' ? bodyHeight * 0.75 : bodyHeight * 0.80,
        bottom: Platform.OS == 'ios' ? '8%' : '12%',
        ...GlobalStyle.row_wrapper,
    },
    fp_hyperlink: {
        fontSize: 15,
        marginTop: 20,
        color: red,
        // textDecorationLine: 'underline',
    },
    close_btn: {
        position: 'absolute',
        right: 0,
        top: Platform.OS == 'ios' ? '4%' : 0,
    },
})

export default Login;