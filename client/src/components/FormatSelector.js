import React, { Component } from 'react';

class FormatSelector extends Component {
    render() {
        return (
            <div>
                <div className="search-buttons" role="group" aria-label="Basic example">
                    <div>
                        <button className="search-buttons__group">Top Rated</button>
                        <button className="search-buttons__group">Custom Search</button>
                        <button className="search-buttons__group">Search By Category</button>
                    </div>
                    <div>
                        <button type="button" className="search-buttons__format">Television Shows</button>
                        <button type="button" className="search-buttons__format">Movies</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormatSelector;