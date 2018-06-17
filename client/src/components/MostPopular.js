import React, { Component } from 'react';
import DiscoverMovieModal from './DiscoverMovieModal';

class MostPopular extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        console.log(this.props.data)
        return (
            <div>
                {this.props.data.map(item => <h1>{item.name}</h1>)}
            </div>
        );
    }
}

export default MostPopular;