/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import type { Node } from 'react'
import Header from '@components/Header'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from '@contexts/Theme'
import {
  StatusBar,
  View,
  useColorScheme,
  TouchableOpacity
} from 'react-native'

import { Button } from 'react-native-elements'

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Header />
        <View style={{ flex: 1 }}>
        </View>
      </SafeAreaProvider>
    </ThemeProvider >
  )
}


export default App;
