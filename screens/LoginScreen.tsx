import {StyleSheet, Text, View} from "react-native";
import {RootStackScreenProps} from "../types";
import PrimaryButton from "../components/buttons/PrimaryButton";
import SecondaryButton from "../components/buttons/SecondaryButton";
import EmailField from "../components/fields/EmailField";
import PasswordField from "../components/fields/PasswordField";
import HideableKeyboardView from "../components/containers/HideableKeyboardView";


export default function LoginScreen({navigation}: RootStackScreenProps<'Login'>) {

    const login = () => {
        navigation.navigate("Home");
    }

    const signup = () => {
        navigation.navigate("Signup");
    };

    return (
        <HideableKeyboardView>
            <Text style={styles.title}>PencaApp</Text>
            <EmailField title={"Email"} placeholder={"johndoe@mail.com"}/>
            <PasswordField title={"Password"} placeholder={"1234"}/>
            <View style={styles.buttonLayout}>
                <PrimaryButton title={"Login"} onPress={login}/>
                <SecondaryButton title={"Sign Up"} onPress={signup}/>
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