import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, SafeAreaView, Dimensions, ScrollView, Image, TextInput } from 'react-native';
import { black, blue, darkgray, lightgray, white, yellow } from '../../../assets/styles/Colors';
import GlobalStyle from '../../../assets/styles/GlobalStyle';
import { Radio2Button, RoundButton, SquareButton } from '../../../components/CustomButton';
import DropDownPicker from 'react-native-dropdown-picker';
import { Line } from '../../../components/Line';
import { CUSTOMER_NAME } from '../../../database/CustomerList';
import { Route } from '../../../navigations/Route';
import { CRGI, Checklist, Comments, ContainerTemperature, Temperature, Time } from '../../../components/CustomComponents';

function NewShipment(props) {
    const navigation = useNavigation();
    const [openCustomerName, setOpenCustomerName] = useState(false);

    const [openCRGI, setOpenCRGI] = useState(false);
    const [openTemperature, setOpenTemperature] = useState(false);
    const [openContainerTemperature, setOpenContainerTemperature] = useState(false);
    const [openTime, setOpenTime] = useState(false);
    const [openChecklist, setOpenChecklist] = useState(false);
    const [openComments, setOpenComments] = useState(false);

    const [valueCustomerName, setValueCustomerName] = useState(false);


    return (
        <SafeAreaView style={styles.home}>
            <View style={styles.cname_container}>
                <Text>Customer Name: </Text>
                <View>
                    <DropDownPicker
                        style={styles.cname_dropdown}
                        textStyle={styles.cname_input}
                        open={openCustomerName}
                        value={valueCustomerName}
                        items={CUSTOMER_NAME}
                        // key={CUSTOMER_NAME.labels}
                        setOpen={setOpenCustomerName}
                        setValue={setValueCustomerName}
                        placeholder={'Select customer'}
                        listMode='SCROLLVIEW'
                        containerProps={styles.cname_dropdown}
                    // dropDownContainerStyle={styles.cname_dropdown}
                    />
                    <Line color={darkgray} />
                </View>

                {valueCustomerName == 'GreenWings' &&
                    <Image
                        source={require('../../../assets/images/icons/logo/greenwings.png')}
                        style={styles.cname_logo}
                    />}
            </View>

            <ScrollView>
                <View>
                    <CRGI />

                    <Temperature />

                    <ContainerTemperature />

                    <Time />

                    <Checklist />

                    <Comments />
                </View>
            </ScrollView>

            <View style={styles.submit_container}>
                <SquareButton
                    includeText
                    text='SUBMIT'
                    backgroundColor={blue}
                    textStyle={styles.submit_text}
                    buttonStyle={styles.submit_button}
                    onPress={() => navigation.navigate(Route.MAIN_TAB, { screen: Route.Main.BOTTOM_TAB, params: { screen: Route.Main.BottomTab.HOME_TAB } })}
                />
            </View>

        </SafeAreaView>

    );
}

export default NewShipment;

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('screen');

const HEADER_WIDTH = ScreenWidth;
const HEADER_HEIGHT = ScreenHeight / 20;
const HEADER_CIRCLE_WIDTH = HEADER_HEIGHT / 2;
const HEADER_CIRCLE_HEIGHT = HEADER_HEIGHT / 2;
const HEADER_MARGIN = 10;
const HEADER_PADDING = 20;
const INPUT_HEIGHT = 30;
const ITEM_MARGIN = 5;
const INPUT_FONTSIZE = 14;
const RADIO_WIDTH = 200;
const ITEM_WIDTH = ScreenWidth - 2 * ITEM_MARGIN;
const SUBMIT_BUTTON_HEIGHT = 50;
const SUBMIT_BUTTON_MARGIN = 20;
const SUBMIT_CONTAINER_HEIGHT = SUBMIT_BUTTON_HEIGHT + SUBMIT_BUTTON_MARGIN;
const SUBMIT_BUTTON_WIDTH = ScreenWidth - SUBMIT_BUTTON_MARGIN;

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: white,
    },
    header_container: {
        backgroundColor: yellow,
        height: HEADER_HEIGHT,
        width: HEADER_WIDTH,
        alignItems: 'center',
        marginVertical: HEADER_MARGIN,
        ...GlobalStyle.row_wrapper,
    },
    header_circle: {
        backgroundColor: white,
        borderRadius: 50,
        height: HEADER_CIRCLE_HEIGHT,
        width: HEADER_CIRCLE_WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: HEADER_MARGIN,
    },
    input: {
        height: INPUT_HEIGHT,
        width: ScreenWidth / 2,
        padding: 5,
        fontSize: INPUT_FONTSIZE,
        fontWeight: '700',
    },
    item: {
        width: ITEM_WIDTH,
        margin: ITEM_MARGIN,
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
    item_title: {
        fontWeight: '700',
        color: darkgray,
    },
    header_text: {
        fontWeight: '600',
    },
    header_down: {
        position: 'absolute',
        right: 5,
        width: 30,
        height: 30,
    },
    mb5: {
        marginBottom: 5,
    },
    cname_container: {
        ...GlobalStyle.row_wrapper,
        margin: 10,
        alignItems: 'center',
        zIndex: 10,
    },
    cname_dropdown: {
        minHeight: 35,
        width: ScreenWidth / 2.5,
        backgroundColor: '#fff',
        borderWidth: 0,
    },
    cname_input: {
        fontSize: INPUT_FONTSIZE - 2,
        fontWeight: '700',
    },
    cname_logo: {
        position: 'absolute',
        right: 0,
    },

    radio: {
        marginLeft: 30,
        width: RADIO_WIDTH,
        padding: 10,
    },
    radio_text: {
        fontWeight: '600',
        color: darkgray,
    },
    radio_option1: {
        position: 'absolute',
        left: 0,

    },
    radio_option2: {
        position: 'absolute',
        left: 120,
    },
    submit_container: {
        width: ScreenWidth,
        height: SUBMIT_CONTAINER_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
    },
    submit_button: {
        height: SUBMIT_BUTTON_HEIGHT,
        width: SUBMIT_BUTTON_WIDTH,
    },
    submit_text: {
        fontSize: 20,
        fontWeight: '600',
        color: white,
    },
})