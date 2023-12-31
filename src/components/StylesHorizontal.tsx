import ModalStyle from "../components/ModalStyle";
import { getRandomInt, sleep } from "@utils/functions";
import { StyleItem, data_styles } from "@utils/styles";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Card, Surface, Text, TouchableRipple, useTheme } from "react-native-paper";
import Animated from "react-native-reanimated";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

type PropsItem = {
    item: StyleItem
}

function Item({ item }: PropsItem) {
    const maxImages = 5;
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: 10
        },
        sub_container: {
            borderRadius: 20,
            flex: 1,
            padding: 10,
            // borderWidth: 1,
            borderColor: theme.colors.primary,
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center"
        },
        image: {
            borderRadius: 20,
            width: 180,
            height: 180
        },
        ripple: {
            borderRadius: 20,
            height: 230,
        },
        text: {
            paddingTop: 10,
            paddingHorizontal: 20,
            fontSize: 15,
            overflow: "hidden",
            fontWeight: "bold"
        }
    })
    const [isVisble, setIsVisible] = useState(false);

    const controlOnPress = async () => {
        await sleep(300);
        setIsVisible(true);
    }

    return (
        <View style={styles.container}>
            <ModalStyle visible={isVisble} onDismiss={() => setIsVisible(false)} item={item} />
            <TouchableRipple
                borderless
                style={styles.ripple}
                rippleColor={theme.colors.primary}
                onPress={controlOnPress}
            >
                <Card style={styles.sub_container} theme={theme} elevation={4}>
                    <Animated.Image
                        sharedTransitionTag={item.name}
                        source={item.images[getRandomInt(maxImages)]}
                        style={styles.image}
                    />
                    <Text style={styles.text}>{item.name}</Text>
                </Card>
            </TouchableRipple>

        </View>
    )
}


export default function StylesHorizontal() {
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
        <>
            <Text style={styles.text_title}>Try different styles <Icon name="heart" style={styles.text_title} color={theme.colors.primary} /></Text>
            <Text style={styles.text}>We've compiled differnet art Styles for you to try, and you can upload your own styles also!</Text>
            <FlatList
                data={data_styles}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.name}
                horizontal={true}
            />
        </>

    )
}

