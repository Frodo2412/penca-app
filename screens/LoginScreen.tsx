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
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import TextField from "../components/TextField";
import {RootStackScreenProps} from "../types";


export default function LoginScreen({navigation}: RootStackScreenProps<'Login'>) {

    const login = () => {
        console.log("Login");
        navigation.navigate("Home");
    }

    const signup = () => {
        console.log("Signup");
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={styles.view}>
                    <View style={styles.container}>
                        <Text style={styles.title}>PencaApp</Text>
                        <TextField placeholder={"johndoe@mail.com"}/>
                        <TextField placeholder={"1234"}/>
                        <View style={styles.buttonLayout}>
                            <PrimaryButton title={"Login"} onPress={login}/>
                            <SecondaryButton title={"Sign Up"} onPress={signup}/>
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