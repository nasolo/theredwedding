import { createSelector } from 'reselect'

const getFavoutiresState = state => state.favourites

export const selectedFavourites = createSelector(
    [getFavoutiresState],
    (state) => {

        const { favourites } = state
        const ids = favourites && favourites.length > 0 ? favourites.map(fav => fav.id) : []
        
        console.log(ids)

        return {
            favourites,
            keys: ids
        }
    
    }
)

export const selectedFavourite = createSelector(
    [getFavoutiresState, id => id],
    (state, selectedId) => state.filter(favourite => favourite.id === selectedId)
)

