import React from 'react';
import { HeaderNBack } from '../../../components/Header';
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { darkgray, red, tan, white } from '../../../assets/styles/Colors';
import GlobalStyle from '../../../assets/styles/GlobalStyle';
import { Header4ButtonRadio, RoundButton } from '../../../components/CustomButton';
import { useRoute } from '@react-navigation/native';

function ShipmentDetail(props) {
    const route = useRoute();
    const { Order } = route.params;

    return (
        <View style={styles.home}>
            <HeaderNBack title={'Shipment Detail'} backgroundColor={tan} />
            <ScrollView>
                <View style={styles.description}>
                    <View>
                        <Image
                            source={require('../../../assets/images/icons/american-flag.png')}
                            style={styles.order_r1}
                        />
                        <Text style={styles.text_bold}>Vessel No.:</Text>
                        <Text style={styles.text_bold}>B/L No.:</Text>
                        <Text style={styles.text_bold}>Container No.:</Text>
                        <Text style={styles.text_bold}>Container Type:</Text>
                    </View>
                    <View>
                        <Text style={styles.text_regular}>{Order.vessel_no}</Text>
                        <Text style={styles.text_regular}>{Order.bl_no}</Text>
                        <Text style={styles.text_regular}>{Order.container_no}</Text>
                        <Text style={styles.text_regular}>{Order.container_type}</Text>
                    </View>
                    <View>
                        <Text style={[styles.text_bold, styles.order_r1]}>Status:</Text>
                        <Text style={styles.text_bold}>ETD:</Text>
                        <Text style={styles.text_bold}>ETA:</Text>
                        <Text style={styles.text_bold}>CSC (Front):</Text>
                        <Text style={styles.text_bold}>CSC (Door):</Text>
                    </View>
                    <View>
                        <Text style={[styles.text_bgray, styles.order_r1]}>{Order.status}</Text>
                        <Text style={styles.text_regular}>{Order.etd}</Text>
                        <Text style={styles.text_regular}>{Order.eta}</Text>
                        <Text style={styles.text_regular}>{Order.csc_front}</Text>
                        <Text style={styles.text_regular}>{Order.csc_door}</Text>
                    </View>
                </View>
                <View>
                    <Text>View More</Text>
                    <RoundButton
                        includeIcon
                        iconType='FontAwesome'
                    />
                </View>

                <Header4ButtonRadio
                    option1Text='Status'
                    option2Text='Photo'
                    option3Text='Messages'
                    option4Text='Claims'
                />
                <View />

            </ScrollView>
        </View>
    );
}

export default ShipmentDetail;

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('screen');
const itemWidth = ScreenWidth; const itemHeight = 130;
const itemFontSize = 13;
const itemPadding = 15;

const styles = StyleSheet.create({
    home: {
        // flex: 1,
        backgroundColor: white,
    },
    description: {
        height: itemHeight,
        width: itemWidth,
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingVertical: itemPadding,
        ...GlobalStyle.row_wrapper,
        backgroundColor: 'yellow',
    },
    text_regular: {
        fontSize: itemFontSize,
    },
    text_bold: {
        fontSize: itemFontSize,
        fontWeight: '600',
    },
    text_bgray: {
        fontSize: itemFontSize,
        fontWeight: '700',
        color: darkgray,
    },
    order_r1: {
        position: 'absolute',
        top: -(itemHeight / 2) + itemPadding * 2, // cause of padding
    }
})