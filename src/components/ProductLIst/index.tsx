import React, { useContext } from 'react'
import * as S from './styles'
import { ImageSourcePropType } from 'react-native'
import { CartContext } from '@contexts/CartContext'
import { Card, Button } from 'react-native-elements'
import { Types } from '@contexts/CartReducer'

type ProductListProps = {
    title: string
    price: number
    image?: string
    id: number
    source: ImageSourcePropType
}

const ProductList = ({ title, source, price, id }: ProductListProps) => {

    const { dispatch } = useContext(CartContext)

    const createProduct = () => {
        dispatch({
            type: Types.Create,
            payload: {
                id: id,
                name: title,
                price: price
            }
        });
    };

    return (
        <Card>
            <Card.Title>{title}</Card.Title>
            <Card.Divider />
            <Card.Image
                style={{ padding: 0 }}
                source={{ uri: source }}
            />
            <S.NumberPrice>
                R$: {price}
            </S.NumberPrice>
            <Button
                onPress={() => createProduct()}
                title="Adicionar"
            />

        </Card>
    )
}

export default ProductList