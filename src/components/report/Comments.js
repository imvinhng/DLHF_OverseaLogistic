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
import { TouchableOpacity } from 'react-native-gesture-handler';


export const Comments = (props) => {
    const { comments, setComments } = props;
    const [openComments, setOpenComments] = useState(false);

    return (
        <View>
            <TouchableOpacity style={ReportStyle.header_container} onPress={() => setOpenComments(!openComments)}>
                <View style={ReportStyle.header_circle}>
                    <Text style={ReportStyle.header_text}>
                        5
                    </Text>
                </View>
                <Text style={ReportStyle.header_text}>COMMENTS</Text>
                <RoundButton
                    includeIcon
                    iconType='FontAwesome5'
                    iconName={'chevron-down'}
                    iconSize={15}
                    buttonStyle={ReportStyle.header_down}
                    onPress={() => setOpenComments(!openComments)}
                />
            </TouchableOpacity>

            {openComments &&
                props.audience == 'sender' &&
                <View>
                    <View style={ReportStyle.item}>
                        <Text style={ReportStyle.item_title}>Any comments?</Text>
                        <TextInput style={ReportStyle.input} value={comments} onChangeText={(text) => setComments(text)} />
                        <Line color={placeholderGray} style={ReportStyle.mb5} />
                    </View>
                </View>}
            {openComments &&
                props.audience == 'receiver' &&
                <View>
                    <View style={ReportStyle.item}>
                        <Text style={ReportStyle.item_title}>Any comments?</Text>
                        <TextInput style={ReportStyle.input} editable={false} />
                        <Line color={placeholderGray} style={ReportStyle.mb5} />
                    </View>
                </View>}
        </View>
    )
}

export default Comments;