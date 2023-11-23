import React, { useState } from 'react';
import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native';
import { white, tan, yellow } from '../assets/styles/Colors';
import { useNavigation } from '@react-navigation/native';
import { NotificationButton, PromotionButton, RoundButton, RoundButton_Image, SquareButton } from './CustomButton';
import GlobalStyle, { ScreenWidth } from '../assets/styles/GlobalStyle';
import SearchBar from './SearchBar';
import { Line } from './Line';
import { USERS } from '../database/Credentials';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from '../navigations/Route';
import { loginAction } from '../services/redux/actions';

export const Header = (props) => {
    return (
        <View style={[styles.header, props.style]}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )

}
export const HeaderBack = (props) => {
    const navigation = useNavigation();

    return (
        <View style={[styles.header, props.style]}>
            <RoundButton
                includeIcon
                iconType='FontAwesome5'
                backgroundColor={white}
                iconName={'angle-left'}
                iconSize={25}
                buttonStyle={{ position: 'absolute', left: 10, bottom: 0 }}
                onPress={() => props.navDest ? navigation.navigate(props.navDest) : navigation.goBack()}
            />
            <Text style={styles.title_no_margin}>{props.title}</Text>
        </View>
    )

}

export const HeaderN = (props) => {
    return (
        <View style={[styles.header, props.style, { justifyContent: 'space-between' }]}>
            <View style={styles.sub_header_left}>
                <Text style={styles.title}>{props.title}</Text>
            </View>

            <View style={styles.sub_header_right}>
                <PromotionButton />
                <NotificationButton />
            </View>
        </View>
    )

}
export const HeaderNBack = (props) => {
    const navigation = useNavigation();

    return (
        <View style={[
            styles.header,
            {
                justifyContent: 'space-between',
                backgroundColor: props.backgroundColor ?? white
            },
            props.style
        ]}>
            <View style={styles.sub_header_left}>
                <RoundButton
                    includeIcon
                    iconType='FontAwesome5'
                    backgroundColor={props.backgroundColor ?? white}
                    iconName={'angle-left'}
                    iconSize={25}
                    onPress={() => props.navDest ? navigation.navigate(props.navDest) : navigation.goBack()}
                />
                <Text style={styles.title_no_margin}>{props.title}</Text>
            </View>

            <View style={styles.sub_header_right}>
                <NotificationButton />
            </View>
        </View>
    )
}

const findNameByUsername = (username) => {
    const database = USERS;
    for (let i = 0; i < USERS.length; i++) {
        if (database[i].username == username) {
            return database[i].name;
        }

    }
}

const findProfilePicByUsername = (username) => {
    const database = USERS;
    for (let i = 0; i < USERS.length; i++) {
        if (database[i].username == username) {
            return database[i].profile_pic_uri;
        }

    }
}

export const HomeHeader = (props) => {
    const [searchPhrase, setSearchPhrase] = useState('');
    const { username } = useSelector(state => state.userReducer)
    const userName = findNameByUsername(username);
    const profilePicURI = findProfilePicByUsername(username);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    return (
        <View style={homeStyle.header}>
            <View style={homeStyle.top_header}>
                <View style={homeStyle.sub_header_left}>
                    <RoundButton
                        includeImage
                        image_uri={profilePicURI}
                        backgroundColor={tan}
                        imageStyle={homeStyle.icon_image}
                        buttonStyle={homeStyle.profile_pic_btn}  // temp
                    />
                    <View>
                        <Text style={homeStyle.headerText_regular}>Good morning!</Text>
                        <Text style={homeStyle.headerText_bold}>{userName}</Text>
                    </View>
                </View>

                <View style={homeStyle.sub_header_right}>
                    <NotificationButton />
                    <RoundButton
                        includeIcon
                        iconType='MaterialIcons'
                        iconName='logout'
                        iconSize={30}
                        buttonStyle={{ marginLeft: 10, marginRight: -5 }}
                        onPress={() => {
                            dispatch(loginAction({ username: '', name: '', password: '' }))
                            navigation.navigate(Route.AUTH_TAB, { screen: Route.Auth.LOGIN_TAB })
                        }}
                    />
                </View>
            </View>

            <View style={homeStyle.bottom_header}>
                <SearchBar
                    searchPhrase={searchPhrase}
                    setSearchPhrase={(text) => setSearchPhrase(text)}
                    containerStyle={homeStyle.search_container}
                    searchInputStyle={homeStyle.search_input}
                    searchPlaceholder={'Search by Vesssel, B/L, Container No, Type...'}
                    closeBtnStyle={homeStyle.search_close}
                />
                <SquareButton
                    includeIcon
                    iconName={'plus'}
                    iconSize={PLUS_ICON_SIZE}
                    buttonStyle={homeStyle.plusButton}
                    onPress={() => navigation.navigate(Route.MAIN_TAB, { screen: Route.Main.NEW_SHIPMENT_SCREEN })}
                />
            </View>

            <Line color={white} thickness={5} />

        </View>
    )
}

const HEADER_HEIGHT = Platform.OS == 'ios' ? 120 : 80;
const BOTTOM_HEADER_HEIGHT = 50;
const SEARCH_INPUT_HEIGHT = 50;

const HEADER_WIDTH = ScreenWidth;
const SEARCH_INPUT_WIDTH = ScreenWidth * 0.75;

const PLUS_ICON_SIZE = 16;
const PROFILE_PIC_SIZE = 50;
const SEARCH_FONT_SIZE = 14;

const SEARCH_CONTAINER_MARGIN = 10;

const PLUS_BUTTON_PADDING = 5;

const PLUS_BUTTON_WIDTH = HEADER_WIDTH - (SEARCH_INPUT_WIDTH + 2 * SEARCH_CONTAINER_MARGIN) - (PLUS_ICON_SIZE + 2 * PLUS_BUTTON_PADDING);

const styles = StyleSheet.create({
    header: {
        ...GlobalStyle.row_wrapper,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: white,
        paddingTop: Platform.OS == 'ios' ? 56 : 10,
        paddingBottom: 10,
        paddingHorizontal: 10,

        height: HEADER_HEIGHT,
        width: HEADER_WIDTH,
    },
    sub_header_left: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sub_header_right: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 25,
        marginLeft: '7%',
        ...GlobalStyle.screen_title,
    },
    title_no_margin: {
        fontSize: 25,
        ...GlobalStyle.screen_title,
    },
})

const homeStyle = StyleSheet.create({
    home: {
        flex: 1,
    },
    body: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: white,
        paddingTop: 5,
        marginTop: -30,
        borderWidth: 0.2,
        borderColor: 'lightgray',

        ...GlobalStyle.box_shadow,
    },
    header: {
        ...GlobalStyle.column_wrapper,
        backgroundColor: tan,
        paddingTop: Platform.OS == 'ios' ? 10 : 20,
    },
    top_header: {
        ...GlobalStyle.row_wrapper,
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    bottom_header: {
        height: BOTTOM_HEADER_HEIGHT, // to be change
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 15,
        ...GlobalStyle.row_wrapper,
    },
    sub_header_right: {
        ...GlobalStyle.row_wrapper,
    },
    sub_header_left: {
        ...GlobalStyle.row_wrapper,
        alignItems: 'center',
        // textAlign: 'center',
    },
    headerText_regular: {
        ...GlobalStyle.text,
    },
    headerText_bold: {
        ...GlobalStyle.text,
        fontWeight: 'bold',
    },
    icon_image: {
        height: PROFILE_PIC_SIZE,
        width: PROFILE_PIC_SIZE,
        borderRadius: 25,
    },
    search_container: {
        margin: SEARCH_CONTAINER_MARGIN,
    },
    search_close: {
        position: 'absolute',
        left: SEARCH_INPUT_WIDTH + SEARCH_CONTAINER_MARGIN,
        top: '30%',
    },
    search_input: {
        width: SEARCH_INPUT_WIDTH,
        height: SEARCH_INPUT_HEIGHT,
        fontSize: SEARCH_FONT_SIZE,
    },
    plusButton: {
        height: SEARCH_INPUT_HEIGHT,
        width: PLUS_BUTTON_WIDTH,
        position: 'absolute',
        right: 0,
    },
    profile_pic_btn: {
        marginLeft: PROFILE_PIC_SIZE / 10,
        marginRight: PROFILE_PIC_SIZE / 5,

    },
})