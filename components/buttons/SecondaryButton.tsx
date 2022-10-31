import {StyleSheet, Text, TouchableHighlight} from "react-native";

interface ButtonProps {
    title: string;
    onPress: () => void;
}

export default function SecondaryButton(props: ButtonProps) {
    return (
        <TouchableHighlight style={styles.secondaryButtonHighlight} onPress={props.onPress}>
            <Text>{props.title}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    secondaryButtonHighlight: {
        backgroundColor: "#cbcbcb",
        width: 125,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
});