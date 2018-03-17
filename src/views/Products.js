import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../actions/products'
import { addToCart } from '../actions/cart'
import ShowProduct from '../components/ShowProduct'
import FaCartPlus from 'react-icons/lib/fa/cart-plus'
import Card from '../components/Card'
import { Button } from 'react-bootstrap'
import Notifications, { notify } from 'react-notify-toast'
import '../styles/Products.css'

class Products extends Component {
    componentDidMount() {
        if (this.props.login.token) {
            this.props.fetchProducts()
        } else {
            this.props.history.push('/')
        }
    }

    render() {
        const { products, addToCart } = this.props
        console.log(products)
        return (
            <div className="products-container">
                <Notifications />
                {products.map((product) => (
                    <Card
                        className="products-item"
                        key={product.id}
                        title={product.name}
                    >
                        <ShowProduct product={product} addToCart={addToCart} />
                        <Button onClick={() => {
                            addToCart(product)
                            notify.show(`Product "${product.name}" inserted in cart!`, 'success', 1000)
                        }}>
                            <FaCartPlus size={20} />
                        </Button>
                    </Card>
                ))}
            </div>
        )
    }
}

const mapStateToProps = ({ login, products, cart }) => ({
    login,
    products,
    cart
})

const mapDispatchToProps = {
    fetchProducts,
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
