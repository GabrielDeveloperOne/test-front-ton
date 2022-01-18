import React from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'
import ProductList from '@components/ProductList'
import { useAxios } from '@hooks/useAxios'
import theme from '@utils/theme'

const Home = () => {

    const { response, loading, error } = useAxios({
        method: 'GET',
        url: '/products',
        headers: ({ accept: '*/*' }),
    })

    return (
        <View style={{ flex: 1 }}>
            {loading ? (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size="large" color={`${theme.colors.primary}`} />
                </View>
            ) : (
                <FlatList
                    data={response}

                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <ProductList title={item.title} price={item.price} source={item.image} id={item.id} />
                    )}
                />

            )}
        </View>
    )
}

export default Home