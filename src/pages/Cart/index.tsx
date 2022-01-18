import React, { useContext } from 'react'
import * as S from './styles'
import { CartContext } from '@contexts/CartContext'
import { Button } from 'react-native-elements'
import { View, Text, FlatList } from 'react-native'
import { Types } from '@contexts/CartReducer'

const Cart = () => {

    const { state, dispatch } = useContext(CartContext)

    const deleteProduct = (id: number) => {
        dispatch({
            type: Types.Delete,
            payload: {
                id,
            }
        })
    }
    return (
        <>
            {state.shoppingCart < 1 ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 22 }}>O carrinho está vazio!</Text>
                </View>
            ) : (
                <FlatList
                    data={state.products}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <S.CartItensContainer>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: 20, width: 300, marginBottom: 5 }}>{item.name}</Text>
                                <Text style={{ fontSize: 18, width: 300, fontWeight: '600' }}>R$: {item.price}</Text>
                            </View>

                            <Button
                                buttonStyle={{ backgroundColor: '#dd0000' }}
                                onPress={() => deleteProduct(item.id)}
                                title="Remover"
                            />
                        </S.CartItensContainer>
                    )}
                />
            )}
        </>
    )
}

export default Cart