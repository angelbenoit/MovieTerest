import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="/">MovieTerest</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <a className="nav-item nav-link active" href="#">
                            <i class="fas fa-home"></i> Home <span className="sr-only">(current)</span>
                        </a>
                        <a className="nav-item nav-link" href="#">
                        <i class="fas fa-tachometer-alt"></i> Dashboard
                        </a>
                        <a className="nav-item nav-link" href="#">
                        <i class="fas fa-film"></i> Search
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;