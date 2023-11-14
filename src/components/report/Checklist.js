import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, SafeAreaView, Dimensions, ScrollView, Image, TextInput } from 'react-native';
import { black, blue, darkgray, green, lightgray, placeholderGray, white, yellow } from '../../assets/styles/Colors';
import GlobalStyle from '../../assets/styles/GlobalStyle';
import { Radio2Button, RoundButton, SquareButton } from '../../components/CustomButton';
import DropDownPicker from 'react-native-dropdown-picker';
import { Line } from '../../components/Line';
import { CUSTOMER_NAME } from '../../database/CustomerList';
import { Route } from '../../navigations/Route';
import ReportStyle from '../../assets/styles/ReportStyle';


export const Checklist = (props) => {
    const [openChecklist, setOpenChecklist] = useState(false);

    return (
        <View>
            <View style={ReportStyle.header_container}>
                <View style={ReportStyle.header_circle}>
                    <Text style={ReportStyle.header_text}>
                        4
                    </Text>
                </View>
                <Text style={ReportStyle.header_text}>CHECKLIST</Text>
                <RoundButton
                    includeIcon
                    iconType='FontAwesome5'
                    iconName={'chevron-down'}
                    iconSize={15}
                    buttonStyle={ReportStyle.header_down}
                    onPress={() => setOpenChecklist(!openChecklist)}
                />
            </View>

            {openChecklist &&
                props.audience == 'sender' &&
                <View>
                    <View style={ReportStyle.checklist_item}>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title}># of of pallets</Text>
                            <TextInput style={ReportStyle.input} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View>
                    </View>
                    <View style={ReportStyle.checklist_item}>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title}>Is all pallets tightly strapped?</Text>
                            <TextInput style={ReportStyle.input} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View>
                    </View>
                    <View style={ReportStyle.checklist_item}>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title}># of corner strips</Text>
                            <TextInput style={ReportStyle.input} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View>
                    </View>
                    <View style={ReportStyle.checklist_item}>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title}>Ventilation setting</Text>
                            <TextInput style={ReportStyle.input} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View>
                    </View>
                    <View style={ReportStyle.checklist_item}>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title}>Drainage valves</Text>
                            <TextInput style={ReportStyle.input} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View>
                    </View>
                    <View style={ReportStyle.checklist_item}>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title}>4 drainage holes</Text>
                            <Radio2Button
                                option1Text={'Opened'}
                                option2Text={'Closed'}
                                buttonGroupStyle={ReportStyle.radio}
                                option1Style={ReportStyle.radio_option1}
                                option2Style={ReportStyle.radio_option2}
                                textStyle={ReportStyle.radio_text}
                            />
                        </View>
                    </View>
                    <View style={ReportStyle.checklist_item}>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title}>Clean inside container</Text>
                            <Radio2Button
                                buttonGroupStyle={ReportStyle.radio}
                                option1Style={ReportStyle.radio_option1}
                                option2Style={ReportStyle.radio_option2}
                                textStyle={ReportStyle.radio_text}
                            />
                        </View>
                    </View>
                    <View style={ReportStyle.checklist_item}>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title}>Outside wall SERVERE damage</Text>
                            <Radio2Button
                                buttonGroupStyle={ReportStyle.radio}
                                option1Style={ReportStyle.radio_option1}
                                option2Style={ReportStyle.radio_option2}
                                textStyle={ReportStyle.radio_text}
                            />
                        </View>
                    </View>
                    <View style={ReportStyle.checklist_item}>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title}>Inside FRONT wall ANY damage</Text>
                            <Radio2Button
                                buttonGroupStyle={ReportStyle.radio}
                                option1Style={ReportStyle.radio_option1}
                                option2Style={ReportStyle.radio_option2}
                                textStyle={ReportStyle.radio_text}
                            />
                        </View>
                    </View>
                    <View style={ReportStyle.checklist_item}>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title}>Inside wall, floor and ceiling SERVERE damage</Text>
                            <Radio2Button
                                buttonGroupStyle={ReportStyle.radio}
                                option1Style={ReportStyle.radio_option1}
                                option2Style={ReportStyle.radio_option2}
                                textStyle={ReportStyle.radio_text}
                            />
                        </View>
                    </View>
                    <View style={ReportStyle.checklist_item}>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title}>Cover plastic pallet number 1-2</Text>
                            <Radio2Button
                                buttonGroupStyle={ReportStyle.radio}
                                option1Style={ReportStyle.radio_option1}
                                option2Style={ReportStyle.radio_option2}
                                textStyle={ReportStyle.radio_text}
                            />
                        </View>
                    </View>
                    <View style={ReportStyle.checklist_item}>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title}>Space between front wall and first pallets</Text>
                            <TextInput style={ReportStyle.input} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View>
                    </View>
                    <View style={ReportStyle.checklist_item}>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title}>Fumigation stamp on pallet visible</Text>
                            <Radio2Button
                                buttonGroupStyle={ReportStyle.radio}
                                option1Style={ReportStyle.radio_option1}
                                option2Style={ReportStyle.radio_option2}
                                textStyle={ReportStyle.radio_text}
                            />
                        </View>
                    </View>
                    <View style={ReportStyle.checklist_item}>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title}>Drainage Plug</Text>
                            <TextInput style={ReportStyle.input} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View>
                    </View>
                </View>
            }
            {openChecklist &&
                props.audience == 'receiver' &&
                <View>
                    <View style={ReportStyle.checklist_item}>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title}># of of pallets</Text>
                            <TextInput style={ReportStyle.input} placeholder={'24 pcs'} editable={false} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title_green}>Input by receiver</Text>
                            <TextInput style={ReportStyle.input} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View>
                    </View>
                    <View style={ReportStyle.checklist_item}>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title}>Is all pallets tightly strapped?</Text>
                            <Radio2Button
                                color={lightgray}
                                editable={false}
                                option1Selected
                                buttonGroupStyle={ReportStyle.radio}
                                textStyle={ReportStyle.radio_text}
                            />
                        </View>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title_green}>Input by receiver</Text>
                            <Radio2Button
                                color='green'
                                buttonGroupStyle={ReportStyle.radio}
                                textStyle={ReportStyle.radio_text}
                            />
                        </View>
                    </View>
                    <View style={ReportStyle.checklist_item}>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title}># of corner strips</Text>
                            <TextInput style={ReportStyle.input} placeholder={'96 pcs'} editable={false} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title_green}>Input by receiver</Text>
                            <TextInput style={ReportStyle.input} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View>
                    </View>
                    <View style={ReportStyle.checklist_item}>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title}>Ventilation setting</Text>
                            <TextInput style={ReportStyle.input} placeholder={'13m3/h'} editable={false} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title_green}>Input by receiver</Text>
                            <TextInput style={ReportStyle.input} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View>
                    </View>
                    <View style={ReportStyle.checklist_item}>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title}>Drainage valves</Text>
                            <TextInput style={ReportStyle.input} placeholder={'4 pcs'} editable={false} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title_green}>Input by receiver</Text>
                            <TextInput style={ReportStyle.input} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View>
                    </View>
                    <View style={ReportStyle.checklist_item}>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title}>4 drainage holes</Text>
                            <Radio2Button
                                color={lightgray}
                                editable={false}
                                option1Text={'Opened'}
                                option2Text={'Closed'}
                                option1Selected
                                buttonGroupStyle={ReportStyle.radio}
                                textStyle={ReportStyle.radio_text}
                            />
                        </View>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title_green}>Input by receiver</Text>
                            <Radio2Button
                                color='green'
                                option1Text={'Opened'}
                                option2Text={'Closed'}
                                buttonGroupStyle={ReportStyle.radio}
                                textStyle={ReportStyle.radio_text}
                            />
                        </View>
                    </View>
                    <View style={ReportStyle.checklist_item}>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title}>Clean inside container</Text>
                            <Radio2Button
                                color={lightgray}
                                editable={false}
                                buttonGroupStyle={ReportStyle.radio}
                                option1Selected
                                textStyle={ReportStyle.radio_text}
                            />
                        </View>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title_green}>Input by receiver</Text>
                            <Radio2Button
                                color='green'
                                buttonGroupStyle={ReportStyle.radio}
                                textStyle={ReportStyle.radio_text}
                            />
                        </View>
                    </View>
                    <View style={ReportStyle.checklist_item}>
                        {/* <View style={ReportStyle.textbox_half}> */}
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title}>Outside wall SERVERE damage</Text>
                            <Radio2Button
                                color={lightgray}
                                editable={false}
                                option2Selected
                                buttonGroupStyle={ReportStyle.radio}
                                textStyle={ReportStyle.radio_text}
                            />
                        </View>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title_green}>Input by receiver</Text>
                            <Radio2Button
                                color='green'
                                buttonGroupStyle={ReportStyle.radio}
                                textStyle={ReportStyle.radio_text}
                            />
                        </View>
                    </View>
                    <View style={ReportStyle.checklist_item}>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title}>Inside FRONT wall ANY damage</Text>
                            <Radio2Button
                                color={lightgray}
                                editable={false}
                                option1Selected
                                buttonGroupStyle={ReportStyle.radio}
                                textStyle={ReportStyle.radio_text}
                            />
                        </View>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title_green}>Input by receiver</Text>
                            <Radio2Button
                                color='green'
                                buttonGroupStyle={ReportStyle.radio}
                                textStyle={ReportStyle.radio_text}
                            />
                        </View>
                    </View>
                    <View style={ReportStyle.checklist_item}>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title}>Inside wall, floor and ceiling SERVERE damage</Text>
                            <Radio2Button
                                color={lightgray}
                                editable={false}
                                option2Selected
                                buttonGroupStyle={ReportStyle.radio}
                                textStyle={ReportStyle.radio_text}
                            />
                        </View>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title_green}>Input by receiver</Text>
                            <Radio2Button
                                color='green'
                                buttonGroupStyle={ReportStyle.radio}
                                textStyle={ReportStyle.radio_text}
                            />
                        </View>
                    </View>
                    <View style={ReportStyle.checklist_item}>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title}>Cover plastic pallet number 1-2</Text>
                            <Radio2Button
                                color={lightgray}
                                editable={false}
                                option1Selected
                                buttonGroupStyle={ReportStyle.radio}
                                textStyle={ReportStyle.radio_text}
                            />
                        </View>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title_green}>Input by receiver</Text>
                            <Radio2Button
                                color='green'
                                buttonGroupStyle={ReportStyle.radio}
                                textStyle={ReportStyle.radio_text}
                            />
                        </View>
                    </View>
                    <View style={ReportStyle.checklist_item}>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title}>Space between front wall and first pallets</Text>
                            <TextInput style={ReportStyle.input} placeholder={'30 cm'} editable={false} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title_green}>Input by receiver</Text>
                            <TextInput style={ReportStyle.input} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View>
                    </View>
                    <View style={ReportStyle.checklist_item}>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title}>Fumigation stamp on pallet visible</Text>
                            <Radio2Button
                                color={lightgray}
                                editable={false}
                                option1Selected
                                buttonGroupStyle={ReportStyle.radio}
                                textStyle={ReportStyle.radio_text}
                            />
                        </View>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title_green}>Input by receiver</Text>
                            <Radio2Button
                                color='green'
                                buttonGroupStyle={ReportStyle.radio}
                                textStyle={ReportStyle.radio_text}
                            />
                        </View>
                    </View>
                    <View style={ReportStyle.checklist_item}>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title}>Drainage Plug</Text>
                            <TextInput style={ReportStyle.input} placeholder={'4 pcs'} editable={false} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View>
                        <View style={ReportStyle.item}>
                            <Text style={ReportStyle.item_title_green}>Input by receiver</Text>
                            <TextInput style={ReportStyle.input} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View>
                    </View>
                </View>
            }
        </View>
    )
}

export default Checklist;