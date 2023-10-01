import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink
  } from 'react-router-dom';
  
import AboutUs from "./AboutUs";

const NavbarMain = () =>
{
    return(
        <>
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a href="/" className="navbar-brand">
                        <img src="/bigdeal.png" style={{ borderRadius: '50%', width: '90px', height: '90px' }} alt="" />
                    </a>
                    <div className="collapse navbar-collapse" id="navbar-main">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a href="/" className="nav-link">
                            Home <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <NavLink to="/about">About Us</NavLink>
                        <Switch>
                            <Route path="/about">
                                <AboutUs />
                            </Route>
                        </Switch>
                        <li className="nav-item">
                            <a href="/" className="nav-link dropdown-toggle" role='button' id='navbarDropDown' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby='navbarDropDown'>
                            <a href="#" className="dropdown-item">Action</a>
                            <a href="#" className="dropdown-item">Another Action</a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link disabled">
                            Disabled
                            </a>
                        </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                        <input type="text" className="form-control mr-sm-2" placeholder='Search' aria-label='Search' />
                        <button className="btn btn-outline-success my-2 my-sm-0" type='submit'>Search</button>
                        </form>
                    </div>
                </nav>
            </Router>
        </>
    )
}

export default NavbarMain