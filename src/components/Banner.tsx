import { Image, StyleSheet, View } from "react-native";
import { Card, Text, useTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Banner() {
    const theme = useTheme();

    const styles = StyleSheet.create({
        container: {
            padding: 10,
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        },
        image: {
            borderRadius: 20,
            width: 180,
            height: 180
        },
        text_title: {
            fontSize: 40,
            overflow: "hidden",
            fontWeight: "bold",
            textAlign: "center"
        },
        text: {
            fontSize: 15,
            paddingBottom: 10,
            paddingHorizontal: 20,
            overflow: "hidden",
            textAlign: "left"
        },
        container_general: {
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
        },
        container_icon: {
            padding: 10,
            borderRadius: 20,
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        },
        container_arrow: {
            padding: 5,
        },
        text_icon: {
            fontSize: 15,
            overflow: "hidden",
            textAlign: "center"
        }
    })

    return (
        <View style={styles.container}>
            <Text style={styles.text_title}><Icon name="party-popper" size={40} color={theme.colors.primary}   />Artify</Text>
            <Text style={styles.text}>With Artify, you can apply styles to you own photos! In just a few steps you can transform all your memories. </Text>
            <View style={styles.container_general}>
                <Card style={styles.container_icon}>
                    <Icon name="palette-outline" size={70} color={theme.colors.primary}  />
                    <Text  style={styles.text_icon}>Select a Style</Text>
                </Card>
                <View style={styles.container_arrow}>
                    <Icon name="arrow-right-bold-outline" size={40} />
                </View>
                <Card style={styles.container_icon}>
                    <Icon name="image-plus" size={70} color={theme.colors.primary}  />
                    <Text style={styles.text_icon}>Select your photo</Text>
                </Card>
                <View style={styles.container_arrow}>
                    <Icon name="arrow-right-bold-outline" size={40} />
                </View>
                <Card style={styles.container_icon}>
                    <Icon name="download-circle-outline" size={70} color={theme.colors.primary} />
                    <Text style={styles.text_icon}>Download your photo</Text>
                </Card>
            </View>

        </View>
    )
}