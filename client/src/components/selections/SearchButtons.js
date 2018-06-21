import React, { Component } from 'react';

class SearchButtons extends Component {
    render() {
        return (
            <div>
                {/* These three buttons will be shown by default */}
                <button onClick={() => this.props.formatSelection("MostPopular")} className="search-buttons__group">Top Rated</button>
                <button className="search-buttons__group">Custom Search</button>
                <button className="search-buttons__group">Search By Category</button>
            </div>
        );
    }
}


export default SearchButtons;