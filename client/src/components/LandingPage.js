import React, { Component } from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';

class LandingPage extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;

            case false:
                return false; // returns false if not logged in

            default:
                return true; // returns true if user is logged in
        }
    }

    render() {
        return (
            <div className="landing">
                {this.renderContent() ? <Navbar /> : ""}
                <div className="landing__text">
                    <p className="landing__text--title animated slideInLeft">
                        <i className="fas fa-tv"></i>&nbsp;MovieTerest
                    </p>
                    <p className="landing__text--info animated slideInRight">
                        The pinterest of television shows and movies.
                        You can search through all tv shows and movies and add
                        them to your bucketlist.
                        Sign in with google plus and you're ready to start
                        searching.
                    </p>
                    {
                        this.renderContent() ?
                            "" :
                            <a href="/auth/google" className="landing__text--login animated fadeInUpBig">
                                Login with <i className="fab fa-google-plus-g"></i>
                            </a>
                    }

                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth }
}

export default connect(mapStateToProps)(LandingPage);