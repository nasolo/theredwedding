import favouritesConstants from "./constants";
import allActions from './actions'

const {
    SUCCESS, PENDING, ERROR, API
} = favouritesConstants

const {
    fetchFavourites,
    errorFavoutires,
    receiveFavoutires,
} = allActions

export const FETCH_FAVOUTIRES_CONFIG = {
        type: API,
        url: '/data/favourites.json',
        payload:{
            SUCCESS,
            PENDING,
            ERROR,
        actions: {
            SUCCESS: receiveFavoutires,
            PENDING: fetchFavourites,
            ERROR: errorFavoutires
        }
    }
}