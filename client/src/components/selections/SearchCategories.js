import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchCategories extends Component {
    renderGenreListHTML() {
        let list = [];
        if(this.props.genres){
            list = this.props.genres.map(item => {
                return (
                    <div onClick={() => this.props.setGenre(item.id)} key={item.name} className="genre_item">
                        <p>{item.name}</p>
                    </div>
                )
            });
        }

        console.log(this.props.genres)
        return list;
    }

    render() {
        return (
            <div className="genre_list">
                {this.renderGenreListHTML()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        genres: state.genreList.genres
    };
}

export default connect(mapStateToProps)(SearchCategories);