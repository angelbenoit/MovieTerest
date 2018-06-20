import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
class PopularModal extends React.Component {
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

  render() {
      const data = this.props.modalData;
    return (
        <Modal
          isOpen={this.props.isOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h1>{data.name}</h1>
        </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {
      modalData: state.modalData
  };
}

export default connect(mapStateToProps)(PopularModal);