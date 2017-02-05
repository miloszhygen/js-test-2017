import axios from 'axios';
import config from '../config.json';

export function fetchTrendingGifs() {
    return function (dispatch) {
        dispatch({
            type: 'FETCH_GIFS',
            payload: axios.get(`${config.giphy.API_URL}${config.giphy.API_KEY}`),
        });
    };
}


export function favoriteGif({ selectedGif }) {
    const giflocal = JSON.parse(localStorage.getItem('giflocal')) || [];
    giflocal.push(selectedGif);
    localStorage.setItem('giflocal', JSON.stringify(giflocal));
    return function (dispatch) {
        return dispatch({
            type: 'FETCH_FAVORITED_GIFS',
            payload: JSON.parse(localStorage.getItem('giflocal')),
        });
    };
}


export function unfavoriteGif({ selectedGif }) {
    const giflocal = JSON.parse(localStorage.getItem('giflocal'));

    giflocal.map((value, index) => {
        if (value.id === selectedGif.id) {
            giflocal.splice(index, 1);
        }
        return null;
    });

    localStorage.setItem('giflocal', JSON.stringify(giflocal));

    return function (dispatch) {
        return dispatch({
            type: 'FETCH_FAVORITED_GIFS',
            payload: JSON.parse(localStorage.getItem('giflocal')),
        });
    };
}

export function fetchFavoritedGifs() {
    return function (dispatch) {
        return dispatch({
            type: 'FETCH_FAVORITED_GIFS',
            payload: JSON.parse(localStorage.getItem('giflocal')) || [],
        });
    };
}
