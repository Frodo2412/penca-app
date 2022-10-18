import {Button, SafeAreaView, Text} from "react-native";
import {RootStackScreenProps} from "../types";

export default function HomeScreen({navigation}: RootStackScreenProps<'Home'>) {
    return (
        <SafeAreaView>
            <Text>Home Screen</Text>
            <Button title={"Logout"} onPress={() => navigation.navigate("Login")}/>
        </SafeAreaView>
    )
}