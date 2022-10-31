import {StyleSheet, TextInput, TextInputProps} from "react-native";

export default function EmailField(props: TextInputProps) {
    return (
        <TextInput style={styles.textField} placeholder={props.placeholder} keyboardType={"email-address"}/>
    );
}

const styles = StyleSheet.create({
    textField: {
        backgroundColor: "#ffffff",
        width: "100%",
        height: 40,
        borderRadius: 50,
        padding: 10,
        marginBottom: 10,
    }
});
