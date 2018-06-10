import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 1,
            maxPage: 1000,
            display: []
        }
        this.getMovieDiscoverData = this.getMovieDiscoverData.bind(this);
        this.loadMoreDiscoverData = this.loadMoreDiscoverData.bind(this);
    }

    componentWillMount() {
        this.getMovieDiscoverData();
    }

    getMovieDiscoverData() {
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=508d690fdc412430a70ba8b4d841b0e0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${this.state.page}`;
        axios(url)
            .then(res => {
                res.data.results.forEach(movie => {
                    const joined = this.state.display.concat(movie.title);
                    this.setState({ display: joined}, () => console.log(this.state.display));
                });
            });
    }

    loadMoreDiscoverData(){
        if(this.state.page < this.state.maxPage){
            this.setState(prevState => {
                return { page: prevState.page + 1}
            }, () => console.log(this.state.page));

            this.getMovieDiscoverData();
        }
    }


    render() {
        return (
            <div>
                <h1>TEST</h1>
                {this.state.display}
                <button onClick={this.loadMoreDiscoverData}>Add more</button>
            </div>
        );
    }
}

export default Search;