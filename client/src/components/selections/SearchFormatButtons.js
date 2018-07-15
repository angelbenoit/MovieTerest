import React, { Component } from 'react';

class SearchFormatButtons extends Component {
    render() {
        return (
            <div>
                {/* These two buttons will appear when user clicks on one of the buttons above */}
                <div>
                    <button onClick={() => this.props.searchTypeFormat("tv")} type="button" className="search-buttons__format">Television Shows</button>
                    <button onClick={() => this.props.searchTypeFormat("movie")} type="button" className="search-buttons__format">Movies</button>
                </div>
            </div>
        );
    }
}

export default SearchFormatButtons;