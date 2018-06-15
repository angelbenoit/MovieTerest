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
        this.formatSelection = this.formatSelection.bind(this);
    }

    formatSelection(format){
        this.setState({ searchTypeFormat: format}, console.log("Updated format"));
    }

    searchTypeRender(format){
        switch(this.state.searchType){
            case "MostPopular":
                return (
                    <MostPopular
                        searchTypeFormat={format}
                        page={this.state.page}
                        maxPage={this.state.maxPage}
                        onSwitch={this.state.onSwitch}
                    />
                );
        }
    }

    render() {
        return (
            <div className="search">
                <Navbar/>
                <FormatSelector formatSelection={this.formatSelection} />
                {this.searchTypeRender(this.state.searchTypeFormat)}
            </div>
        );
    }
}

export default Search;