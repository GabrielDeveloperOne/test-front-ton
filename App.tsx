/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import type { Node } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from '@contexts/Theme'
import Header from '@components/Header'
import Home from '@pages/Home'
import Cart from '@pages/Cart'
import {
  StatusBar,

  useColorScheme,

} from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <ThemeProvider>
        <SafeAreaProvider>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <Header />
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Cart" component={Cart} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </ThemeProvider>
    </NavigationContainer>
  )
}


export default App;
