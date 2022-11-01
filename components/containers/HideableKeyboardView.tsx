import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    TouchableWithoutFeedback,
    View
} from "react-native";

interface HideableKeyboardProps {
    children: React.ReactNode;
}

export default function HideableKeyboardView({children}: HideableKeyboardProps) {

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={styles.view}>
                    <View style={styles.container}>
                        {children}
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
    container: {
        padding: 20,
        width: "80%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#eeeeee",
        borderRadius: 10,
    },
})
