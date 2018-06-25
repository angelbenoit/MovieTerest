import React, { Component } from 'react';
import MovieModal from './modals/MovieModal';
import { connect } from 'react-redux';
import * as actions from '../Actions/index';

class MostPopular extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openModal: false,
            modalData: {}
        }
        this.displayModal = this.displayModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    displayModal(data){
        this.setState({ openModal: true });
        this.props.modalDisplay(data);
    }

    closeModal(){
        this.setState({ openModal: false });
    }

    tests(data){
        let tempArray = [];
        if(data){
            console.log(data)
            data.map(item => {
                tempArray.push(
                    <div key={item.poster_path} className="movie">
                        <img
                            src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                            onClick={() => this.displayModal(item)}
                            />
                    </div>
                )
            })
        }
        return tempArray;
    }


    render() {
        //console.log(this.tests())
        return (
            <div className="movieList">
                {this.props.format === "genre" ?  this.tests(this.props.genre) : this.tests(this.props.popular)}
                <MovieModal
                    isOpen={this.state.openModal}
                    closeModal={this.closeModal}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        popular: state.popular.results,
        genre: state.searchByGenre.results
    };
}

export default connect(mapStateToProps, actions)(MostPopular);