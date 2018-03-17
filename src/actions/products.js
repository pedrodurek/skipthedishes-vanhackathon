import { getAllProducts } from '../api/ProductAPI'
export const GET_PRODUCTS = 'GET_PRODUCTS'

export const fetchProducts = () => (dispatch) => {

    getAllProducts().then((result) => {
        dispatch(getProducts(result))
    })

}

const getProducts = (products) => ({
    type: GET_PRODUCTS,
    products
})
