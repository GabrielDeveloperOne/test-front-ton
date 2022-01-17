import React from 'react'
import { Text, Card, Image, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

const ProductList = () => {
    return (
        <Card>
            <Card.Title>CARD WITH DIVIDER</Card.Title>
            <Card.Divider />
            <Card.Image
                style={{ padding: 0 }}
                source={{
                    uri:
                        'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                }}
            />
            <Text style={{ marginBottom: 10 }}>
                The idea with React Native Elements is more about component
                structure than actual design.
            </Text>
            <Button
                icon={
                    <Icon
                        name="plus"
                        size={30}
                        color="white"
                    />
                }
                buttonStyle={{
                    borderRadius: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: 0,
                }}
                title="VIEW NOW"
            />

        </Card>
    )
}

export default ProductList