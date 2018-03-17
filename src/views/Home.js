import React, { Component } from 'react'
import { connect } from 'react-redux'
import SimpleModal from '../components/SimpleModal'

class Home extends Component {
    state = {
        modal: false
    }
    componentDidMount() {}

    render() {
        return (
            <div>SkipTheDishes - Thank you for the oportunity</div>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.products
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
