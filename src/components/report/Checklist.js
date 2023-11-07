import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, SafeAreaView, Dimensions, ScrollView, Image, TextInput } from 'react-native';
import { black, blue, darkgray, green, lightgray, white, yellow } from '../../assets/styles/Colors';
import GlobalStyle from '../../assets/styles/GlobalStyle';
import { Radio2Button, RoundButton, SquareButton } from '../../components/CustomButton';
import DropDownPicker from 'react-native-dropdown-picker';
import { Line } from '../../components/Line';
import { CUSTOMER_NAME } from '../../database/CustomerList';
import { Route } from '../../navigations/Route';


export const Checklist = (props) => {
    const [openChecklist, setOpenChecklist] = useState(false);

    return (
        <View>
            <View style={styles.header_container}>
                <View style={styles.header_circle}>
                    <Text style={styles.header_text}>
                        4
                    </Text>
                </View>
                <Text style={styles.header_text}>CHECKLIST</Text>
                <RoundButton
                    includeIcon
                    iconType='FontAwesome5'
                    iconName={'chevron-down'}
                    iconSize={15}
                    buttonStyle={styles.header_down}
                    onPress={() => setOpenChecklist(!openChecklist)}
                />
            </View>

            {openChecklist &&
                props.audience == 'sender' &&
                <View>
                    <View style={styles.checklist_item}>
                        <View style={styles.item}>
                            <Text style={styles.item_title}># of of pallets</Text>
                            <TextInput style={styles.input} />
                            <Line color={darkgray} style={styles.mb5} />
                        </View>
                    </View>
                    <View style={styles.checklist_item}>
                        <View style={styles.item}>
                            <Text style={styles.item_title}>Is all pallets tightly strapped?</Text>
                            <TextInput style={styles.input} />
                            <Line color={darkgray} style={styles.mb5} />
                        </View>
                    </View>
                    <View style={styles.checklist_item}>
                        <View style={styles.item}>
                            <Text style={styles.item_title}># of corner strips</Text>
                            <TextInput style={styles.input} />
                            <Line color={darkgray} style={styles.mb5} />
                        </View>
                    </View>
                    <View style={styles.checklist_item}>
                        <View style={styles.item}>
                            <Text style={styles.item_title}>Ventilation setting</Text>
                            <TextInput style={styles.input} />
                            <Line color={darkgray} style={styles.mb5} />
                        </View>
                    </View>
                    <View style={styles.checklist_item}>
                        <View style={styles.item}>
                            <Text style={styles.item_title}>Drainage valves</Text>
                            <TextInput style={styles.input} />
                            <Line color={darkgray} style={styles.mb5} />
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
                            <Line color={darkgray} style={styles.mb5} />
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
                            <Line color={darkgray} style={styles.mb5} />
                        </View>
                    </View>
                </View>
            }
            {openChecklist &&
                props.audience == 'receiver' &&
                <View>
                    <View style={styles.checklist_item}>
                        <View style={styles.textbox_auto}>
                            <Text style={styles.item_title}># of of pallets</Text>
                            <TextInput style={styles.input} placeholder={'24 pcs'} editable={false} />
                            <Line color={darkgray} style={styles.mb5} />
                        </View>
                        <View style={styles.textbox_relative}>
                            <Text style={styles.item_title_green}>Input by receiver</Text>
                            <TextInput style={styles.input} />
                            <Line color={green} style={styles.mb5} />
                        </View>
                    </View>
                    <View style={styles.checklist_item}>
                        <View style={styles.textbox_auto}>
                            <Text style={styles.item_title}>Is all pallets tightly strapped?</Text>
                            <Radio2Button
                                color={lightgray}
                                editable={false}
                                option1Selected
                                buttonGroupStyle={styles.radio}
                                textStyle={styles.radio_text}
                            />
                        </View>
                        <View style={styles.textbox_relative}>
                            <Text style={styles.item_title_green}>Input by receiver</Text>
                            <Radio2Button
                                color='green'
                                buttonGroupStyle={styles.radio}
                                textStyle={styles.radio_text}
                            />
                        </View>
                    </View>
                    <View style={styles.checklist_item}>
                        <View style={styles.textbox_auto}>
                            <Text style={styles.item_title}># of corner strips</Text>
                            <TextInput style={styles.input} placeholder={'96 pcs'} editable={false} />
                            <Line color={darkgray} style={styles.mb5} />
                        </View>
                        <View style={styles.textbox_relative}>
                            <Text style={styles.item_title_green}>Input by receiver</Text>
                            <TextInput style={styles.input} />
                            <Line color={green} style={styles.mb5} />
                        </View>
                    </View>
                    <View style={styles.checklist_item}>
                        <View style={styles.textbox_auto}>
                            <Text style={styles.item_title}>Ventilation setting</Text>
                            <TextInput style={styles.input} placeholder={'13m3/h'} editable={false} />
                            <Line color={darkgray} style={styles.mb5} />
                        </View>
                        <View style={styles.textbox_relative}>
                            <Text style={styles.item_title_green}>Input by receiver</Text>
                            <TextInput style={styles.input} />
                            <Line color={green} style={styles.mb5} />
                        </View>
                    </View>
                    <View style={styles.checklist_item}>
                        <View style={styles.textbox_auto}>
                            <Text style={styles.item_title}>Drainage valves</Text>
                            <TextInput style={styles.input} placeholder={'4 pcs'} editable={false} />
                            <Line color={darkgray} style={styles.mb5} />
                        </View>
                        <View style={styles.textbox_relative}>
                            <Text style={styles.item_title_green}>Input by receiver</Text>
                            <TextInput style={styles.input} />
                            <Line color={green} style={styles.mb5} />
                        </View>
                    </View>
                    <View style={styles.checklist_item}>
                        <View style={styles.textbox_auto}>
                            <Text style={styles.item_title}>4 drainage holes</Text>
                            <Radio2Button
                                color={lightgray}
                                editable={false}
                                option1Text={'Opened'}
                                option2Text={'Closed'}
                                option1Selected
                                buttonGroupStyle={styles.radio}
                                textStyle={styles.radio_text}
                            />
                        </View>
                        <View style={styles.textbox_relative}>
                            <Text style={styles.item_title_green}>Input by receiver</Text>
                            <Radio2Button
                                color='green'
                                option1Text={'Opened'}
                                option2Text={'Closed'}
                                buttonGroupStyle={styles.radio}
                                textStyle={styles.radio_text}
                            />
                        </View>
                    </View>
                    <View style={styles.checklist_item}>
                        <View style={styles.textbox_auto}>
                            <Text style={styles.item_title}>Clean inside container</Text>
                            <Radio2Button
                                color={lightgray}
                                editable={false}
                                buttonGroupStyle={styles.radio}
                                option1Selected
                                textStyle={styles.radio_text}
                            />
                        </View>
                        <View style={styles.textbox_relative}>
                            <Text style={styles.item_title_green}>Input by receiver</Text>
                            <Radio2Button
                                color='green'
                                buttonGroupStyle={styles.radio}
                                textStyle={styles.radio_text}
                            />
                        </View>
                    </View>
                    <View style={styles.checklist_item}>
                        {/* <View style={styles.textbox_half}> */}
                        <View style={styles.textbox_auto}>
                            <Text style={styles.item_title}>Outside wall SERVERE damage</Text>
                            <Radio2Button
                                color={lightgray}
                                editable={false}
                                option2Selected
                                buttonGroupStyle={styles.radio}
                                textStyle={styles.radio_text}
                            />
                        </View>
                        <View style={styles.textbox_relative}>
                            <Text style={styles.item_title_green}>Input by receiver</Text>
                            <Radio2Button
                                color='green'
                                buttonGroupStyle={styles.radio}
                                textStyle={styles.radio_text}
                            />
                        </View>
                    </View>
                    <View style={styles.checklist_item}>
                        <View style={styles.textbox_auto}>
                            <Text style={styles.item_title}>Inside FRONT wall ANY damage</Text>
                            <Radio2Button
                                color={lightgray}
                                editable={false}
                                option1Selected
                                buttonGroupStyle={styles.radio}
                                textStyle={styles.radio_text}
                            />
                        </View>
                        <View style={styles.textbox_relative}>
                            <Text style={styles.item_title_green}>Input by receiver</Text>
                            <Radio2Button
                                color='green'
                                buttonGroupStyle={styles.radio}
                                textStyle={styles.radio_text}
                            />
                        </View>
                    </View>
                    <View style={styles.checklist_item}>
                        <View style={styles.textbox_auto}>
                            <Text style={styles.item_title}>Inside wall, floor and ceiling SERVERE damage</Text>
                            <Radio2Button
                                color={lightgray}
                                editable={false}
                                option2Selected
                                buttonGroupStyle={styles.radio}
                                textStyle={styles.radio_text}
                            />
                        </View>
                        <View style={styles.textbox_relative}>
                            <Text style={styles.item_title_green}>Input by receiver</Text>
                            <Radio2Button
                                color='green'
                                buttonGroupStyle={styles.radio}
                                textStyle={styles.radio_text}
                            />
                        </View>
                    </View>
                    <View style={styles.checklist_item}>
                        <View style={styles.textbox_auto}>
                            <Text style={styles.item_title}>Cover plastic pallet number 1-2</Text>
                            <Radio2Button
                                color={lightgray}
                                editable={false}
                                option1Selected
                                buttonGroupStyle={styles.radio}
                                textStyle={styles.radio_text}
                            />
                        </View>
                        <View style={styles.textbox_relative}>
                            <Text style={styles.item_title_green}>Input by receiver</Text>
                            <Radio2Button
                                color='green'
                                buttonGroupStyle={styles.radio}
                                textStyle={styles.radio_text}
                            />
                        </View>
                    </View>
                    <View style={styles.checklist_item}>
                        <View style={styles.textbox_auto}>
                            <Text style={styles.item_title}>Space between front wall and first pallets</Text>
                            <TextInput style={styles.input} placeholder={'30 cm'} />
                            <Line color={darkgray} style={styles.mb5} />
                        </View>
                        <View style={styles.textbox_relative}>
                            <Text style={styles.item_title_green}>Input by receiver</Text>
                            <TextInput style={styles.input} />
                            <Line color={green} style={styles.mb5} />
                        </View>
                    </View>
                    <View style={styles.checklist_item}>
                        <View style={styles.textbox_auto}>
                            <Text style={styles.item_title}>Fumigation stamp on pallet visible</Text>
                            <Radio2Button
                                color={lightgray}
                                editable={false}
                                option1Selected
                                buttonGroupStyle={styles.radio}
                                textStyle={styles.radio_text}
                            />
                        </View>
                        <View style={styles.textbox_relative}>
                            <Text style={styles.item_title_green}>Input by receiver</Text>
                            <Radio2Button
                                color='green'
                                buttonGroupStyle={styles.radio}
                                textStyle={styles.radio_text}
                            />
                        </View>
                    </View>
                    <View style={styles.checklist_item}>
                        <View style={styles.textbox_auto}>
                            <Text style={styles.item_title}>Drainage Plug</Text>
                            <TextInput style={styles.input} placeholder={'4 pcs'} />
                            <Line color={darkgray} style={styles.mb5} />
                        </View>
                        <View style={styles.textbox_relative}>
                            <Text style={styles.item_title_green}>Input by receiver</Text>
                            <TextInput style={styles.input} />
                            <Line color={green} style={styles.mb5} />
                        </View>
                    </View>
                </View>
            }
        </View>
    )
}

export default Checklist;


const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('screen');

const HEADER_WIDTH = ScreenWidth;
const HEADER_HEIGHT = ScreenHeight / 20;
const HEADER_CIRCLE_WIDTH = HEADER_HEIGHT / 2;
const HEADER_CIRCLE_HEIGHT = HEADER_HEIGHT / 2;
const HEADER_MARGIN = 10;
const HEADER_PADDING = 20;
const CRGI_3C_MARGIN = 10;
const CRGI_2C_MARGIN = 10;
const INPUT_HEIGHT = 20;
const ITEM_MARGIN = 5;
const ITEM_PADDING = 5;
const TEMPERATURE_PLUS_WIDTH = 20;
const INPUT_FONTSIZE = 8; // don't go pass 8 or text will break
const ITEM_WIDTH = ScreenWidth - 2 * ITEM_MARGIN;
const ITEM_HALF_WIDTH = ScreenWidth / 2 - 2 * ITEM_MARGIN;
const RADIO_WIDTH = ITEM_HALF_WIDTH;
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
        paddingLeft: 5,
        fontSize: INPUT_FONTSIZE,
        fontWeight: '700',
        // backgroundColor: 'yellow'
    },
    item: {
        width: ITEM_WIDTH,
        margin: ITEM_MARGIN,
        paddingVertical: ITEM_PADDING,
        paddingHorizontal: ITEM_PADDING,
    },
    item_half: {
        width: ITEM_HALF_WIDTH,
        margin: ITEM_MARGIN,
        paddingVertical: ITEM_PADDING,
        paddingHorizontal: ITEM_PADDING,
    },
    textbox_half: {
        width: ITEM_HALF_WIDTH - 2 * ITEM_MARGIN,
        margin: ITEM_MARGIN,
        paddingVertical: ITEM_PADDING,
        paddingHorizontal: ITEM_PADDING,
    },
    textbox_auto: {
        flex: 3,
        margin: ITEM_MARGIN,
        paddingVertical: ITEM_PADDING,
        paddingLeft: ITEM_PADDING,
        // backgroundColor: 'yellow',
    },
    textbox_relative: {
        flex: 2,
        margin: ITEM_MARGIN,
        paddingVertical: ITEM_PADDING,
        paddingLeft: ITEM_PADDING,
        // backgroundColor: 'red',
    },
    item_title: {
        fontWeight: '700',
        fontSize: INPUT_FONTSIZE,
        color: darkgray,
    },
    item_title_green: {
        fontWeight: '700',
        fontSize: INPUT_FONTSIZE,
        color: green,
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
        ...GlobalStyle.row_wrapper,
    },
    radio: {
        // marginLeft: 30,
        width: 'auto',
        justifyContent: 'space-evenly',
        // padding: 10,
        // backgroundColor: 'lightblue',
    },
    radio_text: {
        fontWeight: '600',
        fontSize: INPUT_FONTSIZE,
        color: darkgray,
    },
    radio_option1: {
        position: 'absolute',
        left: 0,
    },
    radio_option2: {
        position: 'absolute',
        left: ITEM_HALF_WIDTH / 2,
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
    fullbox: {
        ...GlobalStyle.row_wrapper,
        // backgroundColor: 'red',
    },
    halfbox: {
        width: ScreenWidth / 2,
        // backgroundColor: 'yellow',
    },

})