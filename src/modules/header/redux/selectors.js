import { createSelector } from 'reselect'


const getAllNavLinks = state => state.navigation


export const allLinks = () =>{
    return createSelector(
        [getAllNavLinks],
        (links) => links
    )
}


export default {
    allLinks
}