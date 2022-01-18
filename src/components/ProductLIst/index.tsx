import React from 'react'
import * as S from './styles'
import { ImageSourcePropType } from 'react-native'
import { Text, Card, Image, Button } from 'react-native-elements'

type ProductListProps = {
    title?: string
    price?: number
    image?: string
    source: ImageSourcePropType
}

const ProductList = ({ title, source, price }: ProductListProps) => {

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
                title="Adicionar"
            />

        </Card>
    )
}

export default ProductList