import React, { Component } from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';

class Dashboard extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;

            case false:
                return; // returns false if not logged in

            default:
                return this.props.auth; // returns true if user is logged in
        }
    }

    render() {
        const userData = this.renderContent();
        console.log(userData);
        return (
            <div className="dashboard">
                <Navbar />
                <div className="dashboard__content">
                    <div className="dashboard__content--navigation">

                        <div className="greeting">
                            <p>Hello {userData ? userData.username : "User"}</p>
                        </div>

                        <nav className="side-nav">
                            <a className="side-nav__link" href="/"><i class="fas fa-trophy"></i>&nbsp; Top Five</a>
                            <a className="side-nav__link" href="/"><i class="fab fa-bitbucket"></i>&nbsp; Bucket List</a>
                            <a className="side-nav__link" href="/"><i class="fas fa-film"></i>&nbsp; Movies Only</a>
                            <a className="side-nav__link" href="/"><i class="fas fa-tv"></i>&nbsp; TV Shows Only</a>
                        </nav>
                    </div>

                    <div className="dashboard__content--display">
                        <div className="userListContainer">
                            <ul className="userListContainer__list">
                                <li className="item">One</li>
                                <li className="item">Two</li>
                                <li className="item">Three</li>
                                <li className="item">Four</li>
                                <li className="item">Five</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth }
}

export default connect(mapStateToProps)(Dashboard);