import favouritesConstants from './constants'
import { createAction, nanoid } from '@reduxjs/toolkit'

const {
    SUCCESS,
    ERROR,
    PENDING,
    ADD_FAVOURITE,
    REMOVE_FAVOURITE
} = favouritesConstants


const fetchFavourites = createAction(PENDING)
const errorFavoutires = createAction(ERROR)
const receiveFavoutires = createAction(SUCCESS, function prepare(json){
    return{ 
        payload: {
        receivedAt: Date.now(),
        id: nanoid(),
        favourites: json.map(fav =>({
            [`${fav.id || nanoid()}`]: {...fav}
        }))
        }
    }
})

export const addFavourite = createAction(ADD_FAVOURITE)
export const removeFavourite = createAction(REMOVE_FAVOURITE)


const allActions = {
    fetchFavourites,
    errorFavoutires,
    receiveFavoutires,
    addFavourite,
    removeFavourite
}

export default allActions