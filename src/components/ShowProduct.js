import React from 'react'
import PropTypes from 'prop-types'

const ShowProduct = ({ product }) => (
    <div>
        <div>{product.description}</div>
        <div>Price: ${product.price}</div>
    </div>
)

ShowProduct.propTypes = {
}

ShowProduct.defaultProps = {
}

export default ShowProduct