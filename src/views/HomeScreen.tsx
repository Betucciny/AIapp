import { RootStackParamList } from "App.tsx";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import StylesHorizontal from "../components/StylesHorizontal";
import { Button, Text, useTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { postOnFacebook } from "@utils/functions";

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Tabs'>;
}

export default function HomeScreen({ navigation }: Props) {
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        },
        text_title: {
            paddingHorizontal: 20,
            paddingVertical: 10,
            fontSize: 25,
            fontWeight: "bold",
            textAlign: "left"
        },
        icon: {
            fontSize: 30,
            fontWeight: "bold",
            color: theme.colors.primary
        },
        text: {
            paddingHorizontal: 20,
            paddingBottom: 10,
            fontSize: 15,
            textAlign: "left"
        }
    })


    return (
        <View>
            <Text style={styles.text_title}>Try different styles <Icon name="heart" style={styles.text_title} color={theme.colors.primary} /></Text>
            <Text style={styles.text}>We've compiled differnet art Styles for you to try, and you can upload your own styles also!</Text>
            <StylesHorizontal />
            <Button mode="contained" onPress={() => postOnFacebook(undefined, undefined)} style={{ margin: 10 }}>
                Prueba
            </Button>
        </View>
    )
}