import React from 'react';
import './Header.css';
import { FaShoppingBasket } from 'react-icons/fa';
import { BiStoreAlt, BiSearch } from 'react-icons/bi';
// import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';

function Header() {
    // const navigate = useNavigate();
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="header flex-center">
            <Link to="/Home" className='HomeLink Link'>
                <div className="header__logo flex-center">
                    <BiStoreAlt className='header__logoImage' fontSize={ "2em" } />
                    <h2 className="header__logoTitle">eSHOP</h2>
                </div>
            </Link>
            <div className="header__search flex-center">
                <input type="text" className="header__searchInput" />
                <BiSearch className='header__searchIcon' />
            </div>
            <div className="header__nav">
            <Link to='/Login' style={{ textDecoration: "none" }}>
                <div className="nav__item">
                    <span className="nav__itemLineOne">Hello, Guest</span>
                    <span className="nav__itemLineTwo">Sign In</span>
                </div>
            </Link>
            </div>
            <div className="nav__item">
                <span className="nav__itemLineOne">Returns &</span>
                <span className="nav__itemLineTwo">Orders</span>
            </div>
            <div className="nav__item basketItem" >
                <Link to="/Checkout" className='CheckoutLink Link'>
                <span className="nav__itemLineOne">
                    <FaShoppingBasket  className='header__basketIcon flex-center' fontSize={ "large" } />
                </span>
                <span className="nav__itemLineTwo nav__basketCount">{basket.length}</span>
                </Link>
            </div>
        </div>
    )
}

export default Header