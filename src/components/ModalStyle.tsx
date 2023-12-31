import { getRandomInt, sleep } from "@utils/functions";
import { StyleItem } from "@utils/styles";
import { Pressable, StyleSheet, View } from "react-native";
import { Modal, Portal, Text, TouchableRipple, useTheme } from "react-native-paper"
import Animated from "react-native-reanimated";

type Props = {
    visible: boolean,
    onDismiss: () => void,
    item: StyleItem
}

export default function ModalStyle({ visible, onDismiss, item }: Props) {
    const theme = useTheme();
    const styles = StyleSheet.create({
        ripple:{
            height: "80%",
            width: "90%",
            alignSelf: "center",
            borderRadius: 20,
        },
        container: {
            height: "100%",
            width: "100%",
            alignSelf: "center",
            borderRadius: 20,
            alignItems: "center",
            backgroundColor: theme.colors.background
        },
        text_title: {
            color: theme.colors.onSurface,
            fontSize: 40,
            fontWeight: "bold",
            padding: 20,
        },
        image: {
            padding: 10,
            borderWidth: 1,
            borderColor: theme.colors.primary,
            borderRadius: 20,
            width: 230,
            height: 230
        },
        text: {
            padding: 15,
            fontSize:16,
            overflow: "hidden",
            fontWeight: "bold"
        }
    })

    const controlOnPress = async () => {
        await sleep(300);
        onDismiss();
    }

    return (
        <Portal>
            <Modal visible={visible} onDismiss={onDismiss} theme={theme}>
                <TouchableRipple onPress={controlOnPress} style={styles.ripple} borderless>
                    <View style={styles.container}>
                        <Text style={styles.text_title}>{item.name}</Text>
                        <Animated.Image
                            sharedTransitionTag={item.name}
                            source={item.images[getRandomInt(item.images.length - 1)]}
                            style={styles.image}
                        />
                        <Text style={styles.text}>{item.description}</Text>
                    </View>
                </TouchableRipple>
            </Modal>
        </Portal>
    );
}