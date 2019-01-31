import React, { Component } from 'react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import GenreSelection from './components/genreSelectionPage';
import Navbar from './components/Navbar';
import SearchPopular from './components/SearchPopular';
import SearchItem from './components/SearchItem';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import {BrowserRouter,Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './Actions';
import './css/style.css';


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

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
      <div className="App">
        <BrowserRouter>
          <div>
              {this.renderContent() ? <Navbar /> : ""}
              <Route exact path='/:format/:id' component={SearchItem} />
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/signin' component={Signin} />
              <Route exact path='/search/:format/popular/:genreList' component={SearchPopular} />
              <Route exact path='/search/:format/genres' component={GenreSelection} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth }
}


export default connect(mapStateToProps, actions)(App);
