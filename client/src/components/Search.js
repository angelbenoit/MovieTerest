import React, { Component } from 'react';
import { connect } from 'react-redux';
import MostPopular from './MostPopular';
import Navbar from './Navbar';
import * as actions from '../Actions/index';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 1,          // initial page starts at 1
            maxPage: 1000,   // The api allows a maximum of 1000 pages
            list: [],
            searchType: "MostPopular", // seach type is "mostpopular" by default
            searchTypeFormat: "tv", // search type format is "movie" by default and can also pick tv format
        }
        this.formatSelection = this.formatSelection.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.searchTypeRender = this.searchTypeRender.bind(this);
    }

    componentWillMount() {
        this.updateData();
    }

    updateData(){
        this.props.fetchPopular(this.state.searchTypeFormat, this.state.page);
        if(this.props.popular.results){
            this.setState({list: this.props.popular.results}, () => console.log(this.state.list));
        }
    }

    formatSelection(format){
        this.setState({ searchTypeFormat: format}, () => console.log("Updated format"));
    }

    updateSearch(){
        if(this.state.page <= 1000){
            this.setState(prevState => {
                return { page: prevState.page + 1 }
            }, () => this.updateData());
        }
    }

    searchTypeRender(){
        switch(this.state.searchType){
            case "MostPopular":
                return (
                    <MostPopular
                        data={this.state.list}
                    />
                );
        }
    }

    render() {
        return (
            <div className="search">
                <Navbar/>
                {this.searchTypeRender()}
                <button onClick={this.updateSearch}>TEST</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        popular: state.popular
    };
}


export default connect(mapStateToProps, actions)(Search);