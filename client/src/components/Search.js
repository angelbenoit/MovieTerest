import React, { Component } from 'react';
import { connect } from 'react-redux';
import MostPopular from './MostPopular';
import Navbar from './Navbar';
import * as actions from '../Actions/index';
import DefaultSearch from './selections/SearchButtons';
import FormatButtons from './selections/SearchFormatButtons';
import SearchGenres from './selections/SearchCategories';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 1,          // initial page starts at 1
            maxPage: 1000,   // The api allows a maximum of 1000 pages
            searchType: "discover", // seach type is "mostpopular" by default
            searchTypeFormat: "tv", // search type format is "movie" by default and can also pick tv format
            genre: 18, //default genre id is an integer
            showFormatButtons: false,
        }
        this.formatSelection = this.formatSelection.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.renderGenres = this.renderGenres.bind(this);
        this.searchTypeSelection = this.searchTypeSelection.bind(this);
        this.setGenre = this.setGenre.bind(this);
        this.updateData = this.updateData.bind(this);
    }

    componentDidMount() {
        this.updateData();
        this.setState({ page: 1, searchTypeFormat: "tv"});
        this.props.resetPopular();
    }

    updateData(){
        console.log(this.state.genre);
        switch(this.state.searchType){
            case "discover":
                this.props.fetchPopular(this.state.searchTypeFormat, this.state.page);
            case "genre":
                this.props.fetchByGenre(this.state.searchTypeFormat, this.state.page, this.state.genre);
        }

    }

    formatSelection(format){
        this.setState({ searchType: format, showFormatButtons: true}, () => this.updateData());
    }

    renderGenres(){
        this.props.fetchGenreList(this.state.searchTypeFormat);
        return (<SearchGenres setGenre={this.setGenre}/>);
    }

    searchTypeSelection(format){
        this.setState({ searchTypeFormat: format}, () => this.updateData());
    }

    setGenre(id){
        this.setState({ genre: id}, () => this.updateData());
    }

    updateSearch(){
        if(this.state.page <= 1000){
            this.setState(prevState => {
                return { page: prevState.page + 1 }
            }, () => this.updateData());
        }
    }

    render() {
        return (
            <div className="search">
                <Navbar/>
                <div className="search-buttons">
                    <DefaultSearch
                        formatSelection={this.formatSelection}
                    />
                    {
                        this.state.showFormatButtons ?
                        <FormatButtons searchTypeFormat={this.searchTypeSelection}/> : ""
                    }
                    {
                        this.state.searchType === "genre" ?
                        this.renderGenres() :
                        ""
                    }

                </div>

                <MostPopular
                    searchType={this.state.searchType}
                    format={this.state.searchTypeFormat}
                />
                <button onClick={this.updateSearch}>TEST</button>
            </div>
        );
    }
}

export default connect(null, actions)(Search);