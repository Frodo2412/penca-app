import {StyleSheet, Text, TouchableHighlight} from "react-native";

interface ButtonProps {
    title: string;
    onPress: () => void;
}

export default function PrimaryButton(props: ButtonProps) {
    return (
        <TouchableHighlight style={styles.primaryButtonHighlight} onPress={props.onPress}>
            <Text style={styles.primaryButtonText}>{props.title}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    primaryButtonHighlight: {
        backgroundColor: "#00662d",
        width: 125,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    primaryButtonText: {
        color: "#ffffff",
    }
});