import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../Actions';

class genreSelectionPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            selectedGenres: []
        }
        this.updateGenres = this.updateGenres.bind(this);
        this.updateStyle = this.updateStyle.bind(this);
    }
    componentWillMount() {
        this.props.resetPopular();
        this.props.fetchGenreList(this.props.match.params.format);
    }

    displayGenreList(){
        let list = this.props.genreList.map(genre => {
            return (
                <div
                    className={genre.name}
                    onClick={() => this.updateGenres(genre.id)}
                    style={this.updateStyle(genre.id)}
                >
                    {genre.name}
                </div>
            )
        });
        return list;
    }

    updateStyle(genreID){
        for(let i = 0; i < this.state.selectedGenres.length; i++){
            if(this.state.selectedGenres[i] === genreID)
                //if user picked this genre, give it a pink border
                return {border: '5px solid pink'};
        }
        //all non selected genres get a blue border
        return {border: '5px solid blue'};
    }

    updateGenres(genre){
        const indexGenre = this.state.selectedGenres.indexOf(genre);
        console.log("INDEX OF " + indexGenre)
        if(indexGenre === -1){
            //if indexOf function returns -1, it's not in user selected genres array and will be added to it
            this.setState({ selectedGenres: this.state.selectedGenres.concat(genre)}, () => console.log(this.state.selectedGenres));
        }
        else{
            //user can deselect a highlighted genre by clicking on it and it'll get rid of
            //the genre in the array and will remove the highlights
            let temp = this.state.selectedGenres.filter(function(item){
                return item !== genre;
            });
            this.setState({ selectedGenres: temp}, () => console.log(this.state.selectedGenres))
        }
    }
    render() {
        const genres = this.displayGenreList(this.props.genreList);
        //console.log(genres)
        return (
            <div>
                { genres }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        genreList: state.genreList
    };
}

export default withRouter(connect(mapStateToProps, actions)(genreSelectionPage));