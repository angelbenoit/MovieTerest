import React from 'react';
import Modal from 'react-modal';

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
class DiscoverMovieModal extends React.Component {
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
    const movie = this.props.movieData;
    return (
        <Modal
          isOpen={this.props.isOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
            <h1>{this.props.searchTypeFormat === "movie" ?
                movie.title:
                movie.original_name
              }</h1>
            <p>Released on: {
                this.props.searchTypeFormat === "movie" ?
                movie.release_date :
                movie.first_air_date
              }</p>
            <p>Rating: {movie.vote_average}</p>
            <p>{movie.overview}</p>
        </Modal>
    );
  }
}

export default DiscoverMovieModal;