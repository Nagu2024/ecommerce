import React, { Fragment } from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'

const Header = ({ cardetails }) => {
    return (
        <Fragment> <nav className="navbar row">
            <div className="col-12 col-md-3">
                <div className="navbar-brand">
                    <img width="150px" src="./images/logo.png" alt='' />
                </div>
            </div>

            <div className="col-12 col-md-6 mt-2 mt-md-0">
                <Search />
            </div>

            <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">

                <Link to={"/cart"} className="btn login_btn ml-4">
                    <span id="cart" className="ml-3">Cart</span></Link>
                <span className="ml-1" id="cart_count">{cardetails.length}</span>
            </div>
        </nav>
        </Fragment>
    )
}

export default Header