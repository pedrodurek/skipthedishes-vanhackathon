import React from 'react'
import { Button } from 'react-bootstrap'
import { If } from 'react-if'
import '../styles/Header.css'

const Header = ({
    handleLogin,
    handleRegister,
    handleLogout,
    handleCart,
    nProductsInCart,
    logged
}) => (
    <div className="header-container">
        <div>
            <h1>SkipTheDishes</h1>
        </div>
        {logged ? (
            <div className="header-buttons">
                <Button onClick={handleLogout}>Logout</Button>
                <Button onClick={handleCart}>
                    {`(${nProductsInCart}) Cart`}
                </Button>
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
