import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { submit } from 'redux-form'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import NotFound from './views/NotFound'
import Home from './views/Home'
import Products from './views/Products'
import Cart from './views/Cart'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import Footer from './components/Footer'
import SimpleModal from './components/SimpleModal'
import { fetchCreateUser, fetchLogin, logout } from './actions/login'
import { clearCart } from './actions/cart'
import './App.css'

class App extends Component {
    state = {
        routes: [
            {
                path: '/products',
                exact: true,
                component: Products,
                title: 'products'
            },
            {
                path: '/cart',
                exact: true,
                component: Cart,
                title: 'cart'
            },
            {
                path: '/',
                exact: true,
                component: Home,
                title: 'home'
            },
            {
                path: '/404',
                exact: false,
                component: NotFound,
                title: 'not found'
            }
        ],
        showSimpleModal: false,
        isLogin: false,
        errorMsg: ''
    }

    openSimpleModal = (isLogin) => {
        this.setState({ showSimpleModal: true, isLogin })
    }

    closeSimpleModal = () => {
        this.setState({ showSimpleModal: false, errorMsg: '' })
    }

    createUser = (data) => {
        this.props
            .fetchCreateUser(data)
            .then(() => {
                this.closeSimpleModal()
                this.props.history.push('/products')
            })
            .catch((errorMsg) => {
                this.setState({ errorMsg })
            })
    }

    login = (data) => {
        this.props
            .fetchLogin(data)
            .then(() => {
                this.closeSimpleModal()
                this.props.history.push('/products')
            })
            .catch((errorMsg) => {
                this.setState({ errorMsg })
            })
    }

    handleLogout = () => {
        this.props.logout()
        this.props.clearCart()
        this.props.history.push('/')
    }

    render() {
        const { routes, isLogin, showSimpleModal, errorMsg } = this.state
        const { submitLogin, login, nProductsInCart } = this.props
        return (
            <div className="app">
                <Header
                    handleLogin={() => this.openSimpleModal(true)}
                    handleRegister={() => this.openSimpleModal(false)}
                    handleLogout={this.handleLogout}
                    logged={login.token}
                    nProductsInCart={nProductsInCart}
                    handleCart={() => this.props.history.push('/cart')}
                />
                <SimpleModal
                    showModal={showSimpleModal}
                    title={`${isLogin ? 'Login' : 'Registration'}`}
                    confirmLabel={`${isLogin ? 'Login' : 'Create'}`}
                    onConfirm={submitLogin}
                    onCancel={this.closeSimpleModal}
                >
                    <LoginForm
                        handle={isLogin ? this.login : this.createUser}
                        newUser={!isLogin}
                        errorMsg={errorMsg}
                    />
                </SimpleModal>
                <div>
                    <Switch>
                        {routes.map((route, i) => <Route key={i} {...route} />)}
                        <Redirect from="*" to="/404" />
                    </Switch>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = ({ login, cart }) => ({
    login,
    nProductsInCart: cart.reduce((acc, obj) => acc + obj.nProducts, 0)
})

const mapDispatchToProps = {
    submitLogin: () => submit('initializeLoginForm'),
    fetchCreateUser,
    fetchLogin,
    clearCart,
    logout
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(App)
