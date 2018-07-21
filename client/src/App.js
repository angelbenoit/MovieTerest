import React, { Component } from 'react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import GenreSelection from './components/genreSelectionPage';
import Navbar from './components/Navbar';
import SearchPopular from './components/SearchPopular';
import SearchItem from './components/SearchItem';
import {BrowserRouter,Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './Actions';
import './css/style.css';


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
              <Navbar/>
              <Route exact path='/:format/:id' component={SearchItem} />
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/search/:format/popular/:genreList' component={SearchPopular} />
              <Route exact path='/search/:format/genres' component={GenreSelection} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
