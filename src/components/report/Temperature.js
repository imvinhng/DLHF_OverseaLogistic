import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ReportStyleheet, View, Text, SafeAreaView, Dimensions, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { black, blue, darkgray, green, lightgray, placeholderGray, white, yellow } from '../../assets/styles/Colors';
import GlobalStyle from '../../assets/styles/GlobalStyle';
import { Radio2Button, RoundButton, SquareButton } from '../../components/CustomButton';
import DropDownPicker from 'react-native-dropdown-picker';
import { Line } from '../../components/Line';
import { CUSTOMER_NAME } from '../../database/CustomerList';
import { Route } from '../../navigations/Route';
import ReportStyle from '../../assets/styles/ReportStyle';


export const Temperature = (props) => {
    const { temperature, setTemperature } = props;

    const [openTemperature, setOpenTemperature] = useState(false);
    const [numLines, setNumLines] = useState(1);

    const [boxSeriNumber, setBoxSeriNumber] = useState(temperature.box_seri_no);
    const [boxTemp, setBoxTemp] = useState(temperature.box_temp);
    // const [outsideTemp, setOutsideTemp] = useState('');


    const populateBSNLine = () => {
        return <>{Array(numLines).fill(<TextInput style={ReportStyle.input} />)}</>

        // TODO: Get this to update to Main Page
        // const list = [];
        // for (let index = 0; index < numLines; index++) {
        //     list[index] =
        //         <TextInput
        //             style={ReportStyle.input}
        //             value={boxSeriNumber[index]}
        //             onChangeText={(text) => {
        //                 setBoxSeriNumber({ ...boxSeriNumber, boxSeriNumber: text })
        //                 setTemperature({ ...temperature, box_seri_no: boxSeriNumber })
        //                 console.log(boxSeriNumber)
        //             }} />;
        // }
        // return list;

    }
    const populateBTLine = () => {
        return <>{Array(numLines).fill(<TextInput style={ReportStyle.input} />)}</>

        // TODO: Get this to update to Main Page
        // const list = [];
        // for (let index = 0; index < numLines; index++) {
        //     list[index] =
        //         <TextInput
        //             style={ReportStyle.input}
        //             value={boxTemp[index]}
        //             onChangeText={(text) => {
        //                 setBoxTemp({ ...boxTemp, text })
        //                 setTemperature({ ...temperature, box_temp: boxTemp })
        //                 console.log(boxTemp)
        //             }} />;
        // }
        // return list;
    }

    return (
        <View>
            <TouchableOpacity style={ReportStyle.header_container} onPress={() => setOpenTemperature(!openTemperature)}>
                <View style={ReportStyle.header_circle}>
                    <Text style={ReportStyle.header_text}>
                        1
                    </Text>
                </View>
                <Text style={ReportStyle.header_text}>TEMPERATURE</Text>
                <RoundButton
                    includeIcon
                    iconType='FontAwesome5'
                    iconName={'chevron-down'}
                    iconSize={15}
                    buttonStyle={ReportStyle.header_down}
                    onPress={() => setOpenTemperature(!openTemperature)}
                />
            </TouchableOpacity>

            {openTemperature &&
                props.audience == 'sender' &&
                <View>
                    <View style={ReportStyle.temperature_2c}>
                        <View style={ReportStyle.temperature_2c_item}>
                            <Text style={ReportStyle.item_title}>Box Seri Number</Text>
                            {populateBSNLine()}
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View>
                        <View style={ReportStyle.temperature_2c_item}>
                            <Text style={ReportStyle.item_title}>Box Temp. (°C)</Text>
                            {populateBTLine()}
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View>
                        <SquareButton
                            includeIcon
                            iconName={'plus'}
                            iconSize={15}
                            buttonStyle={ReportStyle.temperature_plus}
                            onPress={() => {
                                setNumLines(numLines + 1)
                            }}
                        />
                        <SquareButton
                            includeIcon
                            iconName={'minus'}
                            iconSize={15}
                            buttonStyle={ReportStyle.temperature_minus}
                            onPress={() => {
                                if (numLines > 1) {
                                    setNumLines(numLines - 1)
                                }
                                console.log(numLines)
                            }}
                        />
                        <View style={ReportStyle.temperature_2c_item}>
                            <Text style={ReportStyle.item_title}>Outside Temperature (°C)</Text>
                            <TextInput
                                style={ReportStyle.input}
                                value={temperature.outside_temp}
                                onChangeText={(text) => setTemperature({ ...temperature, outside_temp: text })} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View>
                    </View>
                </View>}
            {openTemperature &&
                props.audience == 'receiver' &&
                <View>
                    <View style={ReportStyle.temperature_2c}>
                        <View style={ReportStyle.temperature_2c_item}>
                            <Text style={ReportStyle.item_title}>Box Seri Number</Text>
                            <TextInput style={ReportStyle.input} placeholder={'25.6'} editable={false} />
                            <TextInput style={ReportStyle.input} placeholder={'63.8'} editable={false} />
                            <TextInput style={ReportStyle.input} placeholder={'27.6'} editable={false} />
                        </View>
                        <View style={ReportStyle.temperature_2c_item}>
                            <Text style={ReportStyle.item_title}>Box Temp. (°C)</Text>
                            <TextInput style={ReportStyle.input} placeholder={'3.4oC'} editable={false} />
                            <TextInput style={ReportStyle.input} placeholder={'3.4oC'} editable={false} />
                            <TextInput style={ReportStyle.input} placeholder={'3.3oC'} editable={false} />
                        </View>
                        <Line color={placeholderGray} style={ReportStyle.mb5} />
                        <View style={ReportStyle.temperature_2c_item}>
                            <Text style={ReportStyle.item_title}>Outside Temp. (°C)</Text>
                            <TextInput style={ReportStyle.input} placeholder={'24.0oC'} editable={false} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View>
                    </View>
                </View>}

        </View>
    )
}

export default Temperature;