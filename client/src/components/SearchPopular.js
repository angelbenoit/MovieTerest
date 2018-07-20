import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../Actions';

class SearchPopular extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            page: 1,
            searchType: {}
        }
        this.getList = this.getList.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }

    componentWillMount() {
        this.props.resetPopular();

        if (this.props.match.params.genreList === "none")
            this.props.fetchPopular(this.props.match.params.format, this.state.page);
        else
            this.props.fetchByGenre(this.props.match.params.format, this.state.page, this.props.match.params.genreList);
    }

    loadMore() {
        if (this.props.match.params.genreList === "none") {
            this.setState(prevState => {
                return { page: prevState.page + 1 }
            }, () => this.props.fetchPopular(this.props.match.params.format, this.state.page));
        }
        else {
            this.setState(prevState => {
                return { page: prevState.page + 1 }
            }, () => this.props.fetchByGenre(this.props.match.params.format, this.state.page, this.props.match.params.genreList));
        }

    }

    seeMore(itemID) {
        this.props.history.push(`/${this.props.match.params.format}/${itemID}`)
    }

    getList() {
        let arr = [];
        let data;
        if (this.props.match.params.genreList === "none")
            data = this.props.popular;
        else
            data = this.props.searchByGenre;

        console.log(data)
        arr = data.map(item => {
            if (item.poster_path !== null) {
                return (
                    <div key={item.id} className="movie">
                        <img
                            src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                            onClick={() => this.seeMore(item.id)}
                        />
                    </div>)
            }
        })
        return arr;
    }

    render() {
        let renderedData = this.getList();
        return (
            <div>
                {renderedData}
                <button onClick={this.loadMore}>Load More</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        popular: state.popular,
        searchByGenre: state.searchByGenre
    };
}


export default withRouter(connect(mapStateToProps, actions)(SearchPopular));