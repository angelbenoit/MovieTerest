import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
                <NavLink className="navbar-brand" to="/">MovieTerest</NavLink>
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
                        <NavLink className="nav-item nav-link" to="/search" exact>
                            <i className="fas fa-film"></i> Search
                        </NavLink>
                        <NavLink className="nav-item nav-link" to="/api/logout" exact>
                        <i className="fas fa-sign-out-alt"></i> Logout
                        </NavLink>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;