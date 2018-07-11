import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
                <NavLink className="navbar-brand" exact to="/">MovieTerest</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <NavLink className="nav-item nav-link" to="/" exact>
                            <i className="fas fa-home"></i> Home <span className="sr-only">(current)</span>
                        </NavLink>
                        <NavLink className="nav-item nav-link" to="/dashboard" exact>
                            <i className="fas fa-tachometer-alt"></i> Dashboard
                        </NavLink>
                        <NavLink className="nav-item nav-link" exact to="/search">
                            <i className="fas fa-film"></i> Search
                        </NavLink>
                        <a className="nav-item nav-link" href="/api/logout" exact>
                        <i className="fas fa-sign-out-alt"></i> Logout
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;