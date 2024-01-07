import { RootStackParamList } from "App.tsx";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import Gallery from "../components/Gallery";
import { Button, Text, useTheme } from "react-native-paper";

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Tabs'>;
}

export default function StylesSreen({ navigation }: Props) {
    const theme = useTheme();
    const styles = StyleSheet.create({
        title: {
            fontSize: 30,
            color: theme.colors.primary,
            margin: 20,
        },
        button: {
            margin: 10,

        },

    });
    return (
        <Gallery navigation={navigation} />
    )
}