import React from 'react'
import { ThemeProvider as ElementsProvider, } from 'react-native-elements'

import { ThemeProvider as Provider } from 'styled-components'

type ThemeProviderProps = {
    children: React.ReactNode
}

export const theme = {
    colors: {
        primary: '#00bf00'
    }
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
    <Provider theme={theme}>
        <ElementsProvider theme={theme}>{children}</ElementsProvider>
    </Provider>
)