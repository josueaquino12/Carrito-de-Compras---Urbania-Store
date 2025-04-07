import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CarritoContext } from '../context/CarritoContext';

export const Navbar = () => {

    const { listaCompras } = useContext(CarritoContext)

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light shadow bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand text-success" href="#">Urbania Store</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/shop">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Este contenedor queda siempre visible, fuera del collapse */}
                    <div className="d-flex">
                        <NavLink className="nav-link" to="/buyshop">
                            <Badge badgeContent={listaCompras.length} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </NavLink>
                    </div>
                </div>
            </nav>

        </>
    )
}


