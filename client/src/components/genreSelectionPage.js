import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../Actions';

class genreSelectionPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            selectedGenres: []
        }
        this.updateGenres = this.updateGenres.bind(this);
        this.updateStyle = this.updateStyle.bind(this);
    }
    componentWillMount() {
        this.props.resetPopular();
        this.props.fetchGenreList(this.props.match.params.format);
    }

    displayGenreList(){
        let list = this.props.genreList.map(genre => {
            return (
                <div
                    className={genre.name}
                    onClick={() => this.updateGenres(genre)}
                    style={this.updateStyle(genre.id)}
                >
                    {genre.name}
                </div>
            )
        });
        return list;
    }

    updateStyle(genreID){
        for(let i = 0; i < this.state.selectedGenres.length; i++){
            if(this.state.selectedGenres[i] === genreID)
                return {border: '5px solid pink'};
        }
        return {border: '5px solid blue'};
    }

    updateGenres(genre){
        this.setState({ selectedGenres: this.state.selectedGenres.concat(genre.id)}, () => console.log(this.state.selectedGenres));
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