import React, { useState } from 'react';
import { StyleSheet, Pressable, Text, Image, View, TouchableOpacity, Dimensions } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import { black, darkgray, darkorange, lightgray, lightorange, offwhite, tan, white } from '../assets/styles/Colors';
import GlobalStyle from '../assets/styles/GlobalStyle';


export const RoundButton = (props) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.round_button,
                { backgroundColor: pressed ? lightgray : props.backgroundColor },
                props.buttonStyle,
            ]}
            onPress={props.onPress}
        >
            {props.includeIcon && props.iconType == 'FontAwesome5' &&
                <FontAwesome5 name={props.iconName} size={props.iconSize} color={props.iconColor} />}
            {props.includeIcon && props.iconType == 'Octicons' &&
                <Octicons name={props.iconName} size={props.iconSize} color={props.iconColor} />}
            {props.includeIcon && props.iconType == 'Ionicons' &&
                <Ionicons name={props.iconName} size={props.iconSize} color={props.iconColor} />}
            {props.includeImage &&
                <Image source={props.image_uri} style={props.iconStyle} />}
        </Pressable>
    );
}

export const SquareButton = (props) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.square_button,
                { backgroundColor: pressed ? lightgray : props.backgroundColor },
                props.buttonStyle,
            ]}
            onPress={props.onPress}
        >
            {props.includeText &&
                <Text style={props.textStyle}>{props.text}</Text>}
            {props.includeIcon &&
                <FontAwesome5 name={props.iconName} size={props.iconSize} color={props.iconColor} />}
            {props.includeImage &&
                <View style={styles.image_icon_wrapper}>
                    <Image source={props.image_uri} style={props.imageStyle} />
                </View>}
        </Pressable>
    );
}

export const LoginButton = (props) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.login_button,
                props.style,
                {
                    backgroundColor: pressed ? lightgray : props.backgroundColor,
                    // borderRadius: 20,
                },
            ]}
            onPress={props.onPress}
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
            android_ripple={{ color: '#e5ed8a' }}
        >
            <Text style={[styles.text, { color: props.textColor, fontSize: 20 }]}>
                LOGIN
            </Text>
        </Pressable>
    );
}
export const LongButton = (props) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.long_button,
                { backgroundColor: pressed ? lightgray : props.buttonColor },
                props.buttonStyle
            ]}
            onPress={props.onPress}
            onFocus={props.onFocusFunction}
        >
            {props.includeText &&
                <Text style={[props.textStyle, { color: props.textColor }]}>{props.text}</Text>}

            {props.includeIcon && props.iconType == 'FontAwesome' &&
                <FontAwesome name={props.iconName} size={props.iconSize} color={props.iconColor} />
            }
            {props.includeIcon && props.iconType == 'FontAwesome5' &&
                <FontAwesome5 name={props.iconName} size={props.iconSize} color={props.iconColor} />
            }

        </Pressable>
    );
}

export const NotificationButton = (props) => {
    const navigation = useNavigation();
    return (
        <Pressable
            style={({ pressed }) => [
                styles.shadow_round_button,
                { backgroundColor: pressed ? lightgray : '#fff' },
                props.style,
            ]}
        // onPress={() => navigation.navigate('More', { screen: 'NotificationScreen' })}
        >
            <FontAwesome5 name={'bell'} size={20} />
        </Pressable>
    );
}

export const CloseButton = (props) => {
    const navigation = useNavigation();

    return (
        <RoundButton
            iconName='times'
            iconSize={15}
            buttonStyle={props.buttonStyle}
            backgroundColor={props.buttonColor}
            onPress={() => props.onPress ?? navigation.navigate(props.navDest ?? 'Main', { screen: 'Home' })}
        />
    )
}

export const GenderRadioButton = (props) => {
    const [maleSelected, setMaleSelected] = useState(false);
    const [femaleSelected, setFemaleSelected] = useState(false);
    return (
        <View style={styles.radio_group}>
            <TouchableOpacity
                style={[{
                    height: 24,
                    width: 24,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: lightorange,
                    alignItems: 'center',
                    justifyContent: 'center',
                }, props.style]}
                onPress={() => {
                    setMaleSelected(true)
                    setFemaleSelected(false)
                }}>
                {
                    maleSelected ?
                        <View style={{
                            height: 12,
                            width: 12,
                            borderRadius: 6,
                            backgroundColor: lightorange,
                        }} />
                        : null
                }
            </TouchableOpacity>
            <Text style={styles.radio_text}>Male</Text>

            <TouchableOpacity
                style={[{
                    height: 24,
                    width: 24,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: lightorange,
                    alignItems: 'center',
                    justifyContent: 'center',
                }, props.style]}
                onPress={() => {
                    setMaleSelected(false)
                    setFemaleSelected(true)
                }}>
                {
                    femaleSelected ?
                        <View style={{
                            height: 12,
                            width: 12,
                            borderRadius: 6,
                            backgroundColor: lightorange,
                        }} />
                        : null
                }
            </TouchableOpacity>
            <Text style={styles.radio_text}>Female</Text>
        </View>
    );
}

export const RadioHeaderCustom = () => {
    const [focusedOne, setFocusedOne] = useState(true);
    const [focusedTwo, setFocusedTwo] = useState(false);
    const [focusedThree, setFocusedThree] = useState(false);

    const [textOneColor, setTextOneColor] = useState(lightorange);
    const [textTwoColor, setTextTwoColor] = useState('#000');
    const [textThreeColor, setTextThreeColor] = useState('#000');

    const onFocusRadio = (focusedID) => {
        if (focusedID == '1') {
            setFocusedOne(true)
            setFocusedTwo(false)
            setFocusedThree(false)

            setTextOneColor(lightorange)
            setTextTwoColor(black)
            setTextThreeColor(black)
        }
        if (focusedID == '2') {
            setFocusedOne(false)
            setFocusedTwo(true)
            setFocusedThree(false)

            setTextOneColor(black)
            setTextTwoColor(lightorange)
            setTextThreeColor(black)
        }
        if (focusedID == '3') {
            setFocusedOne(false)
            setFocusedTwo(false)
            setFocusedThree(true)

            setTextOneColor(black)
            setTextTwoColor(black)
            setTextThreeColor(lightorange)
        }
    }

    return (
        <View style={[GlobalStyle.row_wrapper, { justifyContent: 'center' }]}>
            <LongButton
                buttonColor={focusedOne ? '#FEF7E5' : '#fff'}
                textColor={textOneColor}
                text={'Special Offer'}
                buttonStyle={styles.grid3_button}
                textStyle={styles.grid_btn_txt}
                onPress={() => onFocusRadio('1')}
            />
            <LongButton
                buttonColor={focusedTwo ? '#FEF7E5' : '#fff'}
                textColor={textTwoColor}
                text={'#FlowerCare'}
                buttonStyle={styles.grid3_button}
                textStyle={styles.grid_btn_txt}
                onPress={() => onFocusRadio('2')}
            />
            <LongButton
                buttonColor={focusedThree ? '#FEF7E5' : '#fff'}
                textColor={textThreeColor}
                text={'#FlowerLover'}
                buttonStyle={styles.grid3_button}
                textStyle={styles.grid_btn_txt}
                onPress={() => onFocusRadio('3')}
            />
        </View>
    )
}

export const RadioPeriodCustom = (props) => {
    const [focusedOne, setFocusedOne] = useState(true);
    const [focusedTwo, setFocusedTwo] = useState(false);
    const [focusedThree, setFocusedThree] = useState(false);
    const [focusedFour, setFocusedFour] = useState(false);


    const onFocusRadio = (focusedID) => {
        if (focusedID == '1') {
            setFocusedOne(true)
            setFocusedTwo(false)
            setFocusedThree(false)
            setFocusedFour(false)
        } else if (focusedID == '2') {
            setFocusedOne(false)
            setFocusedTwo(true)
            setFocusedThree(false)
            setFocusedFour(false)
        } else if (focusedID == '3') {
            setFocusedOne(false)
            setFocusedTwo(false)
            setFocusedThree(true)
            setFocusedFour(false)
        } else if (focusedID == '4') {
            setFocusedOne(false)
            setFocusedTwo(false)
            setFocusedThree(false)
            setFocusedFour(true)
        }
    }

    return (
        <View style={[GlobalStyle.row_wrapper, styles.periodButtonContainer]}>
            <LongButton
                buttonColor={focusedOne ? darkorange : offwhite}
                text={'Year'}
                buttonStyle={styles.grid4_button}
                textColor={focusedOne ? white : darkgray}
                textStyle={styles.grid_btn_txt}
                onPress={() => { onFocusRadio('1'), props.onPressYear() }}
            />
            <LongButton
                buttonColor={focusedTwo ? darkorange : offwhite}
                text={'Month'}
                buttonStyle={styles.grid4_button}
                textColor={focusedTwo ? white : darkgray}
                textStyle={styles.grid_btn_txt}
                onPress={() => { onFocusRadio('2'), props.onPressMonth() }}
            />
            <LongButton
                buttonColor={focusedThree ? darkorange : offwhite}
                text={'Week'}
                buttonStyle={styles.grid4_button}
                textColor={focusedThree ? white : darkgray}
                textStyle={styles.grid_btn_txt}
                onPress={() => { onFocusRadio('3'), props.onPressWeek() }}
            />
            <LongButton
                buttonColor={focusedFour ? darkorange : offwhite}
                text={'Day'}
                buttonStyle={styles.grid4_button}
                textColor={focusedFour ? white : darkgray}
                textStyle={styles.grid_btn_txt}
                onPress={() => { onFocusRadio('4'), props.onPressDay() }}
            />
        </View>
    )
}
export const Header4ButtonRadio = (props) => {
    const [focusedOne, setFocusedOne] = useState(true);
    const [focusedTwo, setFocusedTwo] = useState(false);
    const [focusedThree, setFocusedThree] = useState(false);
    const [focusedFour, setFocusedFour] = useState(false);


    const onFocusRadio = (focusedID) => {
        if (focusedID == '1') {
            setFocusedOne(true)
            setFocusedTwo(false)
            setFocusedThree(false)
            setFocusedFour(false)
        } else if (focusedID == '2') {
            setFocusedOne(false)
            setFocusedTwo(true)
            setFocusedThree(false)
            setFocusedFour(false)
        } else if (focusedID == '3') {
            setFocusedOne(false)
            setFocusedTwo(false)
            setFocusedThree(true)
            setFocusedFour(false)
        } else if (focusedID == '4') {
            setFocusedOne(false)
            setFocusedTwo(false)
            setFocusedThree(false)
            setFocusedFour(true)
        }
    }

    return (
        <View style={styles.grid4_container}>
            <LongButton
                buttonColor={focusedOne ? lightgray : white}
                text={props.option1Text}
                buttonStyle={styles.grid4_button}
                textColor={focusedOne ? darkgray : black}
                textStyle={styles.grid_btn_txt}
                onPress={() => { onFocusRadio('1'), props.onPressOption1 }}
            />
            <LongButton
                buttonColor={focusedTwo ? lightgray : white}
                text={props.option2Text}
                buttonStyle={styles.grid4_button}
                textColor={focusedTwo ? darkgray : black}
                textStyle={styles.grid_btn_txt}
                onPress={() => { onFocusRadio('2'), props.onPressOption2 }}
            />
            <LongButton
                buttonColor={focusedThree ? lightgray : white}
                text={props.option3Text}
                buttonStyle={styles.grid4_button}
                textColor={focusedThree ? darkgray : black}
                textStyle={styles.grid_btn_txt}
                onPress={() => { onFocusRadio('3'), props.onPressOption3 }}
            />
            <LongButton
                buttonColor={focusedFour ? lightgray : white}
                text={props.option4Text}
                buttonStyle={styles.grid4_button}
                textColor={focusedFour ? darkgray : black}
                textStyle={styles.grid_btn_txt}
                onPress={() => { onFocusRadio('4'), props.onPressOption4 }}
            />
        </View>
    )
}

export const Radio2Button = (props) => {
    const [option1Selected, setOption1Selected] = useState(false);
    const [option2Selected, setOption2Selected] = useState(false);
    return (
        <View style={[styles.radio_group, props.buttonGroupStyle]}>
            <View style={[GlobalStyle.row_wrapper, props.option1Style]}>
                <TouchableOpacity
                    style={[{
                        height: 16,
                        width: 16,
                        borderRadius: 12,
                        borderWidth: 2,
                        borderColor: lightorange,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }, props.style]}
                    onPress={() => {
                        setOption1Selected(true)
                        setOption2Selected(false)
                    }}>
                    {
                        option1Selected ?
                            <View style={{
                                height: 6,
                                width: 6,
                                borderRadius: 6,
                                backgroundColor: lightorange,
                            }} />
                            : null
                    }
                </TouchableOpacity>
                <Text style={[styles.radio_text, props.textStyle]}>{props.option1Text ?? 'Yes'}</Text>
            </View>

            <View style={[GlobalStyle.row_wrapper, props.option2Style]}>
                <TouchableOpacity
                    style={[{
                        height: 16,
                        width: 16,
                        borderRadius: 12,
                        borderWidth: 2,
                        borderColor: lightorange,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }, props.style]}
                    onPress={() => {
                        setOption1Selected(false)
                        setOption2Selected(true)
                    }}>
                    {
                        option2Selected ?
                            <View style={{
                                height: 6,
                                width: 6,
                                borderRadius: 6,
                                backgroundColor: lightorange,
                            }} />
                            : null
                    }
                </TouchableOpacity>
                <Text style={[styles.radio_text, props.textStyle]}>{props.option2Text ?? 'No'}</Text>
            </View>
        </View>
    );
}

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('screen');
const periodButtonHeight = 30;
const GRID4_MARGIN = 5;
const GRID4_CONTAINER_WIDTH = ScreenWidth - 2 * GRID4_MARGIN;
const GRID4_ITEM_WIDTH = GRID4_CONTAINER_WIDTH / 4;

const styles = StyleSheet.create({
    round_button: {
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    shadow_round_button: {
        height: 40,
        width: 40,
        borderRadius: 25,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: white,

        ...GlobalStyle.box_shadow,
    },
    square_button: {
        height: 50,
        width: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#000',
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontFamily: 'Roboto-Bold'
    },
    text_long_button: {
        fontSize: 15,
        color: lightorange,
        fontWeight: '600',
        margin: 10,
    },
    text_square_button_image_icon: {
        fontSize: 13,
        fontWeight: '500',
        marginTop: 12,
        // fontFamily: 'Mukta-Bold',
    },
    login_button: {
        height: 50,
        width: 170,
        borderRadius: 5,
        margin: 10,
    },
    long_button: {
        borderRadius: 5,
        flexDirection: 'row',
    },
    long_button_icon: {
        height: 40,
        width: 130,
        margin: 5,
        flexDirection: 'row',
    },
    image_icon_wrapper: {
        paddingTop: 10,
    },
    row_wrapper: {
        flexDirection: 'row',
    },
    radio_group: {
        margin: 10,
        width: 'auto',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    radio_text: {
        marginLeft: 10,
        marginRight: 30,
    },
    grid_btn_txt: {
        fontSize: 13,
    },
    grid3_button: {
        width: ScreenWidth / 3 - 4,
    },
    grid4_button: {
        width: GRID4_ITEM_WIDTH,
    },
    grid4_container: {
        justifyContent: 'space-between',
        width: GRID4_CONTAINER_WIDTH,
        margin: GRID4_MARGIN,
        // backgroundColor: 'yellow',
        ...GlobalStyle.row_wrapper,
    }

})