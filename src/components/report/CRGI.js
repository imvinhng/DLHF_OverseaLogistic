import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ReportStyleheet, View, Text, SafeAreaView, Dimensions, ScrollView, Image, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { backgroundGray, black, blue, darkgray, green, lightgray, placeholderGray, white, yellow } from '../../assets/styles/Colors';
import GlobalStyle from '../../assets/styles/GlobalStyle';
import { LongButton, Radio2Button, RoundButton, SquareButton } from '../../components/CustomButton';
import DropDownPicker from 'react-native-dropdown-picker';
import { Line } from '../../components/Line';
import { CUSTOMER_NAME } from '../../database/CustomerList';
import { Route } from '../../navigations/Route';
import { CONTAINER_TYPE_OPTIONS, WEATHER_OPTIONS } from '../../database/Options';
import ReportStyle, { HEADER_PADDING } from '../../assets/styles/ReportStyle';
import { useDispatch, useSelector } from 'react-redux';
import { USERS } from '../../database/Credentials';
import DatePicker from 'react-native-date-picker';
import { CONTAINER_REPORT } from '../../database/ContainerReport';

const findUserNameByPhone = (phone) => {
    const database = USERS;
    for (let i = 0; i < USERS.length; i++) {
        if (database[i].username == phone) {
            return database[i].name;
        }

    }
}

// export let valueDate = new Date();
// export let valueWeather = false;
// export let valueVesselNo = '';
// export let valueBLNo = '';
// export let valueContainerNo = '';
// export let valueContainerType = false;
// export let valueETD = new Date();
// export let valueETA = new Date();
// export let valueCSCFront = new Date();
// export let valueCSCDoor = new Date();

const CRGI = (props) => {
    const { crgi, setCrgi } = props;
    const { username } = useSelector(state => state.userReducer);

    const userName = findUserNameByPhone(username);

    const [openCRGI, setOpenCRGI] = useState(false);
    const [openDate, setOpenDate] = useState(false);
    const [openWeather, setOpenWeather] = useState(false);
    const [openETD, setOpenETD] = useState(false);
    const [openETA, setOpenETA] = useState(false);
    const [openCSCDoor, setOpenCSCDoor] = useState(false);
    const [openCSCFront, setOpenCSCFront] = useState(false);
    const [openContainerType, setOpenContainerType] = useState(false);

    const [valueDate, setValueDate] = useState(new Date());
    const [valueWeather, setValueWeather] = useState(crgi.weather);
    const [valueVesselNo, setValueVesselNo] = useState('');
    const [valueBLNo, setValueBLNo] = useState('');
    const [valueContainerNo, setValueContainerNo] = useState('');
    const [valueContainerType, setValueContainerType] = useState(crgi.container_type);
    const [valueETD, setValueETD] = useState(new Date());
    const [valueETA, setValueETA] = useState(new Date());
    const [valueCSCFront, setValueCSCFront] = useState(new Date());
    const [valueCSCDoor, setValueCSCDoor] = useState(new Date());

    const [valueDateString, setValueDateString] = useState(crgi.date ? crgi.date : '');
    const [valueETDString, setValueETDString] = useState(crgi.etd ? crgi.etd : '');
    const [valueETAString, setValueETAString] = useState(crgi.eta ? crgi.eta : '');
    const [valueCSCFrontString, setValueCSCFrontString] = useState(crgi.csc_front ? crgi.csc_front : '');
    const [valueCSCDoorString, setValueCSCDoorString] = useState(crgi.csc_door ? crgi.csc_door : '');

    // let valueDateString = '';
    // let valueETDString = '';
    // let valueETAString = '';
    // let valueCSCFrontString = '';
    // let valueCSCDoorString = '';


    return (
        <TouchableOpacity style={{ zIndex: 99 }} onPress={() => setOpenCRGI(!openCRGI)}>

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
                            <Pressable style={ReportStyle.input} onPress={() => setOpenDate(true)}>
                                <Text style={ReportStyle.input_txt}>{valueDateString}</Text>
                            </Pressable>
                            <Line color={placeholderGray} style={ReportStyle.mb5} />

                            <DatePicker
                                modal
                                locale={'vi'}
                                mode={'date'}
                                title={'Select date'}
                                open={openDate}
                                date={valueDate}
                                onConfirm={(date) => {
                                    setOpenDate(false)
                                    setValueDate(date)

                                    const [DOTW, month, day, year] = date.toDateString().split(' ')
                                    setValueDateString(`${day} ${month} ${year}`)

                                    setCrgi({ ...crgi, date: `${day} ${month} ${year}` })

                                }}
                                onCancel={() => {
                                    setOpenDate(false)
                                }}
                            />
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
                                onChangeValue={(value) => {
                                    setCrgi({ ...crgi, weather: value })
                                    // console.log('====================================');
                                    // console.log('current val: ', value)
                                    // console.log('weather value set', value)
                                    // console.log('weather crgi set', crgi.weather)
                                    // console.log('====================================');

                                }}
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
                            {/* BEWARE: setCrgi might not exist in outside of NewShipment, so calling the fn might break the program!!! */}
                            <TextInput style={ReportStyle.input} value={crgi.vessel_no} onChangeText={(text) => setCrgi({ ...crgi, vessel_no: text })} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />

                            <Text style={ReportStyle.item_title}>B/L No.</Text>
                            <TextInput style={ReportStyle.input} value={crgi.bl_no} onChangeText={(text) => setCrgi({ ...crgi, bl_no: text })} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />

                            <Text style={ReportStyle.item_title}>Container No.</Text>
                            <TextInput style={ReportStyle.input} value={crgi.container_no} onChangeText={(text) => setCrgi({ ...crgi, container_no: text })} />
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
                                placeholder={'Select type'}
                                listMode='SCROLLVIEW'
                                containerProps={[ReportStyle.dropdown, { paddingLeft: 0 }]}
                                onChangeValue={(value) => setCrgi({ ...crgi, container_type: value })}
                            // dropDownContainerStyle={ReportStyle.cname_dropdown}
                            />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View >
                        <View style={ReportStyle.CRGI_2c_item}>
                            <Text style={ReportStyle.item_title}>ETD</Text>
                            <Pressable style={ReportStyle.input} onPress={() => setOpenETD(true)}>
                                <Text style={ReportStyle.input_txt}>{valueETDString}</Text>
                            </Pressable>
                            <Line color={placeholderGray} style={ReportStyle.mb5} />

                            <DatePicker
                                modal
                                locale={'vi'}
                                mode={'date'}
                                title={'Select date'}
                                open={openETD}
                                date={valueETD}
                                onConfirm={(date) => {
                                    setOpenETD(false)
                                    setValueETD(date)

                                    const [DOTW, month, day, year] = date.toDateString().split(' ')
                                    setValueETDString(`${month} ${day} (${DOTW})`)

                                    setCrgi({ ...crgi, etd: `${month} ${day} (${DOTW})` })
                                }}
                                onCancel={() => {
                                    setOpenETD(false)
                                }}
                            />

                            <Text style={ReportStyle.item_title}>ETA</Text>
                            <Pressable style={ReportStyle.input} onPress={() => setOpenETA(true)}>
                                <Text style={ReportStyle.input_txt}>{valueETAString}</Text>
                            </Pressable>
                            <Line color={placeholderGray} style={ReportStyle.mb5} />

                            <DatePicker
                                modal
                                locale={'vi'}
                                mode={'date'}
                                title={'Select date'}
                                open={openETA}
                                date={valueETA}
                                onConfirm={(date) => {
                                    setOpenETA(false)
                                    setValueETA(date)
                                    const [DOTW, month, day, year] = date.toDateString().split(' ')
                                    setValueETAString(`${month} ${day} (${DOTW})`)

                                    setCrgi({ ...crgi, eta: `${month} ${day} (${DOTW})` })
                                }}
                                onCancel={() => {
                                    setOpenETA(false)
                                }}
                            />

                            <Text style={ReportStyle.item_title}>CSC (Front)</Text>
                            <Pressable style={ReportStyle.input} onPress={() => setOpenCSCFront(true)}>
                                <Text style={ReportStyle.input_txt}>{valueCSCFrontString}</Text>
                            </Pressable>
                            <Line color={placeholderGray} style={ReportStyle.mb5} />

                            <DatePicker
                                modal
                                locale={'vi'}
                                mode={'date'}
                                title={'Select date'}
                                open={openCSCFront}
                                date={valueCSCFront}
                                onConfirm={(date) => {
                                    setOpenCSCFront(false)
                                    setValueCSCFront(date)

                                    const [day, month, year] = date.toLocaleDateString('vi').split('/')
                                    setValueCSCFrontString(`${month}/${year}`)

                                    setCrgi({ ...crgi, csc_front: `${month}/${year}` })
                                }}
                                onCancel={() => {
                                    setOpenCSCFront(false)
                                }}
                            />

                            <Text style={ReportStyle.item_title}>CSC (Door)</Text>
                            <Pressable style={ReportStyle.input} onPress={() => setOpenCSCDoor(true)}>
                                <Text style={ReportStyle.input_txt}>{valueCSCDoorString}</Text>
                            </Pressable>
                            <Line color={placeholderGray} style={ReportStyle.mb5} />

                            <DatePicker
                                modal
                                locale={'vi'}
                                mode={'date'}
                                title={'Select date'}
                                open={openCSCDoor}
                                date={valueCSCDoor}
                                onConfirm={(date) => {
                                    setOpenCSCDoor(false)
                                    setValueCSCDoor(date)
                                    const [day, month, year] = date.toLocaleDateString('vi').split('/')
                                    setValueCSCDoorString(`${month}/${year}`)

                                    setCrgi({ ...crgi, csc_door: `${month}/${year}` })
                                }}
                                onCancel={() => {
                                    setOpenCSCDoor(false)
                                }}
                            />
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
        </TouchableOpacity>

    )
}

export default CRGI;


