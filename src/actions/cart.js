export const GET_CART = 'GET_CART'
export const ADD_CART = 'ADD_CART'
export const REMOVE_CART = 'REMOVE_CART'
export const CLEAR_CART = 'CLEAR_CART'


export const fetchCart = () => (dispatch) => {
}

export const addToCart = (product) => ({
    type: ADD_CART,
    product
})

export const removeFromCart = (product) => ({
    type: REMOVE_CART,
    product
})

export const clearCart = () => ({
    type: CLEAR_CART
})


const getCart = ({ cart }) => ({
    type: GET_CART,
    cart
})
