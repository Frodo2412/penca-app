import {StyleSheet, Text, TextInput, View} from "react-native";

export interface TextFieldProps {
    title: string;
    placeholder: string;
}

export default function TextField(props: TextFieldProps) {
    return (
        <View>
            <Text style={textFieldStyles.label}>{props.title}</Text>
            <TextInput style={textFieldStyles.textField} placeholder={props.placeholder}/>
        </View>
    );
}

export const textFieldStyles = StyleSheet.create({
    container: {
        width: 200,
    },
    textField: {
        backgroundColor: "#ffffff",
        width: "100%",
        height: 40,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    label: {
        color: "#262626",
        fontSize: 12,
        paddingLeft: 5,
    }
});
