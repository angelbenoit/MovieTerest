import React, { Component } from 'react';
import DiscoverMovieModal from './DiscoverMovieModal';
import { connect } from 'react-redux';

class MostPopular extends Component {
    constructor(props) {
        super(props);
    }

    tests(){
        let tempArray = [];
        if(this.props.test){
            console.log(this.props.test)
            this.props.test.map(item => {
                tempArray.push(
                    <div>
                        <h1>{item.original_name}</h1>
                    </div>
                )
            })
        }
        return tempArray;
    }


    render() {
        console.log(this.tests())
        return (
            <div>
                {/* {this.props.data} */}
                {this.tests()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        popular: state.popular.results
    };
}

export default connect(mapStateToProps)(MostPopular);