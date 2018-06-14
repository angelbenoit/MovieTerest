import React, { Component } from 'react';
import axios from 'axios';
import DiscoverMovieModal from './DiscoverMovieModal';

class MostPopular extends Component {
    constructor(props) {
        super(props);

        this.state = {
            display: [],
            isOpen: false,
            movieData: {}
        }

        this.getMovieDiscoverData = this.getMovieDiscoverData.bind(this);
    }

    componentWillMount() {
        this.getMovieDiscoverData(); //this page will initially call this function to get movie data
    }

    getMovieDiscoverData() {
        let url = `https://api.themoviedb.org/3/discover/${this.props.searchTypeFormat}?api_key=508d690fdc412430a70ba8b4d841b0e0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${this.props.page}`;
        console.log(url);
        axios(url)
            .then(res => {
                res.data.results.forEach(movie => {
                    let imageLink = `https://image.tmdb.org/t/p/w400${movie.poster_path}`; //link to the poster image
                    let HTMLMovie = (
                        <div className="movie">
                            <img onClick={() => this.renderModal(movie)} className="movie__img" src={imageLink} alt="" />
                            {/* When User clicks on a movie poster, a modal will open with more info */}
                        </div>
                    );
                    const joined = this.state.display.concat(HTMLMovie); //concat the state array with new list of movies
                    this.setState({ display: joined }, () => console.log(this.state.display));
                });
            });
    }

    renderModal(movie){
        this.setState({ isOpen: true, movieData: movie }, console.log("RENDER"));
        //Allows modal to open and also passes data object from the GET request from getMovieDiscoverData()
    }

    closeModal(){
        this.setState({ isOpen: false }); //closes modal
    }

    render() {
        return (
            <div>
                <h1>See the hottest {this.props.searchTypeFormat}s</h1>
                <div className="movieList">
                    {this.state.display}
                </div>

                <DiscoverMovieModal
                    isOpen={this.state.isOpen}
                    closeModal={this.closeModal}
                    movieData={this.state.movieData}
                />
                <button onClick={this.props.loadMoreDiscoverData}>Add more</button>
            </div>
        );
    }
}

export default MostPopular;