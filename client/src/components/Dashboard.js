import React, { Component } from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import * as actions from '../Actions/index';

class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchUser();
        //The user data will be updated everytime the dashboard page loads
        //in order for the bucketList to be updated on time
    }

    renderContent() {
        this.props.fetchUser();
        switch (this.props.auth) {
            case null:
                return;

            case false:
                return; // returns false if not logged in

            default:
                return this.props.auth; // returns true if user is logged in
        }
    }

    redirectToMoreDetails = (item) => {
          this.props.history.push(`/${item.title ? "movie" : "tv"}/${item.id}`);
      }

    getUserBucketList() {
        let displayList = [];
        if (this.props.auth) {
            displayList = this.props.auth.bucketList.map(item => {
                return (
                    <li className="list_item">
                        <p className="list_item__title">{item.name || item.original_title}</p>
                        <button className="list_item__delete" onClick={() => this.redirectToMoreDetails(item)}>Read More</button>
                    </li>
                )
            })
        }

        return displayList;
    }

    render() {
        const userData = this.renderContent();
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
                                { this.getUserBucketList() }
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

export default withRouter(connect(mapStateToProps, actions)(Dashboard));