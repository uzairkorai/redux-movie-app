import React from 'react';
import { connect } from 'react-redux';

const MovieDetails = (props) => {
    if(!props.selectedMovie) {
        return (
            <div className="details-container" style={{ width: '70%' }}>
                <h1>Movie</h1>
                <div className="properties">
                    <p>Select Movie</p>
                </div>
            </div>
        )
    }

    else {
        return (
            <div className="details-container" style={{ width: '70%' }}>
                <h1>Movie</h1>
                <div className="properties">
                    <p>Title: {props.selectedMovie.title}</p>
                    <p>Release Date: {props.selectedMovie.releaseDate}</p>
                    <p>Rating: {props.selectedMovie.rating}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedMovie: state.selectedMovie
    }
}

export default connect(mapStateToProps)(MovieDetails); 