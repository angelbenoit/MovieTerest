import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
class SearchItem extends React.Component {
  checkIfAdded() { //checks if item is already in the bucketList
    const itemToCompare = this.props.modalData.overview;
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
    axios.post('/api/add_item', this.props.modalData)
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
    const data = this.props.modalData;
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
          {this.renderSpecificItem()}
          {
            this.checkIfAdded() ?
            <button onClick={() => this.removeFromBucketList(this.props.modalData)}>remove</button> :
            <button onClick={this.postBucketList}>Add</button>
          }
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    modalData: state.modalData
  };
}

export default  withRouter(connect(mapStateToProps, null)(SearchItem));