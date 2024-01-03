import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import React, { useState } from "react";
import { BottomNavigation, Text, useTheme } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Item = {
    render: React.ComponentType<any>,
    key: string,
    title: string,
    icon: string
}

type Props = {
    listItems: Item[],
    navigation: NativeStackNavigationProp<RootStackParamList, 'Tabs'>;
}

const BottomBar = ({ listItems, navigation }: Props) => {
    const theme = useTheme();
    const [index, setIndex] = React.useState(0);

    const [routes] = useState(listItems.map((item) => {
        return {
            key: item.key,
            title: item.title,
            icon: item.icon
        }
    }));


    const renderScene = BottomNavigation.SceneMap(
        listItems.reduce((scenes, item) => {
            return {
                ...scenes,
                [item.key]: () => <item.render navigation={navigation} />
            };
        }, {})
    );


    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            activeColor={theme.colors.primary}
            inactiveColor={theme.colors.disabled}
            barStyle={{ backgroundColor: theme.colors.surface, height: 60}}
            shifting
            theme={theme}
            renderIcon={
                ({ route, focused, color }) =>
                    <Icon name={route.icon as string} color={focused ? color : theme.colors.disabled} size={focused ? 28 : 22} />
            }
        />
    );
};

export default BottomBar