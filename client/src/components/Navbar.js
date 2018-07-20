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