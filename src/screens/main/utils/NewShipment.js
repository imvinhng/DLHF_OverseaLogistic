import React, { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, SafeAreaView, Dimensions, ScrollView, Image, TextInput } from 'react-native';
import { black, blue, darkgray, green, lightgray, white, yellow } from '../../../assets/styles/Colors';
import GlobalStyle, { GLOBAL_FONTSIZE } from '../../../assets/styles/GlobalStyle';
import { Radio2Button, RoundButton, SquareButton } from '../../../components/CustomButton';
import DropDownPicker from 'react-native-dropdown-picker';
import { Line } from '../../../components/Line';
import { CUSTOMER_NAME } from '../../../database/CustomerList';
import { Route } from '../../../navigations/Route';

import CRGI from '../../../components/report/CRGI';
import Temperature from '../../../components/report/Temperature';
import ContainerTemperature from '../../../components/report/ContainerTemperature';
import Time from '../../../components/report/Time';
import Checklist from '../../../components/report/Checklist';
import Comments from '../../../components/report/Comments';
import { CONTAINER_REPORT } from '../../../database/ContainerReport';
import { DRAFT_COLOR } from '../../../assets/styles/COLOR_INDEX';
import ReportStyle from '../../../assets/styles/ReportStyle';

function NewShipment(props) {
    const navigation = useNavigation();
    const [openCustomerName, setOpenCustomerName] = useState(false);
    const [valueCustomerName, setValueCustomerName] = useState(false);

    const [newItemIndex, setNewItemIndex] = useState(CONTAINER_REPORT.length + 1);

    const [crgi, setCrgi] = useState({
        date: '',
        weather: '',
        vessel_no: '',
        bl_no: '',
        container_no: '',
        container_type: '',
        etd: '',
        eta: '',
        csc_front: '',
        csc_door: '',
    })
    const [temperature, setTemperature] = useState({
        outside_temp: 0,
        box_seri_no: [],
        box_temperature: [],
    })
    const [containerTemperature, setContainerTemperature] = useState({
        set_temp: 0,
        supply_temp: 0,
        return_temp: 0,
        before_loading: 0,
    })
    const [time, setTime] = useState({
        start_loading_time: '',
        finish_loading_time: '',
        departure_daron_time: '',
    })
    const [checklist, setChecklist] = useState({
        no_of_pallets: '',
        pallets_strapped: null,
        no_of_corner_strips: '',
        ventilation_setting: '',
        drainage_valves: '',
        d_holes_opened: '',
        clean_inside_container: null,
        outside_wall_dmg: null,
        inside_front_wall_dmg: null,
        inside_wall_floor_ceilling_dmg: null,
        plastic_cover: null,
        space_btw_front_and_first: '',
        fumigation_stamp: null,
        drainage_plug: 0,
    })

    const [comments, setComments] = useState('')

    return (
        <SafeAreaView style={styles.home}>
            <View style={styles.cname_container}>
                <Text style={ReportStyle.item_title}>Customer Name: </Text>
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
                        placeholder={'Select.'}
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
                    <CRGI
                        audience={'sender'}
                        crgi={crgi}
                        setCrgi={setCrgi}
                    />
                    <Temperature
                        audience={'sender'}
                        temperature={temperature}
                        setTemperature={setTemperature}
                    />
                    <ContainerTemperature
                        audience={'sender'}
                        containerTemperature={containerTemperature}
                        setContainerTemperature={setContainerTemperature}
                    />
                    <Time
                        audience={'sender'}
                        time={time}
                        setTime={setTime}
                    />
                    <Checklist
                        audience={'sender'}
                        checklist={checklist}
                        setChecklist={setChecklist}
                    />
                    <Comments
                        audience={'sender'}
                        comments={comments}
                        setComments={setComments}
                    />
                </View>
            </ScrollView>

            <View style={styles.submit_container}>
                <SquareButton
                    includeText
                    text='SUBMIT'
                    backgroundColor={blue}
                    textStyle={styles.submit_text}
                    buttonStyle={styles.submit_button}
                    onPress={() => {
                        CONTAINER_REPORT.push({
                            id: newItemIndex,
                            crgi: crgi,
                            temperature: temperature,
                            container_temp: containerTemperature,
                            time: time,
                            checklist: checklist,
                            comments: comments,
                            color: DRAFT_COLOR,
                            status_all: [
                                { id: 1, status: 'Draft', created_at: crgi.date },
                            ],
                            photo: [
                                { id: 1, uri: require('../../../assets/images/container-report/TA1.png'), type: 'Damaged', alt: 'Damaged Front Wall TA1' },
                                { id: 2, uri: require('../../../assets/images/container-report/TA2.png'), type: 'Damaged', alt: 'Damaged Front Wall TA2' },
                                { id: 3, uri: require('../../../assets/images/container-report/TA3.png'), type: 'Damaged', alt: 'Damaged Front Wall TA3' },
                                // { url },
                                // { url }
                            ],
                            messages: [],
                            claim: [],

                        }),
                            console.log(crgi)
                        setNewItemIndex(newItemIndex + 1);
                        navigation.navigate(Route.MAIN_TAB, { screen: Route.Main.BOTTOM_TAB, params: { screen: Route.Main.BottomTab.HOME_TAB } });
                    }}
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
        fontSize: GLOBAL_FONTSIZE,
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