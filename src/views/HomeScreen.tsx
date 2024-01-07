import { RootStackParamList } from "App.tsx";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import StylesHorizontal from "../components/StylesHorizontal";
import { ScrollView } from "react-native";
import Banner from "../components/Banner";
import Share from "../components/Share";
import Footer from "../components/Footer";

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Tabs'>;
}

export default function HomeScreen({ navigation }: Props) {
    


    return (
        <ScrollView>
            <Banner />
            <StylesHorizontal />
            <Share />
            <Footer />
        </ScrollView>
    )
}