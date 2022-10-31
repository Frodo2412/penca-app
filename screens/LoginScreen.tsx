import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View
} from "react-native";
import TextField from "../components/fields/TextField";
import {RootStackScreenProps} from "../types";
import PrimaryButton from "../components/buttons/PrimaryButton";
import SecondaryButton from "../components/buttons/SecondaryButton";
import EmailField from "../components/fields/EmailField";


export default function LoginScreen({navigation}: RootStackScreenProps<'Login'>) {

    const login = () => {
        navigation.navigate("Home");
    }

    const signup = () => {
        navigation.navigate("Signup");
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={styles.view}>
                    <View style={styles.container}>
                        <Text style={styles.title}>PencaApp</Text>
                        <EmailField placeholder={"johndoe@mail.com"}/>
                        <TextField placeholder={"1234"}/>
                        <View style={styles.buttonLayout}>
                            <PrimaryButton title={"Sign Up"} onPress={login}/>
                            <SecondaryButton title={"Login"} onPress={signup}/>
                        </View>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );

}

const styles = StyleSheet.create({
    view: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 30,
    },
    container: {
        padding: 20,
        width: "80%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#eeeeee",
        borderRadius: 10,
    },
    buttonLayout: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between"
    }
})