import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import { useEffect, useState } from "react";
import { Image, StyleSheet, View, FlatList} from "react-native";
import { Text, useTheme, Button } from "react-native-paper";

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Tabs'>;
}

type image = string;

export default function Gallery({ navigation }: Props) {
    const [images, setImages] = useState([
        "https://previews.123rf.com/images/fordzolo/fordzolo1506/fordzolo150600296/41026708-example-white-stamp-text-on-red-backgroud.jpg",
        "https://previews.123rf.com/images/fordzolo/fordzolo1506/fordzolo150600296/41026708-example-white-stamp-text-on-red-backgroud.jpg",
        "https://previews.123rf.com/images/fordzolo/fordzolo1506/fordzolo150600296/41026708-example-white-stamp-text-on-red-backgroud.jpg",
        "https://previews.123rf.com/images/fordzolo/fordzolo1506/fordzolo150600296/41026708-example-white-stamp-text-on-red-backgroud.jpg",
        "https://previews.123rf.com/images/fordzolo/fordzolo1506/fordzolo150600296/41026708-example-white-stamp-text-on-red-backgroud.jpg",
        "https://previews.123rf.com/images/fordzolo/fordzolo1506/fordzolo150600296/41026708-example-white-stamp-text-on-red-backgroud.jpg",
        "https://previews.123rf.com/images/fordzolo/fordzolo1506/fordzolo150600296/41026708-example-white-stamp-text-on-red-backgroud.jpg",
            ] as image[]);

    const theme = useTheme();

    const styles = StyleSheet.create({
        main_container: {
            height: "100%",
        },
        container: {
            flex: 1,
        },
        title: {
            fontSize: 30,
            color: theme.colors.primary,
            margin: 20,
        },
        text: {
            paddingHorizontal: 20,
            marginBottom: 10,
            fontSize: 20,
            fontWeight: 'bold',
        },
        image_container: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
        },
        image: {
            borderRadius: 10,
            borderColor: theme.colors.primary,
            borderWidth: 2,
            width: 200,
            height: 200,
        },
        button:{
            margin: 10,
        
        },
    });


    return (
        <View style={styles.main_container}>
            <Text style={styles.title}>Generate your new image</Text>
            <Button
                mode="contained"
                style={styles.button}
                onPress={() => navigation.navigate('Generate')}
            >
                Generate
            </Button>
            <Text style={styles.title}>Gallery</Text>
            {images.length === 0 
            ? <Text style={styles.text}>You have no images, generate some to start</Text> 
            : <Text style={styles.text}>Here you can see the images you have ganerated</Text> }
            <FlatList
                data={images}
                renderItem={({ item }) => (
                    <View style={styles.image_container}>
                        <Image source={{ uri: item }} style={styles.image} />
                    </View>
                )}
                keyExtractor={(_ , index)=> index.toString()}
                numColumns={2}
            />
        </View>
    )

}