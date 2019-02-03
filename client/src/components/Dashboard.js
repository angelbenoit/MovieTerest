import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import * as actions from '../Actions/index';

class Dashboard extends Component {
    constructor(props){
        super(props);

        this.state = {
            bucket: true,
            movies: false,
            shows: false
        };

        this.displayType = this.displayType.bind(this);
    }
    componentDidMount() {
        this.props.fetchUser();
        //The user data will be updated everytime the dashboard page loads
        //in order for the bucketList to be updated on time
    }

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

    redirectToMoreDetails = (item) => {
          this.props.history.push(`/${item.title ? "movie" : "tv"}/${item.id}`);
      }

    getUserBucketList() {
        let displayList = [];
        console.log(this.props.auth)
        if (this.props.auth && this.props.auth.bucketList) {
            displayList = this.props.auth.bucketList.map(item => {
                let selection;
                if(this.state.bucket)
                    selection = <p className="list_item__title">{item.name || item.original_title}</p>;
                else if(this.state.movies)
                    selection = item.original_title ? <p className="list_item__title">{item.original_title}</p> :"";
                else
                    selection = item.name ? <p className="list_item__title">{item.name}</p>: "";
                return (
                    selection ?(<li className="list_item">
                                    {selection}
                                    <button className="list_item__delete" onClick={() => this.redirectToMoreDetails(item)}>Read More</button>
                                </li>) : ""
                )
            })
        }

        return displayList;
    }

    displayType(format){
        if(format === "movie")
            this.setState({ bucket: false, movies: true, shows: false});
        else if(format === "shows")
            this.setState({ bucket: false, movies: false, shows: true});
        else
            this.setState({ bucket: true, movies: false, shows: false});
    }

    render() {
        const userData = this.renderContent();
        return (
            <div className="dashboard">
                <div className="dashboard__content">
                    <div className="dashboard__content--navigation">

                        <div className="greeting">
                            <p>Hello {userData ? userData.username : "User"}</p>
                        </div>

                        <nav className="side-nav">
                            <a onClick={() => this.displayType("bucket")} className="side-nav__link"><i class="fab fa-bitbucket"></i>&nbsp; Bucket List</a>
                            <a onClick={() => this.displayType("movie")}className="side-nav__link"><i class="fas fa-film"></i>&nbsp; Movies Only</a>
                            <a onClick={() => this.displayType("shows")}className="side-nav__link"><i class="fas fa-tv"></i>&nbsp; TV Shows Only</a>
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