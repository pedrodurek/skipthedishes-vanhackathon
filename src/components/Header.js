import React from 'react'
import { Button } from 'react-bootstrap'
import { If } from 'react-if'
import '../styles/Header.css'

const Header = ({
    handleLogin,
    handleRegister,
    handleLogout,
    nProductsInCart,
    handleCart,
    logged
}) => (
    <div className="header-container">
        <div>
            <h1>SkipTheDishes</h1>
        </div>
        {logged ? (
            <div className="header-buttons">
                <Button onClick={handleCart}>
                    {`(${nProductsInCart}) Cart`}
                </Button>
                <Button onClick={handleLogout}>Logout</Button>
            </div>
        ) : (
            <div className="header-buttons">
                <Button onClick={handleLogin}>Login</Button>
                <Button onClick={handleRegister}>Register</Button>
            </div>
        )}
    </div>
)

export default Header
