import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../App.tsx"
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AntDesign from 'react-native-vector-icons/AntDesign.js';

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}

export default function SplashScreen({ navigation }: Props) {
    return (
        <View style={styles.container_global}>
            <View style={styles.sub_container}>
                <Image
                    source={require('../../assets/logo.png')}
                    style={styles.logo_image}
                />
            </View>
            <View style={styles.sub_container}>
                <Text style={styles.tittle_text}>
                    Artify
                </Text>
                <Text style={styles.description_text}>
                    Apply Artistic Styles
                </Text>
            </View>
            <View style={styles.sub_container}>
                <Pressable
                    onPress={() => navigation.navigate('Home')}
                    style={styles.button}
                >
                    <AntDesign name="arrowright" size={40} color="#fff"/>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container_global: {
        flex: 1,
        backgroundColor: "black",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    sub_container: {
        justifyContent: "center",
        alignItems: "center"
    },
    tittle_text: {
        color: "white",
        textAlign: "center",
        fontSize: 40,
        fontWeight: "bold"
    },
    description_text: {
        color: "white",
        fontSize: 25,
        fontWeight: "normal"
    },
    logo_image: {
        borderRadius: 100,
        width: 300,
        height: 300
    },
    button: {
        borderRadius: 100,
        padding: 20,
        backgroundColor: "#E816F3"
    }


})