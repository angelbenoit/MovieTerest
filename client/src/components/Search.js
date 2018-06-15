import React, { Component } from 'react';
import FormatSelector from './FormatSelector';
import MostPopular from './MostPopular';
import Navbar from './Navbar';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchType: "MostPopular", // seach type is "mostpopular" by default
            searchTypeFormat: "tv", // search type format is "movie" by default and can also pick tv format
         }
    }

    searchTypeRender(){
        switch(this.state.searchType){
            case "MostPopular":
                return (
                    <MostPopular
                        searchTypeFormat={this.state.searchTypeFormat}
                        page={this.state.page}
                        maxPage={this.state.maxPage}
                        loadMoreDiscoverData={this.loadMoreDiscoverData}
                    />
                );
        }
    }

    render() {
        return (
            <div className="search">
                <Navbar/>
                <FormatSelector/>
                {this.searchTypeRender()}
            </div>
        );
    }
}

export default Search;