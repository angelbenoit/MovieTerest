import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../Actions';

class SearchPopular extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            page: 1
        }
        this.getList = this.getList.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }

    componentWillMount() {
        this.props.resetPopular();
        this.props.fetchPopular(this.props.match.params.format, this.state.page);
    }

    loadMore(){
        this.setState(prevState => {
            return {page: prevState.page+1}
        }, () => this.props.fetchPopular(this.props.match.params.format, this.state.page));
    }

    seeMore(itemID){
        this.props.history.push(`/${this.props.match.params.format}/${itemID}`)
    }

    getList() {
        let arr = [];
        console.log(this.props.popular)
            arr = this.props.popular.map(item => {
                return (
                    <div key={item.id} className="movie">
                        <img
                            src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                            onClick={() => this.seeMore(item.id)}
                        />
                    </div>)
            })
        return arr;
    }

render() {
    let renderedData = this.getList();
    return (
        <div>
            { renderedData }
            <button onClick={this.loadMore}>Load More</button>
        </div>
    );
}
}

function mapStateToProps(state) {
    return {
        popular: state.popular
    };
}


export default withRouter(connect(mapStateToProps, actions)(SearchPopular));