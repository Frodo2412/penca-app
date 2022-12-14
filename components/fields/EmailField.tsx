import {Text, TextInput, View} from "react-native";
import {TextFieldProps, textFieldStyles} from "./TextField";

export default function EmailField(props: TextFieldProps) {
    return (
        <View style={textFieldStyles.container}>
            <Text style={textFieldStyles.label}>{props.title}</Text>
            <TextInput style={textFieldStyles.textField} placeholder={props.placeholder}
                       keyboardType={"email-address"}/>
        </View>
    );
}
