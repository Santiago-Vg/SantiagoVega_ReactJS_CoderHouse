import React from 'react'
import Logo from './Logo'
import CartWidget from './CartWidget'

function navbar() {
    return (
        <div className="navbar">
            <div className="navbar-menu">
                <div>
                    <Logo />
                </div>
                <ul>
                    <li><a href="index.html">inicio</a></li>
                    <li><a href="index.html">blog</a></li>
                    <li><a href="index.html">colecciones</a></li>
                    <li><a href="index.html">nosotros</a></li>
                    <li><a href="index.html">contacto</a></li>
                    <li><a href="index.html">tienda</a></li>
                </ul>
                <div>
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default navbar
