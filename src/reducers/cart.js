import { GET_CART, ADD_CART } from '../actions/cart'

const initialState = []

const cart = (state = initialState, action) => {
    switch (action.type) {
        case GET_CART:
            return action.cart
        case ADD_CART:
            let found = false
            let newState = []
            if (state.length) {

                newState = state.map((product) => {
                    if (product.id === action.product.id) {
                        found = true
                        return {
                            ...product,
                            nProducts: product.nProducts + 1
                        }
                    } 
                    return product
                })


            }
            if (!found) {
                return [...state, { ...action.product, nProducts: 1 }]
            } else {
                return newState
            }
        default:
            return state
    }
}

export default cart
