import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, Modal, Image, SafeAreaView, Dimensions } from 'react-native';
import { LongButton } from '../../../utils/CustomButton';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { white, yellow } from '../../../assets/styles/Colors';
import GlobalStyle from '../../../assets/styles/GlobalStyle';
import { RoundButton } from '../../../components/CustomButton';

function NewOrder(props) {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.home}>
            <SafeAreaView>
                <View style={styles.header_container}>
                    <Text style={[
                        styles.header_text,
                        { paddingLeft: HEADER_PADDING }
                    ]}>
                        CONTAINER REPORT GENERAL INFO.
                    </Text>
                    <RoundButton iconName={'chevron-down'} iconSize={15} buttonStyle={styles.header_down} />
                </View>
                <View style={styles.header_container}>
                    <View style={styles.header_circle}>
                        <Text style={styles.header_text}>
                            1
                        </Text>
                    </View>
                    <Text style={styles.header_text}>TEMPERATURE</Text>
                    <RoundButton iconName={'chevron-down'} iconSize={15} buttonStyle={styles.header_down} />
                </View>
                <View style={styles.header_container}>
                    <View style={styles.header_circle}>
                        <Text style={styles.header_text}>
                            2
                        </Text>
                    </View>
                    <Text style={styles.header_text}>CONTAINER TEMPERATURE</Text>
                    <RoundButton iconName={'chevron-down'} iconSize={15} buttonStyle={styles.header_down} />
                </View>
                <View style={styles.header_container}>
                    <View style={styles.header_circle}>
                        <Text style={styles.header_text}>
                            3
                        </Text>
                    </View>
                    <Text style={styles.header_text}>TIME</Text>
                    <RoundButton iconName={'chevron-down'} iconSize={15} buttonStyle={styles.header_down} />
                </View>
                <View style={styles.header_container}>
                    <View style={styles.header_circle}>
                        <Text style={styles.header_text}>
                            4
                        </Text>
                    </View>
                    <Text style={styles.header_text}>CHECKLIST</Text>
                    <RoundButton iconName={'chevron-down'} iconSize={15} buttonStyle={styles.header_down} />
                </View>
                <View style={styles.header_container}>
                    <View style={styles.header_circle}>
                        <Text style={styles.header_text}>
                            5
                        </Text>
                    </View>
                    <Text style={styles.header_text}>COMMENTS</Text>
                    <RoundButton iconName={'chevron-down'} iconSize={15} buttonStyle={styles.header_down} />
                </View>
            </SafeAreaView>
        </ScrollView>

    );
}

export default NewOrder;

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('screen');

const HEADER_WIDTH = ScreenWidth;
const HEADER_HEIGHT = ScreenHeight / 20;
const HEADER_CIRCLE_WIDTH = HEADER_HEIGHT / 2;
const HEADER_CIRCLE_HEIGHT = HEADER_HEIGHT / 2;
const HEADER_MARGIN = 10;
const HEADER_PADDING = 20;

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
    header_text: {
        fontWeight: '600',
    },
    header_down: {
        position: 'absolute',
        right: 0,
    },
})