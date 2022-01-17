import React from 'react'
import { View } from 'react-native'
import ProductList from '@components/ProductList'

const Home = () => {
    return (
        <View style={{ flex: 1 }}>
            <ProductList />
        </View>
    )
}

export default Home