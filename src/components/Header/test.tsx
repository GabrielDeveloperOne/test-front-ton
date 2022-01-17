import { render } from '@testing-library/react-native'
import Header from '.'

test('should render an Header component', () => {
    const { getByDisplayValue } = render(<Header />)

    expect(getByDisplayValue('Ton Store'))
})