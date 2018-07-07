import React from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import * as actions from '../Actions/index';

class SearchItem extends React.Component {

  componentDidMount(){
    //when user visists link with format and id, use the api to search for details
    this.props.fetchByID(this.props.match.params.id, this.props.match.params.format);
  }

  checkIfAdded() { //checks if item is already in the bucketList
    const itemToCompare = this.props.details.overview;
    //we'll use the modal overview to compare with the overviews in the bucketList
    if (this.props.auth) {
      const list = this.props.auth.bucketList; //grab bucketlist
      for (let i = 0; i < list.length; i++) {
        if (itemToCompare === list[i].overview) {
          //pass in modal object to be passed in the remove function
          //return (<div><button onClick={() => this.removeFromBucketList(this.props.modalData)}>remove</button></div>); // returns true if overviews are the same, meaning item is already in the bucketList
          return true;
        }
      }

    }
    //If we get through the entire for loop without finding a match, we
      //return the option to add the movie/show to user's list
      return false
      //return (<div><button onClick={this.postBucketList}>Add</button></div>); // returns false if can't find data in bucketList
  }

  postBucketList = () => {
    //add movie/show to bucketlist database using axios post
    axios.post('/api/add_item', this.props.details)
      .then(this.props.history.push("/search"));
  }

  removeFromBucketList = (item) => {
    //item to be deleted is pass through parameter and will be redirected to dashboard
    //after deleting
    axios.post('/api/delete_item', item)
      .then(this.props.history.push("/search"));
  }

  //The api has different properties for json data depending on format
  //for movie data, it uses .title rather than .name for tv format
  renderSpecificItem() {
    let data;
    if(this.props.details){
      data = this.props.details;
    }
      return (
        <div>
          <h1>{data.title || data.name}</h1>
          <h3>{data.overview}</h3>
        </div>
      )
  }

  render() {
    return (
        <div className="moreDetail">
          <Navbar/>
          {this.renderSpecificItem()}
          {
            this.checkIfAdded() ?
            <button onClick={() => this.removeFromBucketList(this.props.details)}>remove</button> :
            <button onClick={this.postBucketList}>Add</button>
          }
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    details: state.details
  };
}

export default  withRouter(connect(mapStateToProps, actions)(SearchItem));