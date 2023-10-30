import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Dimensions } from 'react-native';
import { SquareButton, RoundButton } from './CustomButton';
import { backgroundGray, white } from '../assets/styles/Colors';
import GlobalStyle from '../assets/styles/GlobalStyle';

function SearchBar(props) {

    return (
        <View style={[styles.searchbarContainer, props.containerStyle]}>
            <SquareButton
                iconName='search'
                iconSize={15}
                buttonStyle={[styles.searchbar_icon, props.searchIconStyle]}
            />
            <TextInput
                style={[styles.searchbar, props.searchInputStyle]}
                placeholder={props.searchPlaceholder}
                value={props.searchPhrase}
                onChangeText={props.setSearchPhrase}
            />
        </View>
    );
}

export default SearchBar;

const { width: screenWidth } = Dimensions.get('screen');
const searchbarWidth = .60 * screenWidth;
const searchbarHeight = 50;

const styles = StyleSheet.create({
    searchbarContainer: {
        ...GlobalStyle.box_shadow,
        ...GlobalStyle.row_wrapper,
    },
    searchbar: {
        backgroundColor: white,
        width: searchbarWidth,
        height: searchbarHeight,
        borderRadius: 10,
        padding: 15,
        // position: 'absolute',
        marginLeft: -0.33 * searchbarHeight,
    },
    searchbar_icon: {
        backgroundColor: white,
        width: searchbarHeight,
        height: searchbarHeight,
    },
    close_btn: {
        height: 10,
        width: 10,
    },
})