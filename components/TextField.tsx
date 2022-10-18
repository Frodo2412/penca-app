import {StyleSheet, TextInput} from "react-native";

interface TextFieldProps {
    placeholder: string;
}

export default function TextField(props: TextFieldProps) {
    return (
        <TextInput style={styles.textField} placeholder={props.placeholder}/>
    );
}

const styles = StyleSheet.create({
    textField: {
        backgroundColor: "#ffffff",
        width: "100%",
        height: 40,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    }
});
