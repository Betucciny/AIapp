import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import SplashScreen from '@views/SplashScreen';
import GenerateScreen from '@views/GenerateScreen';
import { Provider as PaperProvider } from 'react-native-paper';
import { useColorScheme } from 'react-native';
import { darkTheme, lightTheme } from './utils/themes';
import TabController from '@views/TabController';
import { FileSystem, Dirs } from 'react-native-file-access';

export type RootStackParamList = {
  Splash: undefined;
  Tabs: undefined;
  Generate: undefined;
};

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const colorScheme = useColorScheme();
  const paperTheme =
    colorScheme === 'dark'
      ? darkTheme
      : lightTheme;

  useEffect(() => {
    const checkAndCreateDirectory = async (directory: string) => {
      const directoryExists = await FileSystem.isDir(directory);
      if (!directoryExists) {
        await FileSystem.mkdir(directory);
      }
    };
    try {
      checkAndCreateDirectory(Dirs.DocumentDir + '/Styles');
      checkAndCreateDirectory(Dirs.DocumentDir + '/Created');
      console.log('Created directories');
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <PaperProvider theme={paperTheme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Tabs" component={TabController} options={{ headerShown: false }} />
          <Stack.Screen name="Generate" component={GenerateScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
