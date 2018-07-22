import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../Actions';

class genreSelectionPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedGenres: []
        }
        this.submitGenres = this.submitGenres.bind(this);
        this.updateGenres = this.updateGenres.bind(this);
        this.updateStyle = this.updateStyle.bind(this);
    }
    componentWillMount() {
        this.props.resetGenreList();
        this.props.fetchGenreList(this.props.match.params.format);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.format !== this.props.match.params.format) {
            this.props.resetGenreList();
            this.props.fetchGenreList(nextProps.match.params.format);
        }
    }

    displayGenreList() {
        let list = this.props.genreList.map(genre => {
            return (
                <div
                    className={`${genre.name} genreItem`}
                    onClick={() => this.updateGenres(genre.id)}
                    style={this.updateStyle(genre.id)}
                >
                    <p>{genre.name}</p>
                </div>
            )
        });
        return list;
    }

    submitGenres() {
        //   /search/movie/popular/none
        if (this.state.selectedGenres.length > 0)
            this.props.history.push(`/search/${this.props.match.params.format}/popular/${this.state.selectedGenres}`);
        else
            alert("Enter at least one genre");
    }

    updateStyle(genreID) {
        for (let i = 0; i < this.state.selectedGenres.length; i++) {
            if (this.state.selectedGenres[i] === genreID)
                //if user picked this genre, give it a pink border
                return {
                    'background-color': '#004d7a',
                };
        }
    }

    updateGenres(genre) {
        const indexGenre = this.state.selectedGenres.indexOf(genre);
        console.log("INDEX OF " + indexGenre)
        if (indexGenre === -1) {
            //if indexOf function returns -1, it's not in user selected genres array and will be added to it
            this.setState({ selectedGenres: this.state.selectedGenres.concat(genre) }, () => console.log(this.state.selectedGenres));
        }
        else {
            //user can deselect a highlighted genre by clicking on it and it'll get rid of
            //the genre in the array and will remove the highlights
            let temp = this.state.selectedGenres.filter(function (item) {
                return item !== genre;
            });
            this.setState({ selectedGenres: temp }, () => console.log(this.state.selectedGenres))
        }
    }
    render() {
        const genres = this.displayGenreList(this.props.genreList);
        //console.log(genres)
        return (
            <div className="genrePage">
                <h1>Select genre(s) for {this.props.match.params.format} format</h1>
                <div className="selectionContainer">
                    <div className="card">
                        {genres}
                    </div>
                    <div className="loadMorePos">
                        <button onClick={this.submitGenres} className="linearButton">Search</button>
                    </div>
                </div>

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