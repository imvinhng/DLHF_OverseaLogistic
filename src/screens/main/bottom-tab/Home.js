import React, { useState } from 'react';
import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import GlobalStyle from '../../../assets/styles/GlobalStyle';
import { useRoute } from '@react-navigation/native';
import { HomeHeader } from '../../../components/Header';
import { darkgray, lightgray, red, tan, white } from '../../../assets/styles/Colors';
import { useSelector } from 'react-redux';
import { HomeBody } from '../../../components/HomeComponents';
import { CONTAINER_REPORT } from '../../../database/ContainerReport';

const Item = ({ order }) => {
    return (
        <View style={[styles.order_item, { backgroundColor: order.color }]}>
            <Image style={[styles.order_c1, { top: itemPadding }]} source={require('../../../assets/images/icons/american-flag.png')} />
            <View style={styles.order_status}>
                <Text style={[
                    styles.text_bold,
                    styles.order_c3,
                    { top: itemPadding },
                ]}>
                    Status:
                </Text>
                <Text style={[
                    styles.text_bgray,
                    styles.order_c4,
                    { top: itemPadding },
                ]}>
                    {order.status}
                </Text>
            </View>
            <View style={styles.order_c1}>
                <Text style={styles.text_bold}>Vessel No.:</Text>
                <Text style={styles.text_bold}>B/L No.:</Text>
                <Text style={styles.text_bold}>Container No.:</Text>
                <Text style={styles.text_bold}>Container Type:</Text>
            </View>
            <View style={styles.order_c2}>
                <Text style={styles.text_regular}>{order.vessel_no}</Text>
                <Text style={styles.text_regular}>{order.bl_no}</Text>
                <Text style={styles.text_regular}>{order.container_no}</Text>
                <Text style={styles.text_regular}>{order.container_type}</Text>
            </View>
            <View style={styles.order_c3}>
                <Text style={styles.text_bold}>ETD:</Text>
                <Text style={styles.text_bold}>ETA:</Text>
                <Text style={styles.text_bold}>CSC (Front):</Text>
                <Text style={styles.text_bold}>CSC (Door):</Text>
            </View>
            <View style={styles.order_c4}>
                <Text style={styles.text_regular}>{order.etd}</Text>
                <Text style={styles.text_regular}>{order.eta}</Text>
                <Text style={styles.text_regular}>{order.csc_front}</Text>
                <Text style={styles.text_regular}>{order.csc_door}</Text>
            </View>
        </View>
    )
}

function Home(props) {
    const route = useRoute();
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={styles.home}>
            {/* <Text style={GlobalStyle.screen_title}>Home</Text> */}
            <HomeHeader modalVisible={modalVisible} />
            <FlatList
                data={CONTAINER_REPORT}
                keyExtractor={item => item.id}
                // numColumns={2}

                renderItem={({ item }) => {
                    return <Item order={item} />
                }}
            />
        </SafeAreaView>
    );
}

export default Home;

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('screen');
const itemWidth = ScreenWidth; const itemHeight = 130;
const itemFontSize = 13;
const itemPadding = 15;

const styles = StyleSheet.create({
    home: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: tan,
        ...GlobalStyle.screen_title,
    },
    order_item: {
        ...GlobalStyle.row_wrapper,
        height: itemHeight,
        width: itemWidth,
        backgroundColor: red,
        borderWidth: 1,
        borderColor: white
    },
    order_status: {
        ...GlobalStyle.row_wrapper,
    },
    order_c1: {
        position: 'absolute',
        left: itemPadding,
        bottom: itemPadding,
    },
    order_c2: {
        position: 'absolute',
        left: itemWidth * 0.3,
        bottom: itemPadding,
    },
    order_c3: {
        position: 'absolute',
        left: itemWidth * 0.6,
        bottom: itemPadding,
    },
    order_c4: {
        position: 'absolute',
        left: itemWidth * 0.8,
        bottom: itemPadding,

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
})