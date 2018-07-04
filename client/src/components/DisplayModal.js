import React from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

const customStyles = {
  content: {
    top: '50%',
    background: '#3D76CB',
    color: 'white',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
class DisplayModal extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.isOpen);
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.checkIfAdded = this.checkIfAdded.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
    this.props.closeModal();
  }

  checkIfAdded() { //checks if item is already in the bucketList
    const itemToCompare = this.props.modalData.overview;
    //we'll use the modal overview to compare with the overviews in the bucketList
    if (this.props.auth) {
      const list = this.props.auth.bucketList;
      for (let i = 0; i < list.length; i++) {
        if (itemToCompare === list[i].overview) {
          //pass in modal object to be passed in the remove function
          return (<div><button onClick={() => this.removeFromBucketList(this.props.modalData)}>remove</button></div>); // returns true if overviews are the same, meaning item is already in the bucketList
        }
      }
    }

    //else {
      //console.log("FALSE");
      return (<div><button onClick={this.postBucketList}>Add</button></div>); // returns false if can't find data in bucketList
    //}

  }

  postBucketList = () => {
    //add movie/show to bucketlist database using axios post
    axios.post('/api/add_item', this.props.modalData)
      .then(this.closeModal())
      .then(this.props.history.push("/dashboard"));
  }

  removeFromBucketList = (item) => {
    //item to be deleted is pass through parameter and will be redirected to dashboard
    //after deleting
    axios.post('/api/delete_item', item)
      .then(this.closeModal())
      .then(this.props.history.push("/dashboard"));
  }

  movieOrTelevisionModal() {
    const data = this.props.modalData;
    if (this.props.format === "movie") {
      return (
        <div>
          <h1>{data.title}</h1>
          <h3>{data.overview}</h3>
        </div>
      )
    }
    else {
      return (
        <div>
          <h1>{data.name}</h1>
          <h3>{data.overview}</h3>
        </div>
      )
    }
  }

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          {this.movieOrTelevisionModal()}
          {
            this.checkIfAdded()
          }
        </div>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    modalData: state.modalData
  };
}

export default  withRouter(connect(mapStateToProps)(DisplayModal));