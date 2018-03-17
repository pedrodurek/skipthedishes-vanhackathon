import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../actions/products'
import { addToCart } from '../actions/cart'
import '../styles/Products.css'
import Card from '../components/Card'
import FaCartPlus from 'react-icons/lib/fa/cart-plus'
import { Button } from 'react-bootstrap'

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
        return <div className="products-container">
                {products.map((product) => (
                    <Card
                        className="products-item"
                        key={product.id}
                        title={product.name}
                    >
                        <div>{product.description}</div>
                        <div>Price: ${product.price}</div>
                        <Button onClick={() => addToCart(product)}>
                            <FaCartPlus size={20} />
                        </Button>
                    </Card>
                ))}
            </div>
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
