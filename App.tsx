/* eslint-disable global-require */
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components/native';

import { Home } from './src/pages/Home';
import { ProductList } from './src/pages/ProductList';
import { ShoppingList } from './src/pages/ShoppingList';
import theme from './src/styles/theme';

type RootStackParamList = {
  Home: undefined;
  'Lista de Produtos': undefined;
  'Lista de Compra': { index: number };
};

export type AppNavigationRoutesProps =
  NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={() => ({
              headerShown: false,
            })}
          />
          <Stack.Screen
            name="Lista de Produtos"
            component={ProductList}
            options={() => ({
              headerShown: false,
            })}
          />
          <Stack.Screen
            name="Lista de Compra"
            component={ShoppingList}
            options={() => ({
              headerShown: false,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
