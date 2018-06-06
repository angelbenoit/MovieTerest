import React, { Component } from 'react';
import Navbar from './Navbar';

class LandingPage extends Component {
    render() {
        return (
            <div className="landing">
                <Navbar/>
                <div className="landing__text">
                    <p className="landing__text--title">
                    <i class="fas fa-tv"></i>&nbsp;MovieTerest 
                    </p>
                    <p className="landing__text--info">
                        The pinterest of television shows and movies.
                    </p>
                </div>
            </div>
        );
    }
}

export default LandingPage;