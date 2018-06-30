import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';

const customStyles = {
  content : {
    top                   : '50%',
    background            : '#3D76CB',
    color                 : 'white',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
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
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    this.props.closeModal();
  }

  movieOrTelevisionModal(){
    const data = this.props.modalData;
    if(this.props.format === "movie"){
      return(
        <div>
          <h1>{data.title}</h1>
          <h3>{data.overview}</h3>
        </div>
      )
    }
    else{
      return(
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
          {this.movieOrTelevisionModal()}
        </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {
      modalData: state.modalData
  };
}

export default connect(mapStateToProps)(DisplayModal);