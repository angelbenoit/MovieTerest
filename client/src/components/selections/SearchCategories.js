import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchCategories extends Component {
    renderGenreListHTML() {
        let list = [];
        for(var key in this.props.genres){
            //console.log(this.props.genres[key]);
            list.push((<div>{this.props.genres[key].name}</div>))
        }
        console.log(list)
        return list;
    }

    render() {
        return (
            <div>
                {this.renderGenreListHTML()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        genres: state.genreList
    };
}

export default connect(mapStateToProps)(SearchCategories);