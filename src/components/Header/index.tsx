import React from 'react'
import * as S from './styles'
import theme from '@utils/theme'
import { TouchableOpacity, Text } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation, useNavigationState } from '@react-navigation/native'

const Header = () => {

    const navigation = useNavigation()

    return (
        <S.HeaderContainer
            leftComponent={

                <Icon.Button
                    name="arrow-left"
                    backgroundColor={`${theme.colors.primary}`}
                    size={30}
                    color="white"
                    onPress={() => navigation.navigate('Home')}>
                </Icon.Button>

            }
            rightComponent={

                <Icon.Button
                    name="shopping-cart"
                    backgroundColor={`${theme.colors.primary}`}
                    size={30}
                    color="white"
                    onPress={() => navigation.navigate('Cart')}>
                    <Text style={{ fontSize: 18, color: 'red', fontWeight: 'bold' }}>3</Text>
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
