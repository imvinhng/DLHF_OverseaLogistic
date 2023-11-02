import { StyleSheet, View } from "react-native"
import { white } from "../assets/styles/Colors"
export const Line = (props) => {
    return (
        <View style={[{ width: props.length ?? '100%', height: props.thickness ?? 1, backgroundColor: props.color }, props.style]} />
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