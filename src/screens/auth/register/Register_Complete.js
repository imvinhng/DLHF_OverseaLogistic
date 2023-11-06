import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, Modal, Image, Dimensions } from 'react-native';
import { LongButton } from '../../../components/CustomButton';
import React from 'react';
import { Route } from '../../../navigations/Route';
import { white } from '../../../assets/styles/Colors';

function Register_Complete(props) {
    const navigation = useNavigation();

    return (
        <View style={styles.home}>
            <View style={{ justifyContent: 'flex-start', alignItems: 'center', position: 'absolute' }}>
                <Image source={require('../../../assets/images/icons/Top_Orange_Ellipse.png')} />
                <Image style={{ position: 'absolute' }} source={require('../../../assets/images/icons/Party_Confettis.png')} />
                <Image source={require('../../../assets/images/icons/Party_Illustration.png')} />
            </View>

            <View style={{ flex: 1, marginTop: 100, justifyContent: 'center' }}>
                <Text style={styles.text}>Congratulations on being a new member of Dalat Hasfarm!</Text>
            </View>
            <LongButton
                includeText
                text={'Back to Home'}
                textColor={white}
                textStyle={styles.buttonText}
                buttonColor={'#F58831'}
                buttonStyle={styles.button}
                onPress={() => {

                    navigation.navigate(Route.MAIN_TAB, { screen: Route.Main.BOTTOM_TAB, params: { screen: Route.Main.BottomTab.HOME_TAB } })
                }}
            />
        </View>
    );
}

export default Register_Complete;

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('screen');
const BUTTON_WIDTH = 380; const BUTTON_HEIGHT = 50;

const styles = StyleSheet.create({
    home: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00833E'
    },
    text: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        color: '#fff',
        width: 300,
        marginTop: 100,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: BUTTON_WIDTH,
        height: BUTTON_HEIGHT,
        position: 'absolute',
        bottom: BUTTON_HEIGHT,
    },
    buttonText: {
        fontWeight: '700',
        fontSize: 20,
    }
})