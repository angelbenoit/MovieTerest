import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    renderLoggedInLinks() {
        return (
            <React.Fragment>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-film"></i> Search
                            </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink className="dropdown-item" to="/search/movie/popular/none">Popular Movies</NavLink>
                        <NavLink className="dropdown-item" to="/search/tv/popular/none">Popular Television Shows</NavLink>
                        <NavLink className="dropdown-item" to="/search/movie/genres">Search Movie Genres</NavLink>
                        <NavLink className="dropdown-item" to="/search/tv/genres">Search Television Show Genres</NavLink>
                    </div>
                </li>

                <NavLink className="nav-item nav-link" to="/dashboard" exact>
                    <i className="fas fa-tachometer-alt"></i> Dashboard
                </NavLink>

                <NavLink className="nav-item nav-link" to="/" exact onClick={() => localStorage.removeItem("token")}>
                    <i className="fas fa-sign-out-alt"></i> Logout
                </NavLink>
            </React.Fragment>
        )
    }

    renderLoggedOffLinks() {
        return (
            <React.Fragment>
                <NavLink className="nav-item nav-link" to="/signup" exact>
                    <i className="fas fa-sign-out-alt"></i> Sign Up
                </NavLink>
                <NavLink className="nav-item nav-link" to="/signin" exact>
                    <i className="fas fa-sign-out-alt"></i> Sign In
                </NavLink>
            </React.Fragment>
        )
    }

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

                        {
                            localStorage.getItem("token") ? this.renderLoggedInLinks() : this.renderLoggedOffLinks()
                        }

                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;