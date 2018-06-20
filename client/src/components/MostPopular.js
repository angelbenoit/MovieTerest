import React, { Component } from 'react';
import PopularModal from './PopularModal';
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

    tests(){
        let tempArray = [];
        if(this.props.popular){
            //console.log(this.props.popular)
            this.props.popular.map(item => {
                tempArray.push(
                    <div className="movie">
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
                {this.tests()}
                <PopularModal
                    isOpen={this.state.openModal}
                    closeModal={this.closeModal}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        popular: state.popular.results
    };
}

export default connect(mapStateToProps, actions)(MostPopular);