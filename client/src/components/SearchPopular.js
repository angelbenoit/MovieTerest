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
        this.renderTopRatedData = this.renderTopRatedData.bind(this);
    }

    componentWillMount() {
        this.renderTopRatedData(this.props.match.params.format);
    }

    renderTopRatedData(format) {
        this.props.resetPopular();
        if (this.props.match.params.genreList === "none") {
            this.props.fetchPopular(format, 1);
        }
        else {
            this.props.fetchByGenre(format, 1, this.props.match.params.genreList);

        }
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.match.params.genreList !== this.props.match.params.genreList) {
            window.location.reload();
            //Bug when doing a search by genre to just doing a regular search,
            //items won't show up on screen, so window will reload page if this is done
            this.renderTopRatedData(nextProps.match.params.format);
        }

        else if (nextProps.match.params.format !== this.props.match.params.format) {
            this.renderTopRatedData(nextProps.match.params.format);
        }
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
                    <div className="text-hover">
                        <img
                            className="item_poster"
                            src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                        //onClick={() => this.seeMore(item.id)}
                        />
                        <div
                            class="overlay"
                            onClick={() => this.seeMore(item.id)}
                        >
                            <div class="text">{item.name || item.title}</div>
                        </div>
                    </div>
                )
            }
        })
        return arr;
    }

    render() {
        let renderedData = this.getList();
        return (
            <div className="search">
                <div className="search__container">
                    <div className="search__list">
                        {renderedData}
                    </div>
                    <div className="loadMorePos">
                        <button className="linearButton" onClick={this.loadMore}>Load More</button>
                    </div>
                </div>
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