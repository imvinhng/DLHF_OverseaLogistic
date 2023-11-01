import { StyleSheet, View } from "react-native"
import { white } from "../assets/styles/Colors"
export const BlackLine = (props) => {
    return (
        <View style={[{ width: '90%', height: 0.7, backgroundColor: '#000' }, props.style]} />
    )
}
export const OrangeLine = (props) => {
    return (
        <View style={[{ width: '90%', height: 1, backgroundColor: '#F58831' }, props.style]} />
    )
}
export const BlackLine_Full = (props) => {
    return (
        <View style={[{ width: '100%', height: 0.7, backgroundColor: '#000' }, props.style]} />
    )
}
export const OrangeLine_Full = (props) => {
    return (
        <View style={[{ width: '100%', height: 1, backgroundColor: '#F58831' }, props.style]} />
    )
}
export const GrayLine_Full = (props) => {
    return (
        <View style={[{ width: '100%', height: 1, backgroundColor: 'lightgray' }, props.style]} />
    )
}
export const GrayLine_Half = (props) => {
    return (
        <View style={[{ width: '50%', height: 1, backgroundColor: 'lightgray' }, props.style]} />
    )
}

export const GrayLine_Full_Thick = (props) => {
    return (
        <View style={[{ width: '100%', height: 3, backgroundColor: 'lightgray' }, props.style]} />
    )
}
export const WhiteLine_Full_Thick = (props) => {
    return (
        <View style={[{ width: '100%', height: 6, backgroundColor: white }, props.style]} />
    )
}

export const Triangle = (props) => {
    return (
        <View style={[styles.triangle, props.style]} />
    )
}




const styles = StyleSheet.create({
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 20,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "red",
    },
})