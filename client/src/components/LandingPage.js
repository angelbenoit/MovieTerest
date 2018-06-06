import React, { Component } from 'react';
import Navbar from './Navbar';

class LandingPage extends Component {
    render() {
        return (
            <div className="landing">
                <Navbar />
                <div className="landing__text animated slideInLeft">
                    <p className="landing__text--title">
                        <i class="fas fa-tv"></i>&nbsp;MovieTerest
                    </p>
                    <p className="landing__text--info">
                        The pinterest of television shows and movies.
                        You can search through all tv shows and movies and add
                        them to your bucketlist.
                        Sign in with google plus and you're ready to start
                        searching.
                    </p>
                    <a href="/auth/google" className="landing__text--login">
                        Login with <i class="fab fa-google-plus-g"></i>
                    </a>
                </div>


            </div>
        );
    }
}

export default LandingPage;