import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../Actions';

class genreSelectionPage extends Component {
    componentWillMount() {
        this.props.resetPopular();
        this.props.fetchGenreList(this.props.match.params.format);
    }

    displayGenreList(){
        let list = this.props.genreList.map(genre => {
            return (
                <div>{genre.name}</div>
            )
        });
        return list;
    }
    render() {
        const genres = this.displayGenreList(this.props.genreList);
        //console.log(genres)
        return (
            <div>
                { genres }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        genreList: state.genreList
    };
}

export default withRouter(connect(mapStateToProps, actions)(genreSelectionPage));