import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, TextInput, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import { LoginButton, CloseButton } from '../../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { black, darkgray, lightorange, white } from '../../../assets/styles/Colors';


function ForgetPassword(props) {
    const [loginBtnColor, setLoginBtnColor] = useState('gray');
    const [loginBtnBorderColor, setLoginBtnBorderColor] = useState(darkgray);
    const [phoneNumber, setPhoneNumber] = useState('');

    const navigation = useNavigation();

    function orangeEffect() {
        setLoginBtnColor(lightorange);
        setLoginBtnBorderColor(lightorange);
    }

    function login(phone_number) {
        setPhoneNumber(phone_number)
    }

    function promptOTP() {
        navigation.navigate('Login', { screen: 'OTPLoginScreen', params: { phone_number: phoneNumber } })
    }

    return (
        <View style={styles.background}>
            <Image
                style={styles.image}
                source={require('../../../assets/images/background/dutch-windmill.png')}
            />
            <CloseButton buttonStyle={styles.close_btn} />
            <View style={styles.body}>
                <Text style={styles.title}>Welcome to</Text>
                <Image source={require('../../../assets/images/extras/DLHF-logo.png')} />

                <TextInput
                    style={[
                        styles.textInput,
                        { borderColor: loginBtnBorderColor }
                    ]}
                    keyboardType='number-pad'
                    placeholder={'Enter your phone number'}
                    onFocus={orangeEffect}
                    onChangeText={(number) => login(number)}
                    onSubmitEditing={promptOTP}
                />
                <LoginButton
                    style={styles.login_btn}
                    bgColor={loginBtnColor}
                    textColor={'#fff'}
                    onPressFunction={promptOTP}
                />

            </View>
        </View>

    );
}

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('screen');
const bodyHeight = ScreenHeight;
const bodyMarginTop = -0.1 * ScreenHeight;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: white,
    },
    body: {
        backgroundColor: '#fff',
        alignItems: 'center',
        width: '100%',
        height: bodyHeight,
        borderRadius: 20,
        marginTop: bodyMarginTop,
    },
    image: {
        width: '100%',
        height: '40%',
    },
    title: {
        fontSize: 25,
        margin: 15,
        fontFamily: 'Oswald-Regular',
    },
    text: {
        fontSize: 15,
        margin: 20,
    },
    subtext: {
        fontSize: 15,
        marginTop: 40,
    },
    textInput: {
        width: "90%",
        height: 60,
        marginTop: 20,
        borderWidth: 0.5,
        borderRadius: 6,
        fontSize: 18,
        padding: 15,
    },
    login_btn: {
        width: '90%',
    },
    close_btn: {
        position: 'absolute',
        right: 0,
        top: Platform.OS == 'ios' ? '4%' : 0,
    },
})

export default ForgetPassword;