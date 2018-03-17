import { GET_PRODUCTS } from '../actions/products'

const initialState = []

const products = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return action.products
        default:
            return state
    }
}

export default products
