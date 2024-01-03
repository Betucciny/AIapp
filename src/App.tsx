import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SplashScreen from '@views/SplashScreen';
import { Provider as PaperProvider } from 'react-native-paper';
import { useColorScheme } from 'react-native';
import { darkTheme, lightTheme } from './utils/themes';
import TabController from '@views/TabController';


export type RootStackParamList = {
  Splash: undefined;
  Tabs: undefined;
};

const Stack = createNativeStackNavigator();


function App(): React.JSX.Element {
  const colorScheme = useColorScheme();
  const paperTheme =
    colorScheme === 'dark'
      ? darkTheme
      : lightTheme

  return (
    <PaperProvider theme={paperTheme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Tabs" component={TabController} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}


export default App;
