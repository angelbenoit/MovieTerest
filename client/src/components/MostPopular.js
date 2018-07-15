import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../Actions/index';
import { withRouter } from "react-router-dom";

class MostPopular extends Component {

    displayModal(data) {
        this.props.modalDisplay(data);
        //if data format is "TV SHOW", then we can use data.name, if it's "MOVIE", use data.title
        //json has different properties for different formats
        //this.props.fetchByID(data.id, this.props.format);
        this.props.history.push(`/${this.props.format}/${data.id}`);
    }

    tests(data) {
        let tempArray = [];
        if (data) {
            //console.log(data)
            data.map(item => {
                if (item && item.poster_path) {
                    tempArray.push(
                        <div key={item.id} className="movie">
                            <img
                                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                                onClick={() => this.displayModal(item)}
                            />
                        </div>
                    )
                }

            })
        }
        //console.log(tempArray)
        return tempArray;
    }

    render() {
        return (
            <div>
                <div className="movieList">
                    {this.props.searchType === "genre" ? this.tests(this.props.genre) : this.tests(this.props.popular)}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        popular: state.popular,
        genre: state.searchByGenre.results
    };
}

export default withRouter(connect(mapStateToProps, actions)(MostPopular));