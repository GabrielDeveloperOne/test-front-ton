import React from 'react'
import * as S from './styles'
import theme from '@utils/theme'
import { TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const Header = () => {
    return (
        <S.HeaderContainer
            rightComponent={
                <S.HeaderRight>
                    <Icon.Button
                        name="shopping-cart"
                        backgroundColor={`${theme.colors.primary}`}
                        size={30}
                        color="white">
                        <Text style={{ fontSize: 18, color: 'red', fontWeight: 'bold' }}>3</Text>
                    </Icon.Button>
                </S.HeaderRight>
            }
            centerComponent={{
                text: 'Ton Store',
                style: { fontSize: 22, fontWeight: 'bold' }
            }}
        />
    )
}

export default Header
