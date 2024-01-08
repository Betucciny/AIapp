import ModalStyleSelection from "../components/ModalStyleSelection";
import { data_styles } from "@utils/styles";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, useTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";



export default function GenerateScreen() {
    const styles_avariable = [...data_styles.map(style => style.name), "Personalized"];
    const [style, setStyle] = useState(styles_avariable[0]);
    const [isVisible, setIsVisible] = useState(false);

    const theme = useTheme();
    const styles = StyleSheet.create({
        main_container: {
            backgroundColor: theme.colors.background,
        },
        title: {
            color: theme.colors.onSurface,
            fontSize: 25,
            fontWeight: 'bold',
            margin: 20,
        },
        button: {
            borderColor: theme.colors.primary,
            borderWidth: 2,
            margin: 10,
        },
        text: {
            verticalAlign: 'middle',
            color: theme.colors.onSurface,
            fontSize: 15,
            margin: 10,
        },
        text_icon: {
            marginHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
        },
    });
    return (
        <>
            <ModalStyleSelection
                style={style}
                setStyle={setStyle}
                isVisible={isVisible}
                setIsVisible={setIsVisible}
                styles_avariable={styles_avariable}
            />
            <ScrollView style={styles.main_container}>
                <Text style={styles.title}>Generate your next image <Icon name="palette-outline" size={30} color={theme.colors.primary} /></Text>
                <View>
                    <View style={styles.text_icon}>
                        <Icon name="check-circle" size={30} color={theme.colors.onSurface}/>
                        <Text style={styles.text}>Choose your style</Text>
                    </View>
                    <Button
                        onPress={() => setIsVisible(true)}
                        mode="text"
                        style={styles.button}
                    >{style}</Button>
                </View>
            </ScrollView>
        </>
    )
}