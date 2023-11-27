import React, { useState } from 'react';
import { Dimensions, FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import GlobalStyle, { ScreenWidth } from '../../../assets/styles/GlobalStyle';
import { useNavigation, useRoute } from '@react-navigation/native';
import { HomeHeader } from '../../../components/Header';
import { darkgray, lightgray, red, tan, white } from '../../../assets/styles/Colors';
import { useSelector } from 'react-redux';
import { HomeBody } from '../../../components/HomeComponents';
import { CONTAINER_REPORT } from '../../../database/ContainerReport';
import { Route } from '../../../navigations/Route';
import { Item } from '../../../components/CustomComponents';


function Draft(props) {
    const [data, setData] = useState(CONTAINER_REPORT)
    return (
        <SafeAreaView style={styles.home}>
            <HomeHeader />
            <FlatList
                refreshing={false}
                onRefresh={() => {
                    let newData = []
                    CONTAINER_REPORT.forEach(item => {
                        newData.push(item)
                    });
                    setData(newData)
                }}
                data={data}
                keyExtractor={item => item.id}
                // numColumns={2}

                renderItem={({ item }) => {
                    if (item.status_all[item.status_all.length - 1].status == 'Draft') {
                        return <Item id={item.id} />
                    }
                }}
            />
        </SafeAreaView>
    );
}

export default Draft;

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