import React, { Component } from 'react';

class SearchFormatButtons extends Component {
    render() {
        return (
            <div>
                {/* These two buttons will appear when user clicks on one of the buttons above */}
                <div>
                    <button type="button" className="search-buttons__format">Television Shows</button>
                    <button type="button" className="search-buttons__format">Movies</button>
                </div>
            </div>
        );
    }
}

export default SearchFormatButtons;