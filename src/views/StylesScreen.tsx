import { RootStackParamList } from "App.tsx";
import Header from ".././components/Header.tsx";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View } from "react-native";

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Tabs'>;
}

export default function StylesSreen({ navigation }: Props) {
    return (
        <View>
            
        </View>
    )
}