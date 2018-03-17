import React, { Component } from 'react'
import { connect } from 'react-redux'
import ShowProduct from '../components/ShowProduct'
import FaCartPlus from 'react-icons/lib/fa/cart-plus'
import Card from '../components/Card'
import { Button } from 'react-bootstrap'
import FaPlus from 'react-icons/lib/fa/plus'
import FaMinus from 'react-icons/lib/fa/minus'
import { addToCart, removeFromCart } from '../actions/cart'

class Cart extends Component {
    componentDidMount() {
        if (!this.props.login.token) {
            this.props.history.push('/')
        }
    }

    render() {
        const { cart, addToCart, removeFromCart } = this.props
        return (
            <div className="products-container">
                {cart.map((product) => (
                    <Card
                        className="products-item"
                        key={product.id}
                        title={product.name}
                    >
                        <ShowProduct product={product} />
                        <div>Number: {product.nProducts}</div>
                        <Button onClick={() => addToCart(product)}>
                            <FaPlus size={20} />
                        </Button>
                        <Button onClick={() => removeFromCart(product)}>
                            <FaMinus size={20} />
                        </Button>
                    </Card>
                ))}
            </div>
        )
    }
}

const mapStateToProps = ({ cart, login }) => ({
    cart,
    login
})

const mapDispatchToProps = {
    addToCart,
    removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
