import React, { Component } from 'react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Search from './components/Search';
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
              <Route exact path='/:format/:id' component={SearchItem} />
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/search' component={Search} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
