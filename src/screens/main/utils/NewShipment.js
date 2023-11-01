import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import { blue, darkgray, lightgray, white, yellow } from '../../../assets/styles/Colors';
import GlobalStyle from '../../../assets/styles/GlobalStyle';
import { Radio2Button, RoundButton, SquareButton } from '../../../components/CustomButton';
import DropDownPicker from 'react-native-dropdown-picker';
import { GrayLine_Full, GrayLine_Half } from '../../../components/Line';
import { CUSTOMER_NAME } from '../../../database/CustomerList';
import { TextInput } from 'react-native-gesture-handler';
import { Route } from '../../../navigations/Route';

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
                        // textStyle={styles.input}
                        open={openCustomerName}
                        value={valueCustomerName}
                        items={CUSTOMER_NAME}
                        // key={barChartYear[dataIndex].labels}
                        setOpen={setOpenCustomerName}
                        setValue={setValueCustomerName}
                        placeholder={'Select customer'}
                        listMode='SCROLLVIEW'
                        containerProps={styles.cname_dropdown}
                    // dropDownContainerStyle={styles.cname_dropdown}
                    />
                    <GrayLine_Full />
                </View>
            </View>
            <ScrollView>
                <View>
                    <View style={styles.header_container}>
                        <Text style={[
                            styles.header_text,
                            { paddingLeft: HEADER_PADDING }
                        ]}>
                            CONTAINER REPORT GENERAL INFO.
                        </Text>
                        <RoundButton
                            iconName={'chevron-down'}
                            iconSize={15}
                            buttonStyle={styles.header_down}
                            onPress={() => setOpenCRGI(!openCRGI)}
                        />
                    </View>

                    {openCRGI &&
                        <View>
                            <View style={styles.CRGI_3c}>
                                <View style={styles.CRGI_3c_item}>
                                    <Text style={styles.item_title}>Date:</Text>
                                    <TextInput style={styles.input} value={'20 Sep. 2023'} />
                                    <GrayLine_Full style={styles.mb5} />
                                </View>
                                <View style={styles.CRGI_3c_item}>
                                    <Text style={styles.item_title}>Weather:</Text>
                                    <TextInput style={styles.input} value={'Cloudy'} />
                                    <GrayLine_Full style={styles.mb5} />
                                </View>
                                <View style={styles.CRGI_3c_item}>
                                    <Text style={styles.item_title}>Reported by:</Text>
                                    <TextInput style={styles.input} value={'Duong'} />
                                    <GrayLine_Full style={styles.mb5} />
                                </View>
                            </View>

                            <View style={styles.CRGI_2c}>
                                <View style={styles.CRGI_2c_item}>
                                    <Text style={styles.item_title}>Vessel No.</Text>
                                    <TextInput style={styles.input} />
                                    <GrayLine_Full style={styles.mb5} />

                                    <Text style={styles.item_title}>B/L No.</Text>
                                    <TextInput style={styles.input} />
                                    <GrayLine_Full style={styles.mb5} />

                                    <Text style={styles.item_title}>Container No.</Text>
                                    <TextInput style={styles.input} />
                                    <GrayLine_Full style={styles.mb5} />

                                    <Text style={styles.item_title}>Container Type</Text>
                                    <TextInput style={styles.input} />
                                    <GrayLine_Full style={styles.mb5} />
                                </View >
                                <View style={styles.CRGI_2c_item}>
                                    <Text style={styles.item_title}>ETD</Text>
                                    <TextInput style={styles.input} />
                                    <GrayLine_Full style={styles.mb5} />

                                    <Text style={styles.item_title}>ETA</Text>
                                    <TextInput style={styles.input} />
                                    <GrayLine_Full style={styles.mb5} />

                                    <Text style={styles.item_title}>CSC (Front)</Text>
                                    <TextInput style={styles.input} />
                                    <GrayLine_Full style={styles.mb5} />

                                    <Text style={styles.item_title}>CSC (Door)</Text>
                                    <TextInput style={styles.input} />
                                    <GrayLine_Full style={styles.mb5} />
                                </View>

                            </View>

                        </View>
                    }

                    <View style={styles.header_container}>
                        <View style={styles.header_circle}>
                            <Text style={styles.header_text}>
                                1
                            </Text>
                        </View>
                        <Text style={styles.header_text}>TEMPERATURE</Text>
                        <RoundButton
                            iconName={'chevron-down'}
                            iconSize={15}
                            buttonStyle={styles.header_down}
                            onPress={() => setOpenTemperature(!openTemperature)}
                        />
                    </View>

                    {openTemperature &&
                        <View>
                            <View style={styles.temperature_2c}>
                                <View style={styles.temperature_2c_item}>
                                    <Text style={styles.item_title}>Box Seri Number</Text>
                                    <TextInput style={styles.input} />
                                    <GrayLine_Full style={styles.mb5} />
                                </View>
                                <View style={styles.temperature_2c_item}>
                                    <Text style={styles.item_title}>Box Temperature</Text>
                                    <TextInput style={styles.input} />
                                    <GrayLine_Full style={styles.mb5} />
                                </View>
                                <SquareButton iconName={'plus'} iconSize={15} buttonStyle={styles.temperature_plus} />
                                <View style={styles.temperature_2c_item}>
                                    <Text style={styles.item_title}>Outside Temperature</Text>
                                    <TextInput style={styles.input} />
                                    <GrayLine_Full style={styles.mb5} />
                                </View>
                            </View>
                        </View>
                    }

                    <View style={styles.header_container}>
                        <View style={styles.header_circle}>
                            <Text style={styles.header_text}>
                                2
                            </Text>
                        </View>
                        <Text style={styles.header_text}>CONTAINER TEMPERATURE</Text>
                        <RoundButton
                            iconName={'chevron-down'}
                            iconSize={15}
                            buttonStyle={styles.header_down}
                            onPress={() => setOpenContainerTemperature(!openContainerTemperature)}
                        />
                    </View>

                    {openContainerTemperature &&
                        <View>
                            <View style={styles.item}>
                                <Text style={styles.item_title}>Set Temp</Text>
                                <TextInput style={styles.input} />
                                <GrayLine_Half style={styles.mb5} />
                            </View>
                            <View style={styles.item}>
                                <Text style={styles.item_title}>Supply Temp.</Text>
                                <TextInput style={styles.input} />
                                <GrayLine_Half style={styles.mb5} />
                            </View>
                            <View style={styles.item}>
                                <Text style={styles.item_title}>Return Temp.</Text>
                                <TextInput style={styles.input} />
                                <GrayLine_Half style={styles.mb5} />
                            </View>
                            <View style={styles.item}>
                                <Text style={styles.item_title}>Before Loading</Text>
                                <TextInput style={styles.input} />
                                <GrayLine_Half style={styles.mb5} />
                            </View>
                        </View>
                    }

                    <View style={styles.header_container}>
                        <View style={styles.header_circle}>
                            <Text style={styles.header_text}>
                                3
                            </Text>
                        </View>
                        <Text style={styles.header_text}>TIME</Text>
                        <RoundButton
                            iconName={'chevron-down'}
                            iconSize={15}
                            buttonStyle={styles.header_down}
                            onPress={() => setOpenTime(!openTime)}
                        />
                    </View>

                    {openTime &&
                        <View>
                            <View style={styles.item}>
                                <Text style={styles.item_title}>Start Loading Time</Text>
                                <TextInput style={styles.input} />
                                <GrayLine_Full style={styles.mb5} />
                            </View>
                            <View style={styles.item}>
                                <Text style={styles.item_title}>Finish Loading Time</Text>
                                <TextInput style={styles.input} />
                                <GrayLine_Full style={styles.mb5} />
                            </View>
                            <View style={styles.item}>
                                <Text style={styles.item_title}>Departure Daron Time</Text>
                                <TextInput style={styles.input} />
                                <GrayLine_Full style={styles.mb5} />
                            </View>
                        </View>
                    }

                    <View style={styles.header_container}>
                        <View style={styles.header_circle}>
                            <Text style={styles.header_text}>
                                4
                            </Text>
                        </View>
                        <Text style={styles.header_text}>CHECKLIST</Text>
                        <RoundButton
                            iconName={'chevron-down'}
                            iconSize={15}
                            buttonStyle={styles.header_down}
                            onPress={() => setOpenChecklist(!openChecklist)}
                        />
                    </View>

                    {openChecklist &&
                        <View>
                            <View style={styles.checklist_item}>
                                <View style={styles.item}>
                                    <Text style={styles.item_title}># of corner strips</Text>
                                    <TextInput style={styles.input} />
                                    <GrayLine_Half style={styles.mb5} />
                                </View>
                            </View>
                            <View style={styles.checklist_item}>
                                <View style={styles.item}>
                                    <Text style={styles.item_title}>Ventilation setting</Text>
                                    <TextInput style={styles.input} />
                                    <GrayLine_Half style={styles.mb5} />
                                </View>
                            </View>
                            <View style={styles.checklist_item}>
                                <View style={styles.item}>
                                    <Text style={styles.item_title}>Drainage valves</Text>
                                    <TextInput style={styles.input} />
                                    <GrayLine_Half style={styles.mb5} />
                                </View>
                            </View>
                            <View style={styles.checklist_item}>
                                <View style={styles.item}>
                                    <Text style={styles.item_title}>4 drainage holes</Text>
                                    <Radio2Button
                                        option1Text={'Opened'}
                                        option2Text={'Closed'}
                                        buttonGroupStyle={styles.radio}
                                        option1Style={styles.radio_option1}
                                        option2Style={styles.radio_option2}
                                        textStyle={styles.radio_text}
                                    />
                                </View>
                            </View>
                            <View style={styles.checklist_item}>
                                <View style={styles.item}>
                                    <Text style={styles.item_title}>Clean inside container</Text>
                                    <Radio2Button
                                        buttonGroupStyle={styles.radio}
                                        option1Style={styles.radio_option1}
                                        option2Style={styles.radio_option2}
                                        textStyle={styles.radio_text}
                                    />
                                </View>
                            </View>
                            <View style={styles.checklist_item}>
                                <View style={styles.item}>
                                    <Text style={styles.item_title}>Outside wall SERVERE damage</Text>
                                    <Radio2Button
                                        buttonGroupStyle={styles.radio}
                                        option1Style={styles.radio_option1}
                                        option2Style={styles.radio_option2}
                                        textStyle={styles.radio_text}
                                    />
                                </View>
                            </View>
                            <View style={styles.checklist_item}>
                                <View style={styles.item}>
                                    <Text style={styles.item_title}>Inside FRONT wall ANY damage</Text>
                                    <Radio2Button
                                        buttonGroupStyle={styles.radio}
                                        option1Style={styles.radio_option1}
                                        option2Style={styles.radio_option2}
                                        textStyle={styles.radio_text}
                                    />
                                </View>
                            </View>
                            <View style={styles.checklist_item}>
                                <View style={styles.item}>
                                    <Text style={styles.item_title}>Inside wall, floor and ceiling SERVERE damage</Text>
                                    <Radio2Button
                                        buttonGroupStyle={styles.radio}
                                        option1Style={styles.radio_option1}
                                        option2Style={styles.radio_option2}
                                        textStyle={styles.radio_text}
                                    />
                                </View>
                            </View>
                            <View style={styles.checklist_item}>
                                <View style={styles.item}>
                                    <Text style={styles.item_title}>Cover plastic pallet number 1-2</Text>
                                    <Radio2Button
                                        buttonGroupStyle={styles.radio}
                                        option1Style={styles.radio_option1}
                                        option2Style={styles.radio_option2}
                                        textStyle={styles.radio_text}
                                    />
                                </View>
                            </View>
                            <View style={styles.checklist_item}>
                                <View style={styles.item}>
                                    <Text style={styles.item_title}>Space between front wall and first pallets</Text>
                                    <TextInput style={styles.input} />
                                    <GrayLine_Half style={styles.mb5} />
                                </View>
                            </View>
                            <View style={styles.checklist_item}>
                                <View style={styles.item}>
                                    <Text style={styles.item_title}>Fumigation stamp on pallet visible</Text>
                                    <Radio2Button
                                        buttonGroupStyle={styles.radio}
                                        option1Style={styles.radio_option1}
                                        option2Style={styles.radio_option2}
                                        textStyle={styles.radio_text}
                                    />
                                </View>
                            </View>
                            <View style={styles.checklist_item}>
                                <View style={styles.item}>
                                    <Text style={styles.item_title}>Drainage Plug</Text>
                                    <TextInput style={styles.input} />
                                    <GrayLine_Half style={styles.mb5} />
                                </View>
                            </View>
                        </View>

                    }

                    <View style={styles.header_container}>
                        <View style={styles.header_circle}>
                            <Text style={styles.header_text}>
                                5
                            </Text>
                        </View>
                        <Text style={styles.header_text}>COMMENTS</Text>
                        <RoundButton
                            iconName={'chevron-down'}
                            iconSize={15}
                            buttonStyle={styles.header_down}
                            onPress={() => setOpenComments(!openComments)}
                        />
                    </View>

                    {openComments &&
                        <View>
                            <View style={styles.item}>
                                <Text style={styles.item_title}>Any comments?</Text>
                                <TextInput style={styles.input} />
                                <GrayLine_Half style={styles.mb5} />
                            </View>
                        </View>
                    }
                </View>
            </ScrollView>
            <View style={styles.submit_container}>
                <SquareButton
                    includeText
                    text='SUBMIT'
                    bgColor={blue}
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
const CRGI_3C_MARGIN = 10;
const CRGI_2C_MARGIN = 10;
const INPUT_HEIGHT = 30;
const ITEM_MARGIN = 5;
const TEMPERATURE_PLUS_WIDTH = 20;
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
        width: 200,
        backgroundColor: '#fff',
        borderWidth: 0,
    },
    CRGI_3c: {
        justifyContent: 'space-around',
        ...GlobalStyle.row_wrapper,
    },
    CRGI_2c: {
        justifyContent: 'space-evenly',
        padding: CRGI_2C_MARGIN,
        ...GlobalStyle.row_wrapper,
    },
    CRGI_3c_item: {
        width: (ScreenWidth / 3) - 2 * CRGI_3C_MARGIN,
        margin: CRGI_3C_MARGIN,
        ...GlobalStyle.column_wrapper
    },
    CRGI_2c_item: {
        width: (ScreenWidth / 2) - 2 * CRGI_2C_MARGIN,
        margin: CRGI_2C_MARGIN,
        ...GlobalStyle.column_wrapper
    },
    temperature_2c: {
        // justifyContent: 'space-between',
        padding: ITEM_MARGIN,
        flexWrap: 'wrap',
        ...GlobalStyle.row_wrapper,
    },
    temperature_2c_item: {
        width: (ScreenWidth / 2) - 2 * ITEM_MARGIN - TEMPERATURE_PLUS_WIDTH,
        margin: ITEM_MARGIN,
        ...GlobalStyle.column_wrapper
    },
    temperature_plus: {
        width: TEMPERATURE_PLUS_WIDTH,
        height: INPUT_HEIGHT,
        position: 'absolute',
        right: ITEM_MARGIN,
        top: INPUT_HEIGHT - 5,
    },
    checklist_item: {
        margin: 10,
        // padding: 10,
        borderWidth: 0.5,
        borderColor: lightgray,
        borderRadius: 10,
        backgroundColor: white,
        ...GlobalStyle.box_shadow,
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