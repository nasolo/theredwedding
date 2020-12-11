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
const errorMedia = createAction(ERROR)
const receiveMedia = createAction(SUCCESS, function prepare(json){
    return{ 
        payload: {
        receivedAt: Date.now(),
        id: nanoid(),
        userFavourites: json.map(fav =>({
            [fav.id]: {...fav}
        }))
        }
    }
})
