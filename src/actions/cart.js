export const GET_CART = 'GET_CART'
export const ADD_CART = 'ADD_CART'

export const fetchCart = () => (dispatch) => {
}

export const addToCart = (product) => ({
    type: ADD_CART,
    product
})

const getCart = ({ cart }) => ({
    type: GET_CART,
    cart
})
