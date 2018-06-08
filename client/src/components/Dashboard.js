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
                            <a className="side-nav__link" href="/"><i class="fas fa-trophy"></i>Top Five</a>
                            <a className="side-nav__link" href="/"><i class="fab fa-bitbucket"></i>Bucket List</a>
                            <a className="side-nav__link" href="/"><i class="fas fa-film"></i>Movies Only</a>
                            <a className="side-nav__link" href="/"><i class="fas fa-tv"></i> TV Shows Only</a>
                        </nav>
                    </div>

                    <div className="dashboard__content--display">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt temporibus dicta dolor odio, corporis nostrum ipsum aut. Dolore, mollitia! Repellendus, animi! Corrupti qui pariatur quae nihil dolor quia inventore dignissimos.
                        Quis necessitatibus nostrum rerum, odio enim temporibus laborum aliquid ex sit esse nobis asperiores dolorem, sunt delectus earum assumenda nemo, exercitationem quibusdam? Atque rem voluptatum deserunt quae mollitia, optio maiores.
                        Tempora veritatis beatae odio enim, ipsa modi nobis dolore consequuntur. Sequi animi laborum iure temporibus consequuntur inventore reiciendis. Provident in est voluptatum saepe quasi dignissimos, nihil asperiores omnis sint reprehenderit!
                        Natus voluptatibus nihil cum itaque provident tempore harum repellendus. Sit nobis qui eligendi et harum ex quisquam praesentium ea in quod! Repellat labore ad dolore nemo qui voluptate quisquam! Vitae.
                        Dicta quia esse vitae quae illum dolorem explicabo excepturi libero optio sit at nam consectetur perspiciatis, magnam pariatur est nemo, exercitationem iusto adipisci, laborum voluptatibus eveniet placeat. Deserunt, aut alias?</p>
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