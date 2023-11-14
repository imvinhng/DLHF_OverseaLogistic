import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ReportStyleheet, View, Text, SafeAreaView, Dimensions, ScrollView, Image, TextInput } from 'react-native';
import { backgroundGray, black, blue, darkgray, green, lightgray, placeholderGray, white, yellow } from '../../assets/styles/Colors';
import GlobalStyle from '../../assets/styles/GlobalStyle';
import { Radio2Button, RoundButton, SquareButton } from '../../components/CustomButton';
import DropDownPicker from 'react-native-dropdown-picker';
import { Line } from '../../components/Line';
import { CUSTOMER_NAME } from '../../database/CustomerList';
import { Route } from '../../navigations/Route';
import { CONTAINER_TYPE_OPTIONS, WEATHER_OPTIONS } from '../../database/Options';
import ReportStyle, { HEADER_PADDING } from '../../assets/styles/ReportStyle';
import { useSelector } from 'react-redux';
import { USERS } from '../../database/Credentials';

const findUserNameByPhone = (phone) => {
    const database = USERS;
    for (let i = 0; i < USERS.length; i++) {
        if (database[i].phone_number == phone) {
            return database[i].name;
        }

    }
}

const CRGI = (props) => {
    const { phone_number } = useSelector(state => state.userReducer);
    const userName = findUserNameByPhone(phone_number);

    const [openCRGI, setOpenCRGI] = useState(false);
    const [openWeather, setOpenWeather] = useState(false);
    const [valueWeather, setValueWeather] = useState(false);
    const [openContainerType, setOpenContainerType] = useState(false);
    const [valueContainerType, setValueContainerType] = useState(false);
    return (
        <View>

            <View style={ReportStyle.header_container}>
                <Text style={[
                    ReportStyle.header_text,
                    { paddingLeft: HEADER_PADDING }
                ]}>
                    CONTAINER REPORT GENERAL INFO.
                </Text>
                <RoundButton
                    includeIcon
                    iconType='FontAwesome5'
                    iconName={'chevron-down'}
                    iconSize={15}
                    buttonStyle={ReportStyle.header_down}
                    onPress={() => setOpenCRGI(!openCRGI)}
                />
            </View>

            {openCRGI &&
                props.audience == 'sender' &&
                <View>
                    <View style={[ReportStyle.CRGI_3c, { zIndex: 99 }]}>
                        <View style={ReportStyle.CRGI_3c_item}>
                            <Text style={ReportStyle.item_title}>Date:</Text>
                            <TextInput style={ReportStyle.input} value={'20 Sep. 2023'} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View>
                        <View style={ReportStyle.CRGI_3c_item}>
                            <Text style={ReportStyle.item_title}>Weather:</Text>
                            <DropDownPicker
                                style={ReportStyle.dropdown}
                                textStyle={ReportStyle.dropdown_text}
                                open={openWeather}
                                value={valueWeather}
                                items={WEATHER_OPTIONS}
                                // key={CUSTOMER_NAME.labels}
                                setOpen={setOpenWeather}
                                setValue={setValueWeather}
                                placeholder={'Select.'}
                                listMode='SCROLLVIEW'
                                containerProps={[ReportStyle.dropdown, { paddingLeft: 0 }]}
                            // dropDownContainerStyle={ReportStyle.cname_dropdown}
                            />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View>
                        <View style={ReportStyle.CRGI_3c_item}>
                            <Text style={ReportStyle.item_title}>Reported by:</Text>
                            <TextInput style={ReportStyle.input} placeholder={userName} editable={false} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View>
                    </View>

                    <View style={ReportStyle.CRGI_2c}>
                        <View style={ReportStyle.CRGI_2c_item}>
                            <Text style={ReportStyle.item_title}>Vessel No.</Text>
                            <TextInput style={ReportStyle.input} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />

                            <Text style={ReportStyle.item_title}>B/L No.</Text>
                            <TextInput style={ReportStyle.input} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />

                            <Text style={ReportStyle.item_title}>Container No.</Text>
                            <TextInput style={ReportStyle.input} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />

                            <Text style={ReportStyle.item_title}>Container Type</Text>
                            <DropDownPicker
                                style={ReportStyle.dropdown}
                                textStyle={ReportStyle.dropdown_text}
                                open={openContainerType}
                                value={valueContainerType}
                                items={CONTAINER_TYPE_OPTIONS}
                                // key={CUSTOMER_NAME.labels}
                                setOpen={setOpenContainerType}
                                setValue={setValueContainerType}
                                placeholder={'Select container type'}
                                listMode='SCROLLVIEW'
                                containerProps={[ReportStyle.dropdown, { paddingLeft: 0 }]}
                            // dropDownContainerStyle={ReportStyle.cname_dropdown}
                            />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View >
                        <View style={ReportStyle.CRGI_2c_item}>
                            <Text style={ReportStyle.item_title}>ETD</Text>
                            <TextInput style={ReportStyle.input} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />

                            <Text style={ReportStyle.item_title}>ETA</Text>
                            <TextInput style={ReportStyle.input} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />

                            <Text style={ReportStyle.item_title}>CSC (Front)</Text>
                            <TextInput style={ReportStyle.input} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />

                            <Text style={ReportStyle.item_title}>CSC (Door)</Text>
                            <TextInput style={ReportStyle.input} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View>

                    </View>

                </View>}
            {openCRGI &&
                props.audience == 'receiver' &&
                <View>
                    <View style={ReportStyle.CRGI_3c}>
                        <View style={ReportStyle.CRGI_3c_item}>
                            <Text style={ReportStyle.item_title}>Date:</Text>
                            <TextInput style={ReportStyle.input} placeholder={'20 Sep. 2023'} editable={false} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View>
                        <View style={ReportStyle.CRGI_3c_item}>
                            <Text style={ReportStyle.item_title}>Weather:</Text>
                            <TextInput style={ReportStyle.input} placeholder={'Cloudy'} editable={false} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View>
                        <View style={ReportStyle.CRGI_3c_item}>
                            <Text style={ReportStyle.item_title}>Reported by:</Text>
                            <TextInput style={ReportStyle.input} placeholder={'Duong'} editable={false} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View>
                    </View>

                    <View style={ReportStyle.CRGI_2c}>
                        <View style={ReportStyle.CRGI_2c_item}>
                            <Text style={ReportStyle.item_title}>Vessel No.</Text>
                            <TextInput style={ReportStyle.input} placeholder={'LORRAINE 015N'} editable={false} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />

                            <Text style={ReportStyle.item_title}>B/L No.</Text>
                            <TextInput style={ReportStyle.input} placeholder={'341310097428'} editable={false} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />

                            <Text style={ReportStyle.item_title}>Container No.</Text>
                            <TextInput style={ReportStyle.input} placeholder={'SEGU9790245'} editable={false} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />

                            <Text style={ReportStyle.item_title}>Container Type</Text>
                            <TextInput style={ReportStyle.input} placeholder={'40FT'} editable={false} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View >
                        <View style={ReportStyle.CRGI_2c_item}>
                            <Text style={ReportStyle.item_title}>ETD</Text>
                            <TextInput style={ReportStyle.input} placeholder={'23 Sept (Sat)'} editable={false} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />

                            <Text style={ReportStyle.item_title}>ETA</Text>
                            <TextInput style={ReportStyle.input} placeholder={'1 Oct (Sun)'} editable={false} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />

                            <Text style={ReportStyle.item_title}>CSC (Front)</Text>
                            <TextInput style={ReportStyle.input} placeholder={'10/2019'} editable={false} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />

                            <Text style={ReportStyle.item_title}>CSC (Door)</Text>
                            <TextInput style={ReportStyle.input} placeholder={'10/2019'} editable={false} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View>

                    </View>

                </View>}
        </View>

    )
}

export default CRGI;


