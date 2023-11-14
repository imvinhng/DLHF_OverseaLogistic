import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ReportStyleheet, View, Text, SafeAreaView, Dimensions, ScrollView, Image, TextInput } from 'react-native';
import { black, blue, darkgray, green, lightgray, placeholderGray, white, yellow } from '../../assets/styles/Colors';
import GlobalStyle from '../../assets/styles/GlobalStyle';
import { Radio2Button, RoundButton, SquareButton } from '../../components/CustomButton';
import DropDownPicker from 'react-native-dropdown-picker';
import { Line } from '../../components/Line';
import { CUSTOMER_NAME } from '../../database/CustomerList';
import { Route } from '../../navigations/Route';
import ReportStyle from '../../assets/styles/ReportStyle';


export const Temperature = (props) => {
    const [openTemperature, setOpenTemperature] = useState(false);

    return (
        <View>
            <View style={ReportStyle.header_container}>
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
            </View>

            {openTemperature &&
                props.audience == 'sender' &&
                <View>
                    <View style={ReportStyle.temperature_2c}>
                        <View style={ReportStyle.temperature_2c_item}>
                            <Text style={ReportStyle.item_title}>Box Seri Number</Text>
                            <TextInput style={ReportStyle.input} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View>
                        <View style={ReportStyle.temperature_2c_item}>
                            <Text style={ReportStyle.item_title}>Box Temperature</Text>
                            <TextInput style={ReportStyle.input} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View>
                        {/* TODO: Add onPress functionality */}
                        <SquareButton
                            includeIcon
                            iconName={'plus'}
                            iconSize={15}
                            buttonStyle={ReportStyle.temperature_plus}
                        />
                        <View style={ReportStyle.temperature_2c_item}>
                            <Text style={ReportStyle.item_title}>Outside Temperature</Text>
                            <TextInput style={ReportStyle.input} />
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
                            <Text style={ReportStyle.item_title}>Box Temperature</Text>
                            <TextInput style={ReportStyle.input} placeholder={'3.4oC'} editable={false} />
                            <TextInput style={ReportStyle.input} placeholder={'3.4oC'} editable={false} />
                            <TextInput style={ReportStyle.input} placeholder={'3.3oC'} editable={false} />
                        </View>
                        <Line color={placeholderGray} style={ReportStyle.mb5} />
                        <View style={ReportStyle.temperature_2c_item}>
                            <Text style={ReportStyle.item_title}>Outside Temperature</Text>
                            <TextInput style={ReportStyle.input} placeholder={'24.0oC'} editable={false} />
                            <Line color={placeholderGray} style={ReportStyle.mb5} />
                        </View>
                    </View>
                </View>}

        </View>
    )
}

export default Temperature;