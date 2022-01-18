/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import type { Node } from 'react'
import {
  StatusBar,
  useColorScheme,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { CartProvider } from '@contexts/CartContext'
import { ThemeProvider } from '@contexts/Theme'
import Header from '@components/Header'
import Home from '@pages/Home'
import Cart from '@pages/Cart'
import { useRoute } from '@react-navigation/native'

const Stack = createNativeStackNavigator()

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <NavigationContainer>
      <ThemeProvider>
        <SafeAreaProvider>
          <CartProvider>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <Header />
            <Stack.Navigator initialRouteName="Home">

              <Stack.Screen name="Home" component={Home} options={{
                headerShown: false
              }} />
              <Stack.Screen name="Cart" component={Cart} options={{
                headerShown: false
              }} />
              <Stack.Screen name="Header" component={Header} options={{
                headerShown: false
              }} />
            </Stack.Navigator>
          </CartProvider>
        </SafeAreaProvider>
      </ThemeProvider>
    </NavigationContainer>
  )
}


export default App;
