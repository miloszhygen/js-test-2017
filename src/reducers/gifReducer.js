const initialStat = {
    fetching: false,
    fetched: false,
    gifs: [],
    fav: [],
    error: null,
};

export default function reducer(state = initialStat, action) {
    switch (action.type) {
    case 'FETCH_GIFS_PENDING': {
        return { ...state, fetching: true };
    }
    case 'FETCH_GIFS_REJECTED': {
        return { ...state, fetching: false, error: action.payload };
    }
    case 'FETCH_GIFS_FULFILLED': {
        return {
            ...state,
            fetching: false,
            fetched: true,
            gifs: action.payload,
        };
    }
    case 'FETCH_FAVORITED_GIFS': {
        return {
            ...state,
            fav: action.payload,
        };
    }
    default:
        return state;
    }
}
