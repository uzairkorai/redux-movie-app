import { combineReducers } from 'redux';

const moviesReducer = () => {
    return [
        { title: 'Spider-Man: Homecoming', releaseDate: '05-07-2017', rating: 7.4, },
        { title: 'Aqua Man', releaseDate: '12-07-2018', rating: 7, },
        { title: 'Black Panther', releaseDate: '02-13-2018', rating: 7.4, },
        { title: 'Avengers Infinity War', releaseDate: '04-25-2018', rating: 8.3, },
        { title: 'Kabir Singh', releaseDate: 'June 20, 2019', rating: 7.7, },
    ]
}

const selectedMovieReducer = (state = null, action) => {
    switch (action.type) {
        case 'MOVIE_SELECTED':
            return action.payload
        default:
            return state
    }
}

export default combineReducers({
    movies: moviesReducer,
    selectedMovie: selectedMovieReducer
})