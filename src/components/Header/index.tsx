import React, { useContext } from 'react'
import * as S from './styles'
import theme from '@utils/theme'
import { Text } from 'react-native'
import { CartContext } from '@contexts/CartContext'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation, useNavigationState } from '@react-navigation/native'

const Header = () => {

    const navigation = useNavigation()
    const { state, dispatch } = useContext(CartContext)

    return (
        <S.HeaderContainer
            leftComponent={

                <Icon.Button
                    name="home"
                    backgroundColor={`${theme.colors.primary}`}
                    size={30}
                    color="white"
                    onPress={() => navigation.navigate('Home')}>
                    Home
                </Icon.Button>

            }
            rightComponent={

                <Icon.Button
                    name="shopping-cart"
                    backgroundColor={`${theme.colors.primary}`}
                    size={30}
                    color="white"
                    onPress={() => navigation.navigate('Cart')}>
                    <Text style={{ fontSize: 18, color: 'red', fontWeight: 'bold' }}>{state.shoppingCart}</Text>
                </Icon.Button>

            }
            centerComponent={{
                text: 'Ton Store',
                style: { fontSize: 22, fontWeight: 'bold' }
            }}
        />
    )
}

export default Header
