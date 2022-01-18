export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
      ? {
          type: Key;
        }
      : {
          type: Key;
          payload: M[Key];
        }
  };




export enum Types {
    Delete = 'REMOVE_PRODUCT',
    Add = 'ADD_PRODUCT',
    Create = 'CREATE_PRODUCT',
}

  type ProductType = {
    id: number;
    name: string;
    price: number;
  }
  
  type ProductPayload = {
    [Types.Create] : {
      id: number;
      name: string;
      price: number;
    };
    [Types.Delete]: {
      id: number;
    }
  }

  export type ProductActions = ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];


export const productReducer = (state: ProductType[], action: ProductActions | ShoppingCartActions) => {
    switch(action.type) {
        case Types.Create:
            return [
              ...state,
              {
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price,
              }
            ]
        case REMOVE_PRODUCT: 
        return [
            ...state.filter((product: { id: any; }) => product.id !== action.payload.id),
          ]
        default:
          return state; 
    }
}

type ShoppingCartPayload = {
    [Types.Add]: undefined;
  }
  
  export type ShoppingCartActions = ActionMap<ShoppingCartPayload>[keyof ActionMap<ShoppingCartPayload>];
  
  export const shoppingCartReducer = (state: number, action: ProductActions | ShoppingCartActions) => {
    switch (action.type) {
      case Types.Create:
        return state + 1;
      case Types.Delete:
        return state - 1;
      default:
        return state;
    }
  }