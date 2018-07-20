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
        this.props.resetPopular();
        this.props.fetchGenreList(this.props.match.params.format);
    }

    displayGenreList() {
        let list = this.props.genreList.map(genre => {
            return (
                <div
                    className={`${genre.name} genreItem card-body`}
                    onClick={() => this.updateGenres(genre.id)}
                    style={this.updateStyle(genre.id)}
                >
                    <p>{genre.name}</p>
                </div>
            )
        });
        return list;
    }

    submitGenres(){
        //   /search/movie/popular/none
        if(this.state.selectedGenres.length > 0)
            this.props.history.push(`/search/${this.props.match.params.format}/popular/${this.state.selectedGenres}`);
        else
            alert("Enter at least one genre");
    }

    updateStyle(genreID) {
        for (let i = 0; i < this.state.selectedGenres.length; i++) {
            if (this.state.selectedGenres[i] === genreID)
                //if user picked this genre, give it a pink border
                return {
                    'border': '1px solid rgba(92, 98, 170, 0.979)',
                    'background-color': 'rgba(92, 96, 138, 0.884)',
                };
        }
        //all non selected genres get a blue border
        return {
            'border': '1px solid rgba(114, 120, 187, 0.979)'
        };
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
            <div>
                <h1>Select genre(s) for {this.props.match.params.format} format</h1>
                <div className="card">
                    {genres}
                </div>
                <button onClick={this.submitGenres} className="submitGenres">Search</button>
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