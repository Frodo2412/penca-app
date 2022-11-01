import {StyleSheet, Text, View} from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";
import SecondaryButton from "../components/buttons/SecondaryButton";
import {RootStackScreenProps} from "../types";
import EmailField from "../components/fields/EmailField";
import PasswordField from "../components/fields/PasswordField";
import HideableKeyboardView from "../components/containers/HideableKeyboardView";


export default function SignupScreen({navigation}: RootStackScreenProps<'Signup'>) {

    const login = () => {
        navigation.navigate("Login");
    }

    const signup = () => {
        navigation.navigate("Home");
        console.log("Signup");
    };

    return (
        <HideableKeyboardView>
            <Text style={styles.title}>PencaApp</Text>
            <EmailField title={"Enter Email"} placeholder={"johndoe@mail.com"}/>
            <PasswordField title={"Enter Password"} placeholder={"1234"}/>
            <PasswordField title={"Confirm Password"} placeholder={"1234"}/>
            <View style={styles.buttonLayout}>
                <PrimaryButton title={"Sign Up"} onPress={signup}/>
                <SecondaryButton title={"Login"} onPress={login}/>
            </View>
        </HideableKeyboardView>
    );

}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 30,
    },
    buttonLayout: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between"
    }
})