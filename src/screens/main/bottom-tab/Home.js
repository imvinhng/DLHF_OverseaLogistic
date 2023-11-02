import React, { useState } from 'react';
import { Dimensions, FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import GlobalStyle from '../../../assets/styles/GlobalStyle';
import { useNavigation, useRoute } from '@react-navigation/native';
import { HomeHeader } from '../../../components/Header';
import { darkgray, lightgray, red, tan, white } from '../../../assets/styles/Colors';
import { useSelector } from 'react-redux';
import { HomeBody } from '../../../components/HomeComponents';
import { CONTAINER_REPORT } from '../../../database/ContainerReport';
import { Route } from '../../../navigations/Route';

const Item = ({ order }) => {
    const navigation = useNavigation();
    return (
        <Pressable
            style={[
                styles.order_item,
                { backgroundColor: order.color }
            ]}
            onPress={() => { navigation.navigate(Route.Main.BottomTab.Home.SHIPMENT_DETAIL_SCREEN, { Order: order }) }}
        >
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
                <Text style={styles.text_regular}>{order.vessel_no}</Text>
                <Text style={styles.text_regular}>{order.bl_no}</Text>
                <Text style={styles.text_regular}>{order.container_no}</Text>
                <Text style={styles.text_regular}>{order.container_type}</Text>
            </View>
            <View>
                <Text style={[styles.text_bold, styles.order_r1]}>Status:</Text>
                <Text style={styles.text_bold}>ETD:</Text>
                <Text style={styles.text_bold}>ETA:</Text>
                <Text style={styles.text_bold}>CSC (Front):</Text>
                <Text style={styles.text_bold}>CSC (Door):</Text>
            </View>
            <View>
                <Text style={[styles.text_bgray, styles.order_r1]}>{order.status.latest}</Text>
                <Text style={styles.text_regular}>{order.etd}</Text>
                <Text style={styles.text_regular}>{order.eta}</Text>
                <Text style={styles.text_regular}>{order.csc_front}</Text>
                <Text style={styles.text_regular}>{order.csc_door}</Text>
            </View>
        </Pressable>
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
        height: itemHeight,
        width: itemWidth,
        backgroundColor: red,
        borderWidth: 1,
        borderColor: white,
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingVertical: itemPadding,
        ...GlobalStyle.row_wrapper,
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