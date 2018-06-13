import React, { Component } from 'react';
import axios from 'axios';
import DiscoverMovieModal from './DiscoverMovieModal';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 1,
            maxPage: 1000,
            display: [],
            isOpen: false,
            movieData: {}
        }
        this.getMovieDiscoverData = this.getMovieDiscoverData.bind(this);
        this.loadMoreDiscoverData = this.loadMoreDiscoverData.bind(this);
        this.renderModal = this.renderModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentWillMount() {
        this.getMovieDiscoverData(); //this page will initially call this function to get movie data
    }

    getMovieDiscoverData() {
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=508d690fdc412430a70ba8b4d841b0e0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${this.state.page}`;
        axios(url)
            .then(res => {
                res.data.results.forEach(movie => {
                    let imageLink = `https://image.tmdb.org/t/p/w500${movie.poster_path}`; //link to the poster image
                    let HTMLMovie = (
                        <div className="movie">
                            <img onClick={() => this.renderModal(movie)} className="movie__img" src={imageLink} alt="" />
                        </div>
                    );
                    const joined = this.state.display.concat(HTMLMovie); //concat the state array with new list of movies
                    this.setState({ display: joined }, () => console.log(this.state.display));
                });
            });
    }

    loadMoreDiscoverData() {
        if (this.state.page < this.state.maxPage) { // maxpage is 1000, and if current page is less, add to it
            this.setState(prevState => {
                return { page: prevState.page + 1 }
            }, () => this.getMovieDiscoverData()); // call getMovieDiscoverData to get next page of data
        }
    }

    renderModal(movie){
        this.setState({ isOpen: true, movieData: movie }, console.log("RENDER"));
    }

    closeModal(){
        this.setState({ isOpen: false })
    }

    render() {
        return (
            <div>
                <h1>TEST</h1>
                <h2>{this.state.isOpen.toString()}</h2>
                <div className="movieList">
                    {this.state.display}
                </div>
                <DiscoverMovieModal
                    isOpen={this.state.isOpen}
                    closeModal={this.closeModal}
                    movieData={this.state.movieData}
                />
                <button onClick={this.loadMoreDiscoverData}>Add more</button>
            </div>
        );
    }
}

export default Search;