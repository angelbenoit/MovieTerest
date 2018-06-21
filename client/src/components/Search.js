import React, { Component } from 'react';
import { connect } from 'react-redux';
import MostPopular from './MostPopular';
import Navbar from './Navbar';
import * as actions from '../Actions/index';
import DefaultSearch from './selections/SearchButtons';
import FormatButtons from './selections/SearchFormatButtons';
import CustomSearch from './selections/SearchInputText';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 1,          // initial page starts at 1
            maxPage: 1000,   // The api allows a maximum of 1000 pages
            searchType: "discover", // seach type is "mostpopular" by default
            searchTypeFormat: "tv", // search type format is "movie" by default and can also pick tv format
            customQuery: "",
            showFormatButtons: false,
        }
        this.formatSelection = this.formatSelection.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.searchTypeSelection = this.searchTypeSelection.bind(this);
        this.searchTypeRender = this.searchTypeRender.bind(this);
        this.updateData = this.updateData.bind(this);
    }

    componentDidMount() {
        this.updateData();
    }

    updateData(){
        this.props.fetchPopular(this.state.searchType, this.state.searchTypeFormat, this.state.page, this.state.customQuery);
    }

    formatSelection(format){
        this.setState({ searchType: format, showFormatButtons: true}, () => this.updateData());
    }

    searchTypeSelection(format){
        this.setState({ searchTypeFormat: format}, () => this.updateData());
    }

    updateSearch(){
        if(this.state.page <= 1000){
            this.setState(prevState => {
                return { page: prevState.page + 1 }
            }, () => this.updateData());
        }
    }

    searchTypeRender(){
        console.log("Rendering data");
        switch(this.state.searchType){
            case "discover":
                return (
                    <MostPopular
                    />
                );
            case "search":
                return (
                    <MostPopular
                    />
                );
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
                        this.state.searchType === "search" ?
                        <CustomSearch /> :
                        ""
                    }

                </div>

                {this.searchTypeRender()}
                <button onClick={this.updateSearch}>TEST</button>
            </div>
        );
    }
}

export default connect(null, actions)(Search);