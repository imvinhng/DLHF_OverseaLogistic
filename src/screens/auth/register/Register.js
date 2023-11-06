import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, TextInput, ScrollView, Alert, Dimensions } from 'react-native';
import { LongButton } from '../../../components/CustomButton';
import { OTP_Register } from '../OTP';
import { useNavigation } from '@react-navigation/native';
import { CloseButton } from '../../../components/CustomButton';
import { red, white } from '../../../assets/styles/Colors';
import { Route } from '../../../navigations/Route';


function Register(props) {
    const [loginBtnColor, setLoginBtnColor] = useState('gray');
    const [loginBtnBorderColor, setLoginBtnBorderColor] = useState('lightgray');
    const [phoneNumber, setPhoneNumber] = useState('');

    const navigation = useNavigation();

    const registerStyleFn = (value) => {
        if (value != '') {
            setLoginBtnColor(red);
            setLoginBtnBorderColor(red);
            setPhoneNumber(value);
        } else {
            setLoginBtnColor('gray');
            setLoginBtnBorderColor('lightgray');
        }
    }

    const submitInput = () => {
        if (phoneNumber == '' || phoneNumber.length < 10) {
            Alert.alert('Your phone number is not a valid number!')
        } else {
            navigation.navigate(Route.AUTH_TAB, { screen: Route.Auth.REGISTER_TAB, params: { screen: Route.Auth.Register.OTP_SCREEN } })
        }
    }

    return (
        <View style={styles.background}>
            <Image
                style={styles.image}
                source={require('../../../assets/images/background/dutch-windmill.png')}
            />
            <CloseButton buttonStyle={styles.close_btn} />
            <ScrollView style={styles.body} contentContainerStyle={{ alignItems: 'center' }}>
                <Text style={styles.title}>Register new member</Text>
                <View style={styles.text_container}>
                    <Text style={styles.text}>Please enter your phone number to register your new account</Text>
                </View>
                <TextInput
                    style={[
                        styles.text_input,
                        { borderColor: loginBtnBorderColor }
                    ]}
                    keyboardType='number-pad'
                    placeholder={'Enter your phone number'}
                    onChangeText={registerStyleFn}
                    onSubmitEditing={submitInput}
                />
                <LongButton
                    includeText
                    text='CONTINUE'
                    textColor={white}
                    buttonColor={loginBtnColor}
                    buttonStyle={styles.long_btn}
                    textStyle={styles.button_text}
                    onPress={submitInput}

                />
            </ScrollView>

        </View>

    );
}

export default Register;

const { width: screenWidth } = Dimensions.get('screen');

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: '#fff',
    },
    body: {
        backgroundColor: '#fff',
        // alignItems: 'center',
        width: '100%',
        height: '70%',
        borderRadius: 20,
        marginTop: -80,
    },
    image: {
        width: '100%',
        height: '40%',
    },
    title: {
        fontSize: 25,
        margin: 15,
        color: '#1e522c',
        fontFamily: 'DancingScript-Bold',
    },
    text: {
        fontSize: 15,
        margin: 10,
        // marginHorizontal: 30,
        textAlign: 'center',
    },
    text_input: {
        width: "90%",
        height: 60,
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 6,
        fontSize: 18,
        padding: 15,
    },
    button_text: {
        fontSize: 20,
        fontWeight: '700',
    },
    long_btn: {
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
    },
    text_container: {
        width: '80%',
    },
    close_btn: {
        position: 'absolute',
        left: screenWidth - 40,
        top: Platform.OS == 'ios' ? 45 : 15,
        height: 20,
        width: 20,
    }

})

