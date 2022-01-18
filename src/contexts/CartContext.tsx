import React, { createContext, Dispatch, useReducer } from 'react'
import { productReducer, shoppingCartReducer, ProductActions, ShoppingCartActions } from './CartReducer'

type ProductType = {
    id: number
    name: string
    price: number
    children?: React.ReactNode
}

type InitialStateType = {
    products: ProductType[]
    shoppingCart: number;
}

const initialState = {
    products: [],
    shoppingCart: 0,
}

const CartContext = createContext<{
    state: InitialStateType;
    dispatch: Dispatch<ProductActions | ShoppingCartActions>;
}>({
    state: initialState,
    dispatch: () => null
})

const mainReducer = ({ products, shoppingCart }: InitialStateType, action: ProductActions | ShoppingCartActions) => ({
    products: productReducer(products, action),
    shoppingCart: shoppingCartReducer(shoppingCart, action),
});

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider };