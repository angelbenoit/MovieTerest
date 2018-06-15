import React, { Component } from 'react';

class FormatSelector extends Component {
    render() {
        return (
            <div>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="showButton">Television Shows</button>
                    <button type="button" className="movieButton">Movies</button>
                </div>
            </div>
        );
    }
}

export default FormatSelector;