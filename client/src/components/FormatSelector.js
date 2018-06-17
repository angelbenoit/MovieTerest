import React, { Component } from 'react';

class FormatSelector extends Component {
    render() {
        return (
            <div>
                <div className="search-buttons" role="group" aria-label="Basic example">
                    {/* These three buttons will be shown by default */}
                    <div>
                        <button className="search-buttons__group">Top Rated</button>
                        <button className="search-buttons__group">Custom Search</button>
                        <button className="search-buttons__group">Search By Category</button>
                    </div>

                    {/* These two buttons will appear when user clicks on one of the buttons above */}
                    <div>
                        <button type="button" className="search-buttons__format">Television Shows</button>
                        <button type="button" className="search-buttons__format">Movies</button>
                    </div>

                    {
                        /*
                        If user clicks "Top Rated", user has nothing else to pick,
                        If user clicks "Custom Search", user will be presented with a text input option,
                        If user clicks "Search By Category", user will pick between a number of category buttons
                        */
                    }
                    <form>
                        <input className="custom-search" type="text" placeholder="Search"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormatSelector;