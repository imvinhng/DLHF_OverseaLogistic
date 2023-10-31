import React, { useState } from 'react';
import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native';
import { white, tan } from '../assets/styles/Colors';
import { useNavigation } from '@react-navigation/native';
import { NotificationButton, PromotionButton, RoundButton, RoundButton_Image, SquareButton } from './CustomButton';
import GlobalStyle from '../assets/styles/GlobalStyle';
import SearchBar from './SearchBar';
import { WhiteLine_Full_Thick } from './Line';
import { USERS } from '../database/Credentials';
import { useSelector } from 'react-redux';
import { Route } from '../navigations/Route';

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
                bgColor={'#fff'}
                iconName={'angle-left'}
                iconSize={25}
                buttonStyle={{ position: 'absolute', left: 10, bottom: 0 }}
                onPressFunction={() => props.navDest ? navigation.navigate(props.navDest) : navigation.goBack()}
            />
            <Text style={styles.title_no_margin}>{props.title}</Text>
        </View>
    )

}

export const HeaderPN = (props) => {
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
export const HeaderPNBack = (props) => {
    const navigation = useNavigation();

    return (
        <View style={[styles.header, props.style, { justifyContent: 'space-between' }]}>
            <View style={styles.sub_header_left}>
                <RoundButton
                    bgColor={'#fff'}
                    iconName={'angle-left'}
                    iconSize={25}
                    onPressFunction={() => props.navDest ? navigation.navigate(props.navDest) : navigation.goBack()}
                />
                <Text style={styles.title_no_margin}>{props.title}</Text>
            </View>

            <View style={styles.sub_header_right}>
                <PromotionButton />
                <NotificationButton />
            </View>
        </View>
    )
}

const findNameByPhone = (phone) => {
    const database = USERS;
    for (let i = 0; i < USERS.length; i++) {
        if (database[i].phone_number == phone) {
            return database[i].name;
        }

    }
}

export const HomeHeader = (props) => {
    const [searchPhrase, setSearchPhrase] = useState('');
    const { phone_number } = useSelector(state => state.userReducer)
    const userName = findNameByPhone(phone_number);
    const navigation = useNavigation();

    return (
        <View style={homeStyle.header}>
            <View style={homeStyle.top_header}>
                <View style={homeStyle.sub_header_left}>
                    <RoundButton_Image
                        image_uri={require('../assets/images/icons/red-flower-icon.png')}
                        bgColor={'#FEF7E5'}
                        iconStyle={homeStyle.icon_image}
                    />
                    <View>
                        <Text style={homeStyle.headerText_regular}>Good morning!</Text>
                        <Text style={homeStyle.headerText_bold}>{userName}</Text>
                    </View>
                </View>

                <View style={homeStyle.sub_header_right}>
                    <NotificationButton />
                </View>
            </View>

            <View style={homeStyle.bottom_header}>
                <SearchBar
                    searchPhrase={searchPhrase}
                    setSearchPhrase={(text) => setSearchPhrase(text)}
                    containerStyle={homeStyle.search_container}
                    searchInputStyle={homeStyle.search_input}
                    searchPlaceholder={'Search by Vesssel, B/L, Container No...'}
                    closeBtnStyle={homeStyle.search_close}
                />
                <SquareButton
                    iconName={'plus'}
                    iconSize={16}
                    buttonStyle={homeStyle.plusButton}
                    onPress={() => navigation.navigate(Route.MAIN_TAB, { screen: Route.Main.NEW_ORDER_SCREEN })}
                />
            </View>

            <WhiteLine_Full_Thick />

        </View>
    )
}

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('screen');
const headerHeight = Platform.OS == 'ios' ? 120 : 80; const headerWidth = ScreenWidth;
const searchInputLength = 285;
const searchContainerMargin = 10;
const bottomHeaderHeight = 50;
const searchbarHeight = 50;

const iconSize = 25;

const styles = StyleSheet.create({
    header: {
        ...GlobalStyle.row_wrapper,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: white,
        paddingTop: Platform.OS == 'ios' ? 56 : 10,
        paddingBottom: 10,

        height: headerHeight,
        width: headerWidth,
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
        backgroundColor: '#fff',
        paddingTop: 5,
        marginTop: -30,
        borderWidth: 0.2,
        borderColor: 'lightgray',

        //ios
        shadowColor: 'lightgray',
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: -10 },

        //android
        elevation: 10,
    },
    header: {
        flexDirection: 'column',
        backgroundColor: tan,
        paddingTop: 10,
    },
    top_header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    bottom_header: {
        height: bottomHeaderHeight, // to be change
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 15,
        ...GlobalStyle.row_wrapper,
    },
    sub_header_right: {
        flexDirection: 'row',
        marginRight: 10,
    },
    sub_header_left: {
        flexDirection: 'row',
        // justifyContent: 'center',
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
        height: iconSize,
        width: iconSize,
    },
    search_container: {
        margin: searchContainerMargin,
    },
    search_close: {
        position: 'absolute',
        left: searchInputLength + searchContainerMargin,
        top: '30%',
    },
    search_input: {
        width: searchInputLength,
        height: searchbarHeight,
        fontSize: 14,
    },
    plusButton: {
        height: searchbarHeight,
        position: 'absolute',
        right: 5,
        width: 50,
    }
})