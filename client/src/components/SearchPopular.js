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
    }
    componentWillMount() {
        //console.log(this.props.match.params.format)
        this.props.resetPopular();
        this.props.fetchPopular(this.props.match.params.format, this.state.page);
    }

    getList() {
        let arr = [];
        console.log(this.props.popular)
            arr = this.props.popular.map(item => {
                return (
                    <div key={item.id} className="movie">
                        <img
                            src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                            //onClick={() => this.displayModal(item)}
                        />
                    </div>)
            })
        return arr;
    }

render() {
    let test = this.getList();
    return (
        <div>
            {test}
        </div>
    );
}
}

function mapStateToProps(state) {
    return {
        popular: state.popular,
        updatedList: state.displayList
    };
}


export default withRouter(connect(mapStateToProps, actions)(SearchPopular));